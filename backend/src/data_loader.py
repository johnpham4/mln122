import os
import re

def load_context_from_file(file_path, max_chars=4000):
    if not os.path.exists(file_path):
        return ""
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    text = re.sub(r"\n{2,}", "\n\n", text.strip())
    text = text.replace("\ufeff", "").replace("\t", " ")

    return text[:max_chars]
    
    
def get_relevant_paragraphs(query: str, knowledge_text: str, top_k: int = 3):
    query_words = query.lower().split()
    paragraphs = knowledge_text.split("\n\n")  

    scored = []
    for p in paragraphs:
        score = sum(w in p.lower() for w in query_words)
        if score > 0:
            scored.append((score, p.strip()))

    scored.sort(reverse=True, key=lambda x: x[0])
    top_paras = [p for _, p in scored[:top_k]]

    return "\n\n".join(top_paras)