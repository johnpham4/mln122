import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Tạo bot message trống để streaming vào
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);

    try {
      console.log('Sending to streaming backend:', `${backendUrl}/api/chat/stream`);

      const response = await fetch(`${backendUrl}/api/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput })
      });

      if (!response.body) {
        throw new Error('No response body for streaming');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '' || data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);

              // Xử lý streaming content
              if (parsed.content) {
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === botMessage.id
                      ? { ...msg, text: msg.text + parsed.content }
                      : msg
                  )
                );
              }

              // Xử lý token streaming (fallback)
              if (parsed.token) {
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === botMessage.id
                      ? { ...msg, text: msg.text + parsed.token }
                      : msg
                  )
                );
              }

              // Xử lý khi streaming hoàn thành
              if (parsed.type === 'done' || parsed.final) {
                if (parsed.final) {
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === botMessage.id
                        ? { ...msg, text: parsed.final }
                        : msg
                    )
                  );
                }
                break;
              }

              // Xử lý lỗi
              if (parsed.error) {
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === botMessage.id
                      ? { ...msg, text: `Lỗi: ${parsed.error}` }
                      : msg
                  )
                );
                break;
              }

            } catch (e) {
              console.log('Parse error:', e, 'Data:', data);
            }
          }
        }
      }

    } catch (error) {
      console.error('Streaming error:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessage.id
            ? { ...msg, text: 'Xin lỗi, không thể kết nối tới backend streaming.' }
            : msg
        )
      );
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
    <>
      {/* Chat toggle: fixed round icon placed above bookmark button (outside the sliding panel) */}
      {!isOpen && (
        <button
          onClick={() => onToggle?.(true)}
          className="fixed top-4 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Mở AI Trợ lý"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

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
    </>
  );
};

export default ChatBot;