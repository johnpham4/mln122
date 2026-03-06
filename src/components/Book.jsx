import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { Part1_Introduction } from "./parts/Part1_Introduction";
import { Part2_TheoryFoundation } from "./parts/Part2_TheoryFoundation";
import { Part3_VietnamSituation } from "./parts/Part3_VietnamSituation";
import QuestionNotebook from "./QuestionNotebook";
import QuestionButton from "./QuestionButton";
import BookmarkPanel, { BookmarkButton } from "./BookmarkPanel";
import TableOfContents from "./TableOfContents";
import FontSizeControl from "./FontSizeControl";
import NotesHighlights from "./NotesHighlights";
import PageNavigator from "./PageNavigator";

function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showNotebook, setShowNotebook] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });
  const flipBookRef = useRef(null);

  // Định nghĩa câu hỏi cho các trang khác nhau
  const questions = {
    5: {
      question:
        "Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra lời kêu gọi gì?",
      options: [
        "A. Lời kêu gọi toàn quốc kháng chiến.",
        "B. Lời kêu gọi tổng khởi nghĩa.",
        "C. Lời kêu gọi hòa bình với Pháp.",
        "D. Lời kêu gọi cải cách ruộng đất.",
      ],
      correctAnswer: "A",
      explanation:
        "Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra 'Lời kêu gọi toàn quốc kháng chiến': 'Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước!'.",
    },
    8: {
      question:
        "Chiến dịch Biên giới thu-đông 1950 có ý nghĩa gì?",
      options: [
        "A. Kết thúc hoàn toàn kháng chiến chống Pháp.",
        "B. Đưa kháng chiến ta từ thế giữ cự lâu dài sang chủ động tiến công, mở thông biên giới với Trung Quốc.",
        "C. Buộc Pháp phải ký hiệp định đình chiến ngay lập tức.",
        "D. Giải phóng hoàn toàn miền Bắc Việt Nam.",
      ],
      correctAnswer: "B",
      explanation:
        "Chiến dịch kéo dài 29 ngày đêm đã giải vây căn cứ Việt Bắc, phá tan phòng tuyến Pháp ở các cứ điểm Cao Bằng – Lạng Sơn, mở thông biên giới với Trung Quốc nhận viện trợ.",
    },
    12: {
      question:
        "Đại hội đại biểu toàn quốc lần II (1951) đã quyết định điều gì quan trọng?",
      options: [
        "A. Quyết định thành lập Quân đội nhân dân Việt Nam.",
        "B. Đổi tên Đảng Cộng sản Đông Dương thành Đảng Lao động Việt Nam và cho phép Đảng hoạt động công khai trở lại.",
        "C. Quyết định ký hiệp định hòa bình với Pháp.",
        "D. Quyết định tiến hành tổng khởi nghĩa trên toàn quốc.",
      ],
      correctAnswer: "B",
      explanation:
        "Tại Đại hội II (11-19/2/1951, Tuyên Quang), dưới sự chủ trì của Chủ tịch Hồ Chí Minh, Đại hội đã quyết định đổi tên Đảng Cộng sản Đông Dương thành Đảng Lao động Việt Nam.",
    },
  };

  // Helper function để render nội dung có hình ảnh và markdown
  const renderContentWithImages = (content) => {
    const lines = content.split("\n");
    const elements = [];

    // Helper function để tìm page index chứa hình ảnh cụ thể
    const findPageWithImage = (imageFilename) => {
      return allPages.findIndex(page => 
        page.content && page.content.includes(`[IMAGE:${imageFilename}|`)
      );
    };

    lines.forEach((line, index) => {
      // Check for clickable links first: [LINK:text|imageFilename]
      if (line.includes("[LINK:")) {
        const match = line.match(/\[LINK:([^|]+)\|([^\]]+)\]/);
        if (match) {
          const [, linkText, imageFilename] = match;
          const targetPageIndex = findPageWithImage(imageFilename);
          
          elements.push(
            <div key={index} className="mb-1.5 pl-3">
              <button
                onClick={() => {
                  if (targetPageIndex >= 0) {
                    navigateToPage(targetPageIndex);
                  } else {
                    console.warn(`Image ${imageFilename} not found in any page`);
                  }
                }}
                className="text-left text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-200 font-medium"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                {linkText}
              </button>
            </div>
          );
          return;
        }
      }

      if (line.includes("[IMAGE:")) {
        // Parse image format: [IMAGE:filename.jpg|Caption text|width:500px] hoặc [IMAGE:filename.jpg|Caption text]
        const match = line.match(/\[IMAGE:([^|]+)\|([^|\]]+)(?:\|([^\]]+))?\]/);
        if (match) {
          const [, filename, caption, sizeStyle] = match;

          // Parse size style (ví dụ: "width:500px" hoặc "width:80%;height:400px")
          let styleObj = {};
          if (sizeStyle) {
            const styleParts = sizeStyle.split(";");
            styleParts.forEach((part) => {
              const [key, value] = part.split(":").map((s) => s.trim());
              if (key && value) {
                styleObj[key] = value;
              }
            });
          }

          elements.push(
            <div key={index} className="my-4 text-center">
              <div className="inline-block border border-slate-300 rounded-md shadow-md overflow-hidden bg-slate-50 p-1">
                <img
                  src={`/${filename}`}
                  alt={caption}
                  className="mx-auto object-contain rounded"
                  style={{
                    maxWidth: styleObj.width || "95%",
                    maxHeight: styleObj.height || "280px",
                    ...styleObj,
                  }}
                />
              </div>
              <div className="text-[10px] italic text-slate-500 mt-2 px-4 leading-snug">
                {caption}
              </div>
            </div>
          );
        }
      } else if (line.includes("[VIDEO:")) {
        // Parse video format: [VIDEO:videoId|Caption|start:3]
        const match = line.match(/\[VIDEO:([^|]+)\|([^|\]]+)(?:\|([^\]]+))?\]/);
        if (match) {
          const [, videoId, caption, params] = match;
          
          // Parse parameters like "start:3"
          let startTime = 0;
          if (params) {
            const startMatch = params.match(/start:(\d+)/);
            if (startMatch) {
              startTime = parseInt(startMatch[1]);
            }
          }

          elements.push(
            <div key={index} className="my-6 text-center">
              <div className="inline-block w-full max-w-lg">
                <div className="relative w-full rounded-lg overflow-hidden shadow-2xl border-4 border-red-500" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?start=${startTime}`}
                    title={caption}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {caption && caption.trim() && (
                  <div className="text-[11px] italic text-slate-600 mt-3 px-4 leading-snug font-semibold">
                    🎬 {caption}
                  </div>
                )}
              </div>
            </div>
          );
        }
      } else if (line.trim()) {
        // Parse markdown bold and italic formatting
        const parseFormatting = (text) => {
          const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/);
          return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={i} className="text-slate-800">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
              return <em key={i}>{part.slice(1, -1)}</em>;
            }
            return part;
          });
        };

        // Detect heading types
        const trimmed = line.trim();
        // Main section heading: purely bold, e.g. **3. TITLE**
        const isSectionHeading = trimmed.startsWith("**") && trimmed.endsWith("**") && /^\*\*\d+\./.test(trimmed);
        // Sub-heading: bold line like **Chiến dịch Hòa Bình:**
        const isSubHeading = trimmed.startsWith("**") && trimmed.endsWith("**") && !isSectionHeading;
        const isNumberedItem = /^\s*\d+\)/.test(trimmed);
        const isBulletItem = trimmed.startsWith("•");

        if (isSectionHeading) {
          elements.push(
            <p key={index} className="mb-2 mt-3 text-[14.5px] font-bold text-red-700">
              {parseFormatting(line)}
            </p>
          );
        } else if (isSubHeading) {
          elements.push(
            <p key={index} className="mb-1.5 mt-2 font-semibold text-slate-800">
              {parseFormatting(line)}
            </p>
          );
        } else if (isNumberedItem || isBulletItem) {
          elements.push(
            <p key={index} className="mb-1.5 text-justify leading-relaxed pl-3">
              {parseFormatting(line)}
            </p>
          );
        } else {
          elements.push(
            <p key={index} className="mb-1.5 text-justify leading-relaxed" style={{ textIndent: '1.5em' }}>
              {parseFormatting(line)}
            </p>
          );
        }
      } else {
        elements.push(<div key={index} className="h-1"></div>);
      }
    });

    return <div>{elements}</div>;
  };

  // Tạo tất cả các trang từ các phần
  let currentId = 1;

  const part1Pages = Part1_Introduction(currentId);
  currentId += part1Pages.length;

  const part2Pages = Part2_TheoryFoundation(currentId);
  currentId += part2Pages.length;

  const part3Pages = Part3_VietnamSituation(currentId);
  currentId += part3Pages.length;

  const allPages = [...part1Pages, ...part2Pages, ...part3Pages];

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

  // Toggle bookmark
  const toggleBookmark = (pageIndex) => {
    const updated = bookmarks.includes(pageIndex)
      ? bookmarks.filter((p) => p !== pageIndex)
      : [...bookmarks, pageIndex].sort((a, b) => a - b);

    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  // Navigate to page
  const navigateToPage = (pageIndex) => {
    console.log("Attempting to navigate to page:", pageIndex);
    console.log("flipBookRef.current:", flipBookRef.current);

    if (flipBookRef.current) {
      try {
        // Try different methods based on react-pageflip API
        if (typeof flipBookRef.current.pageFlip === "function") {
          console.log("Using pageFlip() method");
          flipBookRef.current.pageFlip().flip(pageIndex);
        } else if (typeof flipBookRef.current.flip === "function") {
          console.log("Using flip() method directly");
          flipBookRef.current.flip(pageIndex);
        } else {
          console.error(
            "No flip method found. Available methods:",
            Object.keys(flipBookRef.current)
          );
        }
      } catch (error) {
        console.error("Error navigating to page:", error);
      }
    } else {
      console.warn("FlipBook ref not ready");
    }
  };

  // Apply saved font size on mount
  useEffect(() => {
    const savedSize = localStorage.getItem("fontSize");
    const defaultSize = savedSize ? savedSize : "15"; // Mặc định 15px nếu chưa có trong localStorage

    // Set CSS variable for font size
    document.documentElement.style.setProperty(
      "--book-font-size",
      `${defaultSize}px`
    );

    // Apply to .book-page-content (fallback)
    const bookPages = document.querySelectorAll(".book-page-content");
    bookPages.forEach((page) => {
      page.style.fontSize = `${defaultSize}px`;
    });

    // Apply to .section-content pre (override CSS)
    const sectionPres = document.querySelectorAll(".section-content pre");
    sectionPres.forEach((pre) => {
      pre.style.fontSize = `${defaultSize}px`;
    });
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        className="flex-1 flex items-center justify-center"
        style={{}}
      >
        {/* Table of Contents */}
        <TableOfContents
          allPages={allPages}
          onNavigate={navigateToPage}
          currentPage={currentPage}
        />

        {/* Bookmark Panel */}
        <BookmarkPanel
          allPages={allPages}
          onNavigate={navigateToPage}
          bookmarks={bookmarks}
        />

        {/* Font Size Control */}
        <FontSizeControl />

        {/* Notes & Highlights */}
        <NotesHighlights currentPage={currentPage} />

        {/* Page Navigator */}
        <PageNavigator
          totalPages={allPages.length}
          onNavigate={navigateToPage}
          currentPage={currentPage}
        />

        <HTMLFlipBook
          ref={flipBookRef}
          width={500}
          height={680}
          maxShadowOpacity={0.3}
          drawShadow={true}
          showCover={true}
          size="fixed"
          className="book-container"
          onFlip={handlePageFlip}
        >
          {allPages.map((page, pageIndex) => (
            <div className="page" key={`page-${pageIndex}`}>
              <div className={`page-content ${page.type}`}>
                {/* Bookmark Button on each page */}
                {page.type !== "cover" && page.type !== "back-cover" && (
                  <BookmarkButton
                    pageIndex={pageIndex}
                    isBookmarked={bookmarks.includes(pageIndex)}
                    onToggle={toggleBookmark}
                  />
                )}
                {/* Cover Page */}
                {(page.type === "cover" || page.type === "back-cover") && (
                  <div className="h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex flex-col justify-between p-8 text-white">
                    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                      <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
                      <h1
                        className="text-2xl font-bold leading-tight tracking-tight"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.title}
                      </h1>
                      <div className="w-16 h-0.5 bg-yellow-400/50 rounded-full"></div>
                      <h2
                        className="text-base font-medium italic opacity-95 max-w-xs"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.subtitle}
                      </h2>
                    </div>
                    <div className="text-center space-y-3">
                      <p
                        className="text-base font-medium"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.author}
                      </p>
                    </div>
                  </div>
                )}

                {/* Chapter Page */}
                {page.type === "chapter" && (
                  <div className="h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col justify-center items-center text-center p-10 space-y-6">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-2xl rounded-full"></div>
                      <h1
                        className="relative text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.title}
                      </h1>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                    <h2
                      className="text-xl font-semibold text-slate-700 max-w-sm leading-relaxed"
                      style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                      {page.subtitle}
                    </h2>
                    {page.content && (
                      <p
                        className="text-base text-slate-600 max-w-md leading-relaxed"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.content}
                      </p>
                    )}
                  </div>
                )}

                {/* Content Page */}
                {(page.type === "content" || page.type === "conclusion") && (
                  <div className="h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(to bottom, #fffefb, #faf8f3)' }}>
                    <div className="border-b border-red-400 pt-3 pb-1.5 px-6 mb-1 flex-shrink-0">
                      <h2
                        className="text-[15px] font-bold text-red-700 text-center tracking-wide"
                        style={{ fontFamily: "'Crimson Text', 'Times New Roman', Georgia, serif" }}
                      >
                        {page.title}
                        {page.partInfo && (
                          <span
                            className="text-[10px] font-normal text-slate-400 ml-2"
                          >
                            ({page.partInfo})
                          </span>
                        )}
                      </h2>
                      <div className="flex justify-center items-center gap-2 mt-1">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                        <div className="text-[9px] text-slate-400 italic">
                          — {page.id} —
                        </div>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden px-6 py-2">
                      <div
                        className="book-page-content h-full overflow-hidden pr-2"
                        style={{ fontSize: "14px", lineHeight: "1.7" }}
                      >
                        <div style={{ fontFamily: "'Crimson Text', 'Times New Roman', Georgia, serif" }}>
                          {renderContentWithImages(page.content)}
                        </div>
                      </div>
                    </div>
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

      </div>
    </div>
  );
}

export default Book;
