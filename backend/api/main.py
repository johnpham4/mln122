from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import sys
import os

# Add src directory to path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
src_dir = os.path.join(parent_dir, 'src')
sys.path.insert(0, src_dir)

# Import from src
from dto import ChatRequest
from service.service import chat_service, chat_service_streaming

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
@app.get("/api/")
def serve_index():
    return HTMLResponse(content="<h1>MLN122 Backend API</h1><p>API is running successfully!</p>")

@app.get("/health")
@app.get("/api/health")
def health_check():
    return {"status": "healthy", "message": "FastAPI on Vercel working!"}

@app.post("/chat")
@app.post("/api/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    message = data.get("message", "")

    # Tạo ChatRequest object
    chat_request = ChatRequest(message=message)

    # Gọi service thực
    try:
        result = chat_service(chat_request)
        return {"response": result.get("answer", "Xin lỗi, có lỗi xảy ra.")}
    except Exception as e:
        print(f"Error calling chat_service: {e}")
        return {"response": "Xin lỗi, backend đang gặp sự cố. Vui lòng thử lại sau."}@app.post("/chat/stream")
@app.post("/api/chat/stream")
async def chat_stream_endpoint(request: Request):
    data = await request.json()
    message = data.get("message", "")

    # Tạo ChatRequest object
    chat_request = ChatRequest(message=message)

    return StreamingResponse(
        chat_service_streaming(chat_request),
        media_type="text/event-stream"
    )