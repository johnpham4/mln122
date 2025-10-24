import os
from dto import ChatRequest
import requests, json
from clean_text import clean_and_format, smart_format_text
from data_loader import load_context_from_file, get_relevant_paragraphs
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("API_KEY")
API_URL = os.getenv("API_URL")
MODEL_NAME = os.getenv("MODEL_NAME")


path = os.path.join(os.path.dirname(__file__), "knowledge", "ktct_chapter6.txt")
MAX_WORDS = 150

base_prompt = f"""
Bạn là Trợ lý Kinh tế chính trị Mác – Lênin.
Nhiệm vụ của bạn là trả lời các câu hỏi dựa trên nội dung trong ebook Kinh tế chính trị.
Nguyên tắc:
1. Trả lời ngắn gọn, rõ ràng, **trọn vẹn ý** trong giới hạn {MAX_WORDS} từ.
2. Nếu vượt quá giới hạn, hãy **tự tóm tắt súc tích hơn** để vẫn đủ ý.
3. Không được ngắt giữa chừng hoặc kết thúc lửng.
4. Nếu câu hỏi ngoài phạm vi Kinh tế chính trị, trả lời: “Tôi chỉ chuyên Kinh tế chính trị chương Công nghiệp hoá, hiện đại hoá và hội nhập kinh tế quốc tế của Việt Nam”
5. Nếu không chắc chắn, trả lời: “Tôi không chắc về điều đó.”
"""

context_text = load_context_from_file(path)
system_prompt = base_prompt + "\n\nTài liệu tham khảo:\n" + context_text

def limit_words(text, max_words=MAX_WORDS):
    words = text.split()
    if len(words) <= max_words:
        return text
    trimmed = " ".join(words[:max_words])
    if "." in trimmed:
        trimmed = trimmed[:trimmed.rfind(".")+1]
    return trimmed

greetings = ["hi", "hello", "chào", "chào bạn", "xin chào"]

def chat_service(request: ChatRequest):
    msg = request.message.strip().lower()
    if msg in greetings:
        return{"answer": "Xin chào! Tôi là Trợ lý Kinh tế chính trị Mác – Lênin chuyên về chương Công nghiệp hoá, hiện đại hoá và hội nhập kinh tế quốc tế của Việt Nam. Bạn có câu hỏi nào về nội dung không?"}
    relevant_context = get_relevant_paragraphs(request.message, context_text)
    system_prompt = base_prompt + "\n\nTài liệu tham khảo liên quan:\n" + relevant_context
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.message},
        ],
        "temperature": 0.7,
        "max_tokens": int(MAX_WORDS * 2),
    }
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    resp = requests.post(API_URL, headers=headers, json=payload)
    data = resp.json()
    raw_answer = data["choices"][0]["message"]["content"]
    final_answer = clean_and_format(limit_words(raw_answer, MAX_WORDS))
    return {"answer": final_answer}

def chat_service_streaming(request: ChatRequest):
    msg = request.message.strip().lower()
    if msg in greetings:
        greeting_msg = "Xin chào! Tôi là Trợ lý Kinh tế chính trị Mác – Lênin chuyên về chương Công nghiệp hoá, hiện đại hoá và hội nhập kinh tế quốc tế của Việt Nam"
        yield f"data: {json.dumps({'token': greeting_msg}, ensure_ascii=False)}\n\n"
        yield f"data: {json.dumps({'final': greeting_msg}, ensure_ascii=False)}\n\n"
        return
    relevant_context = get_relevant_paragraphs(request.message, context_text)
    system_prompt = base_prompt + "\n\nTài liệu tham khảo liên quan:\n" + relevant_context
    buffer = ""
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.message},
        ],
        "temperature": 0.7,
        "max_tokens": int(MAX_WORDS * 2),
        "stream": True
    }
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

    try:
        with requests.post(API_URL, headers=headers, json=payload, stream=True) as r:
            for line in r.iter_lines():
                if not line:
                    continue
                line = line.decode('utf-8')
                if not line.startswith("data: "):
                    continue

                data = line[len("data: "):].strip()
                if data == "[DONE]":
                    final_text = smart_format_text(buffer)
                    yield f"data: {json.dumps({'final': final_text}, ensure_ascii=False)}\n\n"
                    break

                try:
                    chunk = json.loads(data)
                    delta = chunk["choices"][0]["delta"].get("content", "")
                    if delta:
                        buffer += delta
                        yield f"data: {json.dumps({'token': delta}, ensure_ascii=False)}\n\n"
                except Exception as e:
                    print("Chunk parse error:", e)
                    continue
    except Exception as e:
        yield f"data: {json.dumps({'final': f'Error: {e}'}, ensure_ascii=False)}\n\n"
