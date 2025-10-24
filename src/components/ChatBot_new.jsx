import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const ChatBot = ({ bookRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Xin chào! Tôi là trợ lý AI cho cuốn sách Công nghiệp hóa Việt Nam. Tôi có thể giúp bạn giải đáp thắc mắc! 📚",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponses = [
        "Theo lý thuyết Marx-Lenin, công nghiệp hóa là quá trình chuyển đổi cơ cấu kinh tế từ nông nghiệp sang công nghiệp hiện đại.",
        "Việt Nam đã thực hiện chính sách Đổi mới từ 1986 để thúc đẩy công nghiệp hóa. Điều này được đề cập chi tiết trong sách.",
        "Công nghiệp hóa xanh là xu hướng phát triển bền vững, cân bằng giữa tăng trưởng kinh tế và bảo vệ môi trường.",
        "Bạn có thể tham khảo thêm các hình ảnh minh họa và làm bài quiz trong sách để hiểu rõ hơn.",
        "Đây là chủ đề rất quan trọng trong phát triển kinh tế Việt Nam hiện đại.",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Tính toán vị trí
  let chatStyles = {
    top: "20px",
    right: "20px",
    width: "380px",
    height: "calc(100vh - 40px)",
  };

  if (bookRef?.current) {
    // Use document.querySelector instead of bookRef.current.querySelector
    const bookContainer = document.querySelector(".book-container");

    if (bookContainer) {
      const bookRect = bookContainer.getBoundingClientRect();
      const chatLeftPosition = bookRect.right + 40;
      const availableWidth = window.innerWidth - chatLeftPosition - 20;

      if (availableWidth >= 300) {
        chatStyles = {
          top: "20px",
          left: `${chatLeftPosition}px`,
          width: `${Math.min(380, availableWidth)}px`,
          height: "calc(100vh - 40px)",
        };
      }
    }
  }

  return ReactDOM.createPortal(
    <div className="fixed z-[1000]" style={chatStyles}>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-sm">AI Trợ lý</div>
                <div className="text-xs opacity-90">Công nghiệp hóa VN</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "flex-row-reverse" : "flex-row"
                } items-start animate-slide-up`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "user"
                      ? "bg-gradient-to-br from-green-500 to-emerald-600"
                      : "bg-gradient-to-br from-purple-500 to-indigo-600"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] ${
                    message.type === "user" ? "items-end" : "items-start"
                  } flex flex-col gap-1`}
                >
                  <div
                    className={`px-4 py-2.5 rounded-2xl shadow-sm ${
                      message.type === "user"
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-tr-sm"
                        : "bg-white text-slate-700 rounded-tl-sm border border-slate-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span className="text-xs text-slate-400 px-2">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-start animate-slide-up">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.16}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về nội dung sách..."
                className="flex-1 px-4 py-2.5 border border-slate-300 rounded-full text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  inputValue.trim() && !isTyping
                    ? "bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg hover:scale-110"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default ChatBot;
