import React from "react";
import ReactDOM from "react-dom";
import { HelpCircle } from "lucide-react";

const QuestionButton = ({
  pageId,
  currentPageIndex,
  questions,
  onClick,
  bookRef,
}) => {
  if (!questions[pageId]) {
    return null;
  }

  if (!bookRef.current) {
    const actualPageNumber = currentPageIndex + 1;
    const isOddPage = actualPageNumber % 2 === 1;

    return ReactDOM.createPortal(
      <button
        className="fixed top-[2%] z-[10000] w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow group"
        style={{
          left: isOddPage ? "65%" : "35%",
          transform: "translateX(-50%)",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick(pageId);
        }}
        title="Câu hỏi về nội dung này"
      >
        <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>,
      document.body
    );
  }

  // Use document.querySelector instead of bookRef.current.querySelector
  const bookContainer = document.querySelector(".book-container");

  if (!bookContainer) {
    // Fallback if book container not found
    const actualPageNumber = currentPageIndex + 1;
    const isOddPage = actualPageNumber % 2 === 1;

    return ReactDOM.createPortal(
      <button
        className="fixed top-[2%] z-[10000] w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow group"
        style={{
          left: isOddPage ? "65%" : "35%",
          transform: "translateX(-50%)",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick(pageId);
        }}
        title="Câu hỏi về nội dung này"
      >
        <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>,
      document.body
    );
  }

  const bookRect = bookContainer.getBoundingClientRect();
  const actualPageNumber = currentPageIndex + 1;
  const isOddPage = actualPageNumber % 2 === 1;
  const leftPosition = isOddPage
    ? bookRect.left + bookRect.width * 0.75
    : bookRect.left + bookRect.width * 0.25;

  return ReactDOM.createPortal(
    <button
      className="fixed z-[10000] w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow group border-2 border-white"
      style={{
        top: `${bookRect.top - 20}px`,
        left: `${leftPosition}px`,
        transform: "translateX(-50%)",
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(pageId);
      }}
      onMouseDown={(e) => e.stopPropagation()}
      title="Câu hỏi về nội dung này"
    >
      <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
    </button>,
    document.body
  );
};

export default QuestionButton;
