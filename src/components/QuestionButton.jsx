import React from 'react';
import ReactDOM from 'react-dom';

const QuestionButton = ({ pageId, currentPageIndex, questions, onClick, bookRef }) => {
  // CHỈ hiển thị button trên những trang có câu hỏi được định nghĩa trong questions
  if (!questions[pageId]) {
    return null;
  }

  if (!bookRef.current) {
    // Fallback: hiển thị ở vị trí cố định nếu không có bookRef
    // Sử dụng currentPageIndex trực tiếp thay vì pageId + 1
    const actualPageNumber = currentPageIndex + 1;
    const isOddPage = actualPageNumber % 2 === 1;

    return ReactDOM.createPortal(
      <div
        style={{
          position: 'fixed',
          top: '1%', // Cao hơn trong fallback
          left: isOddPage ? '65%' : '35%', // Trang lẻ: phải, chẵn: trái
          transform: 'translateX(-50%)',
          width: '35px',
          height: '35px',
          background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '18px',
          zIndex: 10000,
          boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
          border: '2px solid #fff'
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick(pageId);
        }}
        title="Câu hỏi về nội dung này"
      >
        ❓
      </div>,
      document.body
    );
  }

  // Tìm vị trí của book container
  const bookContainer = bookRef.current.querySelector('.book-container') || bookRef.current;
  const bookRect = bookContainer.getBoundingClientRect();

  // Tính toán vị trí dựa trên trang lẻ/chẵn
  // Sử dụng currentPageIndex trực tiếp để tính trang thực tế
  const actualPageNumber = currentPageIndex + 1;
  const isOddPage = actualPageNumber % 2 === 1;

  // Trang lẻ: bên phải, Trang chẵn: bên trái
  const leftPosition = isOddPage
    ? bookRect.left + (bookRect.width * 0.75) // Góc trên phải (75% width)
    : bookRect.left + (bookRect.width * 0.25); // Góc trên trái (25% width)

  const buttonStyle = {
    position: 'fixed',
    top: bookRect.top - 15, // Lên trên ngoài sách (âm 15px)
    left: leftPosition,
    transform: 'translateX(-50%)',
    width: '35px',
    height: '35px',
    background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    zIndex: 10000,
    boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
    border: '2px solid #fff',
    userSelect: 'none',
    animation: 'pulse 2s infinite'
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(pageId);
  };

  // Render button vào document.body (ngoài hoàn toàn DOM tree của flipbook)
  return ReactDOM.createPortal(
    <div
      style={buttonStyle}
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      title="Câu hỏi về nội dung này"
    >
      ❓
    </div>,
    document.body
  );
};

export default QuestionButton;