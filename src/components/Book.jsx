import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { Part1_Introduction } from "./parts/Part1_Introduction";
import { Part2_TheoryFoundation } from "./parts/Part2_TheoryFoundation";
import { Part3_VietnamSituation } from "./parts/Part3_VietnamSituation";
import QuestionNotebook from "./QuestionNotebook";
import QuestionButton from "./QuestionButton";
import ChatBot from "./ChatBot";
import BookmarkPanel, { BookmarkButton } from "./BookmarkPanel";
import TableOfContents from "./TableOfContents";
import FontSizeControl from "./FontSizeControl";
import NotesHighlights from "./NotesHighlights";
import config from "../config/environment";

function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showNotebook, setShowNotebook] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  // Debug log để kiểm tra state
  console.log("Chat is open:", chatOpen);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });
  const flipBookRef = useRef(null);

  // Định nghĩa câu hỏi cho các trang khác nhau
  const questions = {
    16: {
      question:
        "Quan hệ giữa khái niệm công nghiệp hóa và khái niệm cách mạng công nghiệp là gì?",
      options: ["A. Cách mạng công nghiệp là kết quả của quá trình công nghiệp hóa diễn ra lâu dài trong xã hội.", 
        "B. Công nghiệp hóa và cách mạng công nghiệp là hai quá trình hoàn toàn tách biệt, không liên quan đến nhau.", 
        "C. Cách mạng công nghiệp tạo ra cơ sở kỹ thuật và công nghệ mới, là động lực thúc đẩy quá trình công nghiệp hóa phát triển.", 
        "D. Công nghiệp hóa là quá trình thay thế các cuộc các	h mạng công nghiệp bằng hình thức sản xuất hiện đại hơn."],
      correctAnswer: "C",
      explanation:
        "Cách mạng công nghiệp là cơ sở và động lực của công nghiệp hóa, còn công nghiệp hóa là quá trình cụ thể hóa và mở rộng những thành tựu của các cuộc cách mạng công nghiệp vào thực tiễn sản xuất và phát triển kinh tế – xã hội.",
    },
    13: {
      question:
        "Các mô hình công nghiệp hóa đã diễn ra trên thế giới là gì?",
      options: ["A. Mô hình công nghiệp hóa cổ điển, mô hình công nghiệp hóa kiểu Liên Xô, mô hình công nghiệp hóa Nhật Bản và các nước công nghiệp mới (NICs).", 
        "B. Mô hình công nghiệp hóa nông nghiệp, mô hình công nghiệp hóa hậu hiện đại, mô hình công nghiệp hóa xanh.", 
        "C. Mô hình công nghiệp hóa cổ điển, mô hình công nghiệp hóa nông nghiệp và mô hình công nghiệp hóa xanh.", 
        "D. Mô hình công nghiệp hóa kiểu Mỹ, mô hình công nghiệp hóa châu Phi và mô hình công nghiệp hóa Đông Nam Á."],
      correctAnswer: "A",
      explanation:
        "Mô hình công nghiệp hóa cổ điển, mô hình công nghiệp hóa kiểu Liên Xô cũ, mô hình công nghiệp hóa Nhật bản & NICs. Mỗi mô hình phản ánh một con đường phát triển khác nhau nhưng đều hướng tới mục tiêu chung là nâng cao năng suất lao động và phát triển kinh tế hiện đại.",
    },
    17: {
      question:
        "Cách mạng công nghiệp và công nghiệp hóa có tác động như thế nào đối với sự phát triển kinh tế - xã hội?",
      options: ["A. Làm giảm vai trò của lao động con người và chỉ tập trung vào phát triển máy móc.", 
        "B. Thúc đẩy sự phát triển của lực lượng sản xuất, hoàn thiện quan hệ sản xuất và đổi mới phương thức quản lý, góp phần nâng cao đời sống xã hội.", 
        "C. Chỉ tạo ra tiến bộ trong lĩnh vực khoa học – kỹ thuật, không ảnh hưởng nhiều đến kinh tế – xã hội.", 
        "D. Làm cho nền kinh tế phụ thuộc hoàn toàn vào công nghệ nước ngoài."],
      correctAnswer: "B",
      explanation:
        "Cách mạng công nghiệp và công nghiệp hóa là động lực then chốt thúc đẩy phát triển kinh tế – xã hội, giúp nâng cao năng suất lao động, đổi mới phương thức quản lý và cải thiện đời sống nhân dân, đồng thời mở ra thời kỳ phát triển hiện đại và hội nhập toàn cầu.",
    },
    19: {
      question:
        "Hội nhập kinh tế quốc tế là gì?",
      options: [
        "A. Là quá trình một quốc gia khép kín nền kinh tế của mình để bảo vệ lợi ích trong nước.",
        "B. Là quá trình một quốc gia mở rộng biên giới lãnh thổ để chiếm lĩnh thị trường thế giới.",
        "C. Là quá trình một quốc gia gắn kết nền kinh tế của mình với nền kinh tế thế giới, dựa trên sự chia sẻ lợi ích và tuân thủ các chuẩn mực quốc tế chung.",
        "D. Là việc một quốc gia phụ thuộc hoàn toàn vào các nền kinh tế phát triển để phát triển kinh tế trong nước.",
      ],
      correctAnswer: "C",
      explanation:
        "Trong giáo trình kinh tế chính trị Mác - Lênin có nói: “Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung”",
    },
    24: {
      question:
        "Hội nhập kinh tế quốc tế có tác động tích cực như thế nào đến sự phát triển kinh tế - xã hội của mỗi quốc gia, đặc biệt là đối với Việt Nam?",
      options: [
        "A. Giúp các quốc gia, đặc biệt là Việt Nam mở rộng thị trường, thu hút vốn đầu tư, tiếp nhận công nghệ hiện đại và thúc đẩy công nghiệp hoá, hiện đại hoá. ",
        "B. Khiến nền kinh tế trong nước bị phụ thuộc hoàn toàn vào các nguồn lực bên ngoài.",
        "C. Làm suy giảm năng lực cạnh tranh của doanh nghiệp trong nước do áp lực hội nhập.",
        "D. Làm hạn chế cơ hội việc làm và khiến khoảng cách giàu nghèo gia tăng.",
      ],
      correctAnswer: "A",
      explanation:
        "Hội nhập kinh tế quốc tế mang lại nhiều tác động tích cực như: mở rộng thị trường tiêu thụ, thu hút vốn đầu tư nước ngoài, tiếp nhận khoa học – công nghệ hiện đại, thúc đẩy công nghiệp hoá và chuyển dịch cơ cấu kinh tế theo hướng hiệu quả hơn. Đồng thời, hội nhập giúp nâng cao chất lượng nguồn nhân lực, tạo thêm việc làm, cải thiện đời sống người dân và nâng cao vị thế quốc gia trên trường quốc tế.→ Đối với Việt Nam, đây là con đường tất yếu để phát huy lợi thế, mở rộng hợp tác và khẳng định vị thế đất nước trong thời kỳ toàn cầu hoá.",
    },
  };

  // Helper function để render nội dung có hình ảnh và markdown
  const renderContentWithImages = (content) => {
    const lines = content.split("\n");
    const elements = [];

    lines.forEach((line, index) => {
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
            <div key={index} className="my-3 text-center">
              <img
                src={`/${filename}`}
                alt={caption}
                className="mx-auto object-contain border border-slate-200 rounded"
                style={{
                  maxWidth: styleObj.width || "80%",
                  maxHeight: styleObj.height || "150px",
                  ...styleObj,
                }}
              />
              <div className="text-[13px] italic text-slate-600 mt-1">
                {caption}
              </div>
            </div>
          );
        }
      } else if (line.trim()) {
        // Parse markdown bold formatting **text**
        const parseBold = (text) => {
          const parts = text.split(/(\*\*[^*]+\*\*)/);
          return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
          });
        };

        elements.push(
          <p key={index} className="mb-1 text-justify">
            {parseBold(line)}
          </p>
        );
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
        style={{
          marginLeft: chatOpen ? "-300px" : "0px",
          transition: "margin-left 0.3s ease-in-out",
        }}
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
                  <div className="h-full flex flex-col bg-white overflow-hidden">
                    <div className="border-b-2 border-red-500 pt-4 pb-2 px-5 mb-2 flex-shrink-0">
                      <h2
                        className="text-[17px] font-bold text-red-600 text-center"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {page.title}
                        {page.partInfo && (
                          <span
                            className="text-xs font-normal text-slate-500 ml-2"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                          >
                            ({page.partInfo})
                          </span>
                        )}
                      </h2>
                      <div className="flex justify-center items-center gap-2 mt-1">
                        <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-red-300"></div>
                        <div className="text-[10px] text-slate-400">
                          Trang {page.id}
                        </div>
                        <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-red-300"></div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden px-5 py-1">
                      <div
                        className="book-page-content h-full overflow-y-auto custom-scrollbar pr-2"
                        style={{ fontSize: "15px" }}
                      >
                        <div style={{ fontFamily: "'Times New Roman', serif" }}>
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

        {/* ChatBot - AI Trợ lý */}
        <ChatBot
          onToggle={setChatOpen}
          isOpen={chatOpen}
          backendUrl={config.backendUrl}
        />
      </div>
    </div>
  );
}

export default Book;
