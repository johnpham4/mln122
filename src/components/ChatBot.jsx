import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ChatBot = ({ bookRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Xin chào! Tôi là trợ lý AI cho cuốn sách Công nghiệp hóa Việt Nam. Tôi có thể giúp bạn giải đáp thắc mắc! 📚',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
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
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "Theo lý thuyết Marx-Lenin, công nghiệp hóa là quá trình chuyển đổi cơ cấu kinh tế từ nông nghiệp sang công nghiệp hiện đại.",
        "Việt Nam đã thực hiện chính sách Đổi mới từ 1986 để thúc đẩy công nghiệp hóa. Điều này được đề cập chi tiết trong sách.",
        "Công nghiệp hóa xanh là xu hướng phát triển bền vững, cân bằng giữa tăng trưởng kinh tế và bảo vệ môi trường.",
        "Bạn có thể tham khảo thêm các hình ảnh minh họa và làm bài quiz trong sách để hiểu rõ hơn.",
        "Đây là chủ đề rất quan trọng trong phát triển kinh tế Việt Nam hiện đại."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Tính toán vị trí bên phải sách
  if (!bookRef?.current) {
    return null; // Không hiển thị nếu không có book reference
  }

  const bookContainer = bookRef.current.querySelector('.book-container') || bookRef.current;
  const bookRect = bookContainer.getBoundingClientRect();

  // Vị trí bên phải sách với khoảng cách an toàn
  const chatLeftPosition = bookRect.right + 40;
  const availableWidth = window.innerWidth - chatLeftPosition - 20; // Để lại 20px margin phải

  // Nếu không đủ chỗ thì không hiển thị
  if (availableWidth < 300) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: chatLeftPosition,
        width: Math.min(350, availableWidth),
        height: 'calc(100vh - 40px)',
        zIndex: 1000
      }}
    >
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(79, 70, 229, 0.4)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 25px rgba(79, 70, 229, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 20px rgba(79, 70, 229, 0.4)';
          }}
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: 'white',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🤖
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>AI Trợ lý</div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>Công nghiệp hóa VN</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((message) => (
              <div key={message.id} style={{
                display: 'flex',
                flexDirection: message.type === 'user' ? 'row-reverse' : 'row',
                gap: '8px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: message.type === 'user'
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  flexShrink: 0
                }}>
                  {message.type === 'user' ? '👤' : '🤖'}
                </div>
                <div style={{
                  maxWidth: '70%',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  background: message.type === 'user'
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : '#f3f4f6',
                  color: message.type === 'user' ? 'white' : '#374151',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  <div>{message.text}</div>
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.7,
                    marginTop: '4px'
                  }}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px'
                }}>
                  🤖
                </div>
                <div style={{
                  padding: '8px 12px',
                  borderRadius: '12px',
                  background: '#f3f4f6',
                  display: 'flex',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'bounce 1.4s ease-in-out infinite both'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'bounce 1.4s ease-in-out 0.16s infinite both'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'bounce 1.4s ease-in-out 0.32s infinite both'
                  }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #e5e7eb',
            background: '#fafafa'
          }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về nội dung sách..."
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '20px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: inputValue.trim() && !isTyping
                    ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                    : '#d1d5db',
                  border: 'none',
                  color: 'white',
                  cursor: inputValue.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                📤
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          } 40% {
            transform: scale(1.0);
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ChatBot;