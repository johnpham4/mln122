import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import HTMLFlipBook from "react-pageflip";
import { Part1_Introduction } from './parts/Part1_Introduction';
import { Part2_TheoryFoundation } from './parts/Part2_TheoryFoundation';
import { Part3_VietnamSituation } from './parts/Part3_VietnamSituation';
import { Part4_Integration } from './parts/Part4_Integration';
import { Part5_GreenIndustrialization } from './parts/Part5_GreenIndustrialization';
import { Part8_Conclusion } from './parts/Part8_Conclusion';
import QuestionNotebook from './QuestionNotebook';
import QuestionButton from './QuestionButton';
import ChatBot from './ChatBot';

function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showNotebook, setShowNotebook] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const flipBookRef = useRef(null);

  // Định nghĩa câu hỏi cho các trang khác nhau
  const questions = {
    4: { // Page ID 3 = trang thứ 4 (đếm từ 0) - trang chẵn, dấu chấm hỏi bên trái
      title: "Câu hỏi về Cơ sở lý thuyết Mác-Lênin",
      question: "Theo Marx và Lenin, những đặc điểm cơ bản của công nghiệp hóa xã hội chủ nghĩa là gì?",
      options: [
        "A. Chỉ tập trung phát triển công nghiệp nặng",
        "B. Thay đổi cơ cấu kinh tế, nâng cao năng suất lao động, phát triển lực lượng sản xuất",
        "C. Chỉ áp dụng công nghệ hiện đại",
        "D. Phát triển theo cơ chế thị trường tự do"
      ],
      correctAnswer: "B",
      explanation: "Công nghiệp hóa xã hội chủ nghĩa bao gồm việc thay đổi cơ cấu kinh tế từ nông nghiệp sang công nghiệp, nâng cao năng suất lao động thông qua khoa học kỹ thuật, và phát triển lực lượng sản xuất hiện đại."
    },
    5: { // Page ID 4 = trang thứ 5 (đếm từ 0) - trang lẻ, dấu chấm hỏi bên phải
      title: "Câu hỏi về Tình hình Việt Nam",
      question: "Việt Nam đã áp dụng những chính sách nào để thúc đẩy công nghiệp hóa từ năm 1986?",
      options: [
        "A. Chỉ phát triển công nghiệp nhẹ",
        "B. Đổi mới, mở cửa, hội nhập quốc tế",
        "C. Chỉ dựa vào đầu tư trong nước",
        "D. Tập trung vào nông nghiệp"
      ],
      correctAnswer: "B",
      explanation: "Từ năm 1986, Việt Nam thực hiện chính sách Đổi mới, mở cửa kinh tế và hội nhập quốc tế để thúc đẩy công nghiệp hóa và hiện đại hóa đất nước."
    },
    7: { // Page ID 7 = trang thứ 8 (đếm từ 0) - trang chẵn, dấu chấm hỏi bên trái
      title: "Câu hỏi về Công nghiệp hóa xanh",
      question: "Công nghiệp hóa xanh có ý nghĩa gì đối với phát triển bền vững?",
      options: [
        "A. Chỉ tập trung vào lợi nhuận kinh tế",
        "B. Cân bằng giữa phát triển kinh tế và bảo vệ môi trường",
        "C. Chỉ quan tâm đến công nghệ cao",
        "D. Phát triển không cần quan tâm đến môi trường"
      ],
      correctAnswer: "B",
      explanation: "Công nghiệp hóa xanh là mô hình phát triển cân bằng giữa tăng trưởng kinh tế và bảo vệ môi trường, đảm bảo phát triển bền vững cho các thế hệ tương lai."
    }
  };

  // Helper function để render nội dung có hình ảnh
  const renderContentWithImages = (content) => {
    const lines = content.split('\n');
    const elements = [];

    lines.forEach((line, index) => {
      if (line.includes('[IMAGE:')) {
        // Parse image format: [IMAGE:filename.jpg|Caption text]
        const match = line.match(/\[IMAGE:([^|]+)\|([^\]]+)\]/);
        if (match) {
          const [, filename, caption] = match;
          elements.push(
            <div key={index} className="content-image">
              <img src={`/${filename}`} alt={caption} />
              <div className="image-caption">{caption}</div>
            </div>
          );
        }
      } else {
        elements.push(<span key={index}>{line}{index < lines.length - 1 ? '\n' : ''}</span>);
      }
    });

    return <pre style={{whiteSpace: 'pre-wrap'}}>{elements}</pre>;
  };

  // Tạo tất cả các trang từ các phần
  let currentId = 1;

  const part1Pages = Part1_Introduction(currentId);
  currentId += part1Pages.length;

  const part2Pages = Part2_TheoryFoundation(currentId);
  currentId += part2Pages.length;

  const part3Pages = Part3_VietnamSituation(currentId);
  currentId += part3Pages.length;

  const part4Pages = Part4_Integration(currentId);
  currentId += part4Pages.length;

  const part5Pages = Part5_GreenIndustrialization(currentId);
  currentId += part5Pages.length;

  const part8Pages = Part8_Conclusion(currentId);

  const allPages = [
    ...part1Pages,
    ...part2Pages,
    ...part3Pages,
    ...part4Pages,
    ...part5Pages,
    ...part8Pages
  ];

  // Xử lý khi click vào question button (từ portal)
  const handleQuestionClick = (pageId) => {
    const question = questions[pageId];
    if (question) {
      setCurrentQuestion(question);
      setShowNotebook(true);
    }
  };

  // Xử lý khi page thay đổi
  const handlePageFlip = (e) => {
    const pageIndex = e.data || 0;
    setCurrentPage(pageIndex);
  };

  return (
    <div className="book-wrapper" ref={flipBookRef}>
      <HTMLFlipBook
        width={400}
        height={550}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size='fixed'
        className="book-container"
        onFlip={handlePageFlip}
      >
        {allPages.map((page) => (
          <div className="page" key={page.id}>
          <div className={`page-content ${page.type}`}>
            {(page.type === 'cover' || page.type === 'back-cover') && (
              <div className="cover-content">
                <div className="cover-title">
                  <h1>{page.title}</h1>
                  <h2>{page.subtitle}</h2>
                </div>
                <div className="cover-author">
                  <p>{page.author}</p>
                  <div className="vietnam-flag">{page.flag === 'VN' ? '🇻🇳' : page.flag || '🇻🇳'}</div>
                </div>
              </div>
            )}

            {page.type === 'chapter' && (
              <div className="chapter-content">
                <h1 className="chapter-number">{page.title}</h1>
                <h2 className="chapter-title">{page.subtitle}</h2>
                <div className="chapter-text">
                  <p>{page.content}</p>
                </div>
              </div>
            )}

            {(page.type === 'content' || page.type === 'conclusion') && (
              <div className="content-page">
                <h2 className="section-title">
                  {page.title}
                  {page.partInfo && <span className="part-info"> ({page.partInfo})</span>}
                </h2>
                <div className="section-content">
                  {renderContentWithImages(page.content)}
                </div>
                <div className="page-number">{page.id}</div>
              </div>
            )}
          </div>
        </div>
      ))}
      </HTMLFlipBook>

      {/* Question Button Portal - render ngoài DOM tree cho cả 2 trang hiện tại */}
      {/* Trang trái (currentPage) */}
      <QuestionButton
        pageId={allPages[currentPage]?.id}
        currentPageIndex={currentPage}
        questions={questions}
        onClick={handleQuestionClick}
        bookRef={flipBookRef}
      />

      {/* Trang phải (currentPage + 1) nếu có */}
      {allPages[currentPage + 1] && (
        <QuestionButton
          pageId={allPages[currentPage + 1]?.id}
          currentPageIndex={currentPage + 1}
          questions={questions}
          onClick={handleQuestionClick}
          bookRef={flipBookRef}
        />
      )}

      {/* Question Notebook Popup */}
      {showNotebook && currentQuestion && (
        <QuestionNotebook
          question={currentQuestion}
          onClose={() => setShowNotebook(false)}
        />
      )}

      {/* ChatBot - AI Trợ lý */}
      <ChatBot bookRef={flipBookRef} />
    </div>
  );
}

export default Book