import React, { useState, useRef, useEffect } from 'react';

const ChatBot = ({ onToggle, isOpen, backendUrl = 'http://localhost:3001' }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Xin chào! Tôi là trợ lý AI cho cuốn sách "Công nghiệp hóa Việt Nam". Tôi có thể giúp bạn hiểu sâu hơn về nội dung! 📖✨',
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

  const sendMessageToBackend = async (message) => {
    console.log('Sending to backend:', `${backendUrl}/api/chat`); // Debug log
    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, context: 'vietnam_industrialization' })
      });

      console.log('Backend response status:', response.status); // Debug log

      if (response.ok) {
        const data = await response.json();
        console.log('Backend response data:', data); // Debug log
        return data.response || data.answer; // Hỗ trợ cả 2 format
      } else {
        throw new Error(`Backend response error: ${response.status}`);
      }
    } catch (error) {
      console.error('Chat backend error:', error);
      // Fallback responses nếu backend không hoạt động
      const fallbackResponses = [
        "Theo lý thuyết Marx-Lenin, công nghiệp hóa là quá trình chuyển đổi cơ cấu kinh tế từ nông nghiệp sang công nghiệp hiện đại, tạo nền tảng vật chất kỹ thuật cho xã hội xã hội chủ nghĩa.",
        "Việt Nam bắt đầu công nghiệp hóa từ năm 1961 với kế hoạch 5 năm đầu tiên, tập trung phát triển công nghiệp nặng làm nền tảng.",
        "Chính sách Đổi mới từ 1986 đã thay đổi chiến lược công nghiệp hóa, kết hợp kinh tế kế hoạch với cơ chế thị trường.",
        "Công nghiệp hóa xanh là xu hướng mới, cân bằng giữa tăng trưởng kinh tế và bảo vệ môi trường để phát triển bền vững.",
        "Việt Nam hiện đang trong giai đoạn công nghiệp hóa hiện đại, hướng tới nền kinh tế số và công nghiệp 4.0."
      ];
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
  };

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

    try {
      const botResponse = await sendMessageToBackend(inputValue);

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsTyping(false);
    }
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

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '400px',
        height: '100vh',
        background: 'rgba(30, 30, 30, 0.95)', // Tăng độ mờ để không trong suốt quá
        backdropFilter: 'blur(15px)', // Tăng blur
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 10000,
        boxShadow: isOpen ? '-15px 0 40px rgba(0,0,0,0.4)' : 'none',
        borderLeft: isOpen ? '1px solid rgba(60, 60, 60, 0.8)' : 'none'
      }}
    >
      {/* Nút toggle chat */}
      {!isOpen && (
        <button
          onClick={() => onToggle?.(true)}
          style={{
            position: 'absolute',
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '120px',
            background: 'rgba(0, 122, 204, 0.9)', // Trong suốt một chút
            backdropFilter: 'blur(5px)',
            border: 'none',
            borderRadius: '25px 0 0 25px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: '600',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.left = '-65px';
            e.target.style.boxShadow = '-8px 0 25px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.left = '-60px';
            e.target.style.boxShadow = '-5px 0 15px rgba(0,0,0,0.2)';
          }}
        >
          <div style={{ fontSize: '20px' }}>�</div>
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            AI Trợ lý
          </div>
        </button>
      )}

      {/* Chat content */}
      {isOpen && (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header VS Code style */}
          <div
            style={{
              background: 'rgba(45, 45, 48, 0.9)', // Header trong suốt
              backdropFilter: 'blur(10px)',
              color: '#cccccc',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(60, 60, 60, 0.8)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#007ACC',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  🤖
                </div>
                <div>
                  <div style={{
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#cccccc'
                  }}>
                    AI Trợ lý thông minh
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#969696'
                  }}>
                    📖 Công nghiệp hóa Việt Nam
                  </div>
                </div>
              </div>
              <button
                onClick={() => onToggle?.(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  width: '28px',
                  height: '28px',
                  color: '#cccccc',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#3c3c3c';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages với style VS Code */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              background: 'rgba(37, 37, 38, 0.7)', // Background messages trong suốt hơn
              backdropFilter: 'blur(5px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((message) => (
              <div key={message.id} style={{
                display: 'flex',
                flexDirection: message.type === 'user' ? 'row-reverse' : 'row',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: message.type === 'user'
                    ? '#007ACC'
                    : '#68217A', // Màu giống Copilot
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  flexShrink: 0,
                  color: 'white'
                }}>
                  {message.type === 'user' ? '👤' : '🤖'}
                </div>
                <div style={{
                  maxWidth: '75%',
                  background: message.type === 'user'
                    ? 'transparent'
                    : 'transparent',
                  color: '#cccccc', // Text màu sáng trên nền tối
                  padding: '8px 0',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  <div style={{ marginBottom: '4px' }}>{message.text}</div>
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.7,
                    color: '#969696'
                  }}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#68217A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white'
                }}>
                  🤖
                </div>
                <div style={{
                  background: 'transparent',
                  padding: '8px 0',
                  color: '#cccccc',
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#cccccc',
                    animation: 'bounce 1.4s ease-in-out infinite both'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#cccccc',
                    animation: 'bounce 1.4s ease-in-out 0.16s infinite both'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#cccccc',
                    animation: 'bounce 1.4s ease-in-out 0.32s infinite both'
                  }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area VS Code style */}
          <div style={{
            padding: '16px',
            background: 'rgba(45, 45, 48, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(60, 60, 60, 0.8)'
          }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Hỏi về nội dung sách..."
                  style={{
                    width: '100%',
                    minHeight: '36px',
                    maxHeight: '120px',
                    padding: '8px 12px',
                    border: '1px solid #3c3c3c',
                    borderRadius: '4px',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                    background: 'rgba(60, 60, 60, 0.8)',
                    backdropFilter: 'blur(5px)',
                    color: '#cccccc',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#007ACC'}
                  onBlur={(e) => e.target.style.borderColor = '#3c3c3c'}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  background: inputValue.trim() && !isTyping
                    ? '#007ACC'
                    : '#565656',
                  border: 'none',
                  color: 'white',
                  cursor: inputValue.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                ➤
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
    </div>
  );
};

export default ChatBot;