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
    3: {
      title: "Câu hỏi về Mục lục",
      question: "Cuốn sách này bao gồm bao nhiêu chương chính?",
      options: ["A. 4 chương", "B. 5 chương", "C. 6 chương", "D. 7 chương"],
      correctAnswer: "C",
      explanation:
        "Theo Mục lục, cuốn sách gồm 6 chương: Chương I (Cơ sở lý luận), Chương II (Thực trạng), Chương III (Hội nhập kinh tế), Chương IV (Công nghiệp hóa xanh), Chương V (Công nghiệp hóa thông minh), Chương VI (Giải pháp và định hướng).",
    },
    4: {
      title: "Câu hỏi về Công nghiệp hóa theo Mác-Lênin",
      question:
        "Theo Marx, công nghiệp hóa không chỉ là sự thay đổi về kỹ thuật mà còn là cuộc cách mạng về điều gì?",
      options: [
        "A. Chỉ về máy móc thiết bị",
        "B. Quan hệ sản xuất và cấu trúc xã hội",
        "C. Chỉ về nông nghiệp",
        "D. Về thương mại quốc tế",
      ],
      correctAnswer: "B",
      explanation:
        "Karl Marx đã chỉ ra rằng công nghiệp hóa không chỉ là sự thay đổi về kỹ thuật mà còn là cuộc cách mạng về quan hệ sản xuất và cấu trúc xã hội.",
    },
    5: {
      title: "Câu hỏi về Nguyên lý phát triển",
      question:
        "Theo Lênin, nguyên lý nào là cơ sở để xây dựng nền kinh tế độc lập, tự chủ?",
      options: [
        "A. Ưu tiên phát triển công nghiệp nặng làm nền tảng",
        "B. Chỉ phát triển công nghiệp nhẹ",
        "C. Phụ thuộc hoàn toàn vào nước ngoài",
        "D. Phát triển ngẫu nhiên không kế hoạch",
      ],
      correctAnswer: "A",
      explanation:
        "Theo Lênin, để xây dựng nền kinh tế độc lập, tự chủ, cần ưu tiên phát triển công nghiệp nặng làm nền tảng. Công nghiệp nặng sản xuất tư liệu sản xuất cho các ngành khác.",
    },
    6: {
      title: "Câu hỏi về Tốc độ tăng trưởng",
      question:
        "GDP Việt Nam tăng trưởng bình quân bao nhiêu phần trăm mỗi năm trong hơn 35 năm đổi mới?",
      options: ["A. 3-4%/năm", "B. 6-7%/năm", "C. 8-9%/năm", "D. 10-11%/năm"],
      correctAnswer: "B",
      explanation:
        "Theo chương II, GDP Việt Nam tăng trưởng bình quân 6-7%/năm trong hơn 35 năm đổi mới, là tốc độ tăng trưởng ấn tượng và bền vững.",
    },
    7: {
      title: "Câu hỏi về Thành tựu công nghiệp hóa",
      question:
        "Tỷ trọng công nghiệp-xây dựng trong GDP của Việt Nam đạt bao nhiêu theo dữ liệu trong chương?",
      options: ["A. 25.5%", "B. 33.7%", "C. 45.2%", "D. 50.1%"],
      correctAnswer: "B",
      explanation:
        "Theo chương II, tỷ trọng công nghiệp-xây dựng đạt 33.7% GDP, cho thấy sự chuyển dịch cơ cấu kinh tế từ nông nghiệp sang công nghiệp của Việt Nam.",
    },
    8: {
      title: "Câu hỏi về Cơ cấu công nghiệp",
      question:
        "Ngành công nghiệp nào chiếm tỷ trọng cao nhất trong công nghiệp chế biến, chế tạo của Việt Nam?",
      options: [
        "A. Dệt may, da giày (15.3%)",
        "B. Điện tử, viễn thông (28.5%)",
        "C. Thực phẩm đồ uống (12.8%)",
        "D. Cơ khí, kim loại (9.7%)",
      ],
      correctAnswer: "B",
      explanation:
        "Công nghiệp điện tử, viễn thông chiếm 28.5% trong công nghiệp chế biến, chế tạo, là ngành có tỷ trọng cao nhất, chủ yếu nhờ đầu tư FDI từ Samsung, Intel, LG.",
    },
    9: {
      title: "Câu hỏi về Hội nhập WTO",
      question: "Việt Nam chính thức gia nhập WTO vào năm nào?",
      options: ["A. 1995 (ASEAN)", "B. 2000", "C. 2007", "D. 2018 (CPTPP)"],
      correctAnswer: "C",
      explanation:
        "Việt Nam chính thức gia nhập WTO (Tổ chức Thương mại Thế giới) vào năm 2007, đánh dấu bước tiến quan trọng trong quá trình hội nhập kinh tế quốc tế.",
    },
    10: {
      title: "Câu hỏi về Kim ngạch xuất khẩu",
      question:
        "Kim ngạch xuất khẩu của Việt Nam tăng từ bao nhiêu (năm 2000) lên 336.3 tỷ USD (năm 2021)?",
      options: [
        "A. 8.5 tỷ USD",
        "B. 14.5 tỷ USD",
        "C. 20.3 tỷ USD",
        "D. 25.7 tỷ USD",
      ],
      correctAnswer: "B",
      explanation:
        "Theo chương III, kim ngạch xuất khẩu tăng từ 14.5 tỷ USD (2000) lên 336.3 tỷ USD (2021), tăng trưởng bình quân 15%/năm, cho thấy thành công của hội nhập kinh tế.",
    },
    11: {
      title: "Câu hỏi về Năng lượng tái tạo",
      question:
        "Mục tiêu công suất điện mặt trời của Việt Nam đến năm 2030 là bao nhiêu?",
      options: ["A. 10.000 MW", "B. 16.500 MW", "C. 18.600 MW", "D. 24.000 MW"],
      correctAnswer: "C",
      explanation:
        "Theo chương IV về Công nghiệp hóa xanh, mục tiêu đến 2030 là đạt 18.600 MW điện mặt trời (hiện tại đã lắp đặt 16.500 MW), góp phần chuyển đổi năng lượng xanh.",
    },
    12: {
      title: "Câu hỏi về Năng lượng gió",
      question: "Tiềm năng điện gió ngoài khơi của Việt Nam là bao nhiêu?",
      options: ["A. 6.000 MW", "B. 24.000 MW", "C. 35.000 MW", "D. 160.000 MW"],
      correctAnswer: "D",
      explanation:
        "Tiềm năng điện gió ngoài khơi lên đến 160.000 MW (trong khi điện gió trên bờ là 24.000 MW), cho thấy tiềm năng to lớn của Việt Nam về năng lượng gió.",
    },
    13: {
      title: "Câu hỏi về Giao thông xanh",
      question: "Mục tiêu của Việt Nam về xe máy điện đến năm 2030 là gì?",
      options: [
        "A. 50% xe máy điện",
        "B. 75% xe máy điện",
        "C. 100% xe máy điện",
        "D. Không có mục tiêu cụ thể",
      ],
      correctAnswer: "C",
      explanation:
        "Theo chương IV, mục tiêu là 100% xe máy điện vào năm 2030, thể hiện quyết tâm chuyển đổi giao thông xanh của Việt Nam.",
    },
    14: {
      title: "Câu hỏi về Công nghiệp 4.0",
      question:
        "Robot và tự động hóa trong công nghiệp 4.0 có thể giảm bao nhiêu phần trăm lao động thủ công?",
      options: ["A. 20-30%", "B. 30-50%", "C. 40-60%", "D. 60-80%"],
      correctAnswer: "D",
      explanation:
        "Theo chương V, hệ thống Robot và tự động hóa có thể giảm 60-80% lao động thủ công, đồng thời ứng dụng AI giảm 30-50% thời gian sản xuất.",
    },
    15: {
      title: "Câu hỏi về Chuyển đổi số",
      question:
        "Quản lý chuỗi cung ứng số có thể giảm bao nhiêu phần trăm chi phí logistics?",
      options: ["A. 10-15%", "B. 20-30%", "C. 40-50%", "D. 60-70%"],
      correctAnswer: "B",
      explanation:
        "Theo nội dung chuyển đổi số, quản lý chuỗi cung ứng số có thể giảm 20-30% chi phí logistics thông qua tối ưu hóa kho vận và dự báo nhu cầu.",
    },
    16: {
      title: "Câu hỏi về Đầu tư R&D",
      question:
        "Mục tiêu tăng đầu tư R&D của Việt Nam là bao nhiêu phần trăm GDP?",
      options: ["A. 0.5-1% GDP", "B. 1-1.5% GDP", "C. 2-3% GDP", "D. 4-5% GDP"],
      correctAnswer: "C",
      explanation:
        "Theo chương V, mục tiêu là tăng đầu tư R&D lên 2-3% GDP (hiện tại chỉ 0.44%), để thúc đẩy đổi mới sáng tạo và phát triển công nghệ.",
    },
    18: {
      title: "Câu hỏi về Năng suất lao động",
      question:
        "Năng suất lao động công nghiệp Việt Nam so với Singapore là bao nhiêu?",
      options: ["A. 1/3", "B. 1/5", "C. 1/10", "D. 1/15"],
      correctAnswer: "C",
      explanation:
        "Theo chương II, năng suất lao động công nghiệp Việt Nam khoảng 4.200 USD/người/năm, chỉ bằng 1/10 so với Singapore, cho thấy còn nhiều dư địa để cải thiện.",
    },
    19: {
      title: "Câu hỏi về Hiệp định thương mại",
      question:
        "RCEP - Hiệp định Đối tác Kinh tế Toàn diện Khu vực mà Việt Nam tham gia được ký vào năm nào?",
      options: ["A. 2018", "B. 2020", "C. 2022", "D. 2023"],
      correctAnswer: "C",
      explanation:
        "RCEP được ký kết vào năm 2022, tạo ra khu vực thương mại tự do lớn nhất thế giới với 2.2 tỷ người, chiếm 30% GDP toàn cầu.",
    },
    21: {
      title: "Câu hỏi về Thuế carbon",
      question:
        "Mức thuế carbon mà Việt Nam dự kiến áp dụng từ năm 2030 là bao nhiêu?",
      options: [
        "A. 20 USD/tấn CO2",
        "B. 30 USD/tấn CO2",
        "C. 50 USD/tấn CO2",
        "D. 100 USD/tấn CO2",
      ],
      correctAnswer: "C",
      explanation:
        "Theo Kết luận, thuế carbon dự kiến là 50 USD/tấn CO2 từ năm 2030, cùng với ưu đãi thuế 50% cho doanh nghiệp xanh để thúc đẩy sản xuất bền vững.",
    },
    23: {
      title: "Câu hỏi về Kinh tế số",
      question:
        "Mục tiêu tỷ trọng kinh tế số trong GDP đến năm 2030 là bao nhiêu?",
      options: ["A. 15%", "B. 20%", "C. 30%", "D. 40%"],
      correctAnswer: "C",
      explanation:
        "Mục tiêu tỷ trọng kinh tế số đạt 30% GDP vào 2030, cùng với 80% doanh nghiệp áp dụng công nghệ số và 1 triệu kỹ sư công nghệ thông tin.",
    },
    25: {
      title: "Câu hỏi về Giáo dục",
      question:
        "Mục tiêu đầu tư cho giáo dục từ ngân sách nhà nước là bao nhiêu?",
      options: [
        "A. 10% ngân sách",
        "B. 15% ngân sách",
        "C. 20% ngân sách",
        "D. 25% ngân sách",
      ],
      correctAnswer: "C",
      explanation:
        "Theo kiến nghị, cần đầu tư ít nhất 20% ngân sách nhà nước cho giáo dục, tập trung phát triển giáo dục STEM và giáo dục nghề nghiệp.",
    },
    27: {
      title: "Câu hỏi về Năng lượng tái tạo",
      question:
        "Mục tiêu tỷ lệ điện năng từ nguồn tái tạo vào năm 2050 là bao nhiêu?",
      options: ["A. 30%", "B. 40%", "C. 50%", "D. 60%"],
      correctAnswer: "C",
      explanation:
        "Theo Kết luận, mục tiêu là 50% điện năng từ nguồn tái tạo vào năm 2050, với đầu tư 50 tỷ USD cho năng lượng tái tạo đến 2030.",
    },
    30: {
      title: "Câu hỏi về Tầm nhìn 2045",
      question: "Mục tiêu của Việt Nam đến năm 2045 là gì?",
      options: [
        "A. Nước đang phát triển",
        "B. Nước công nghiệp hiện đại",
        "C. Nước phát triển có thu nhập cao",
        "D. Nước nông nghiệp tiên tiến",
      ],
      correctAnswer: "C",
      explanation:
        "Mục tiêu đến 2045 là trở thành nước phát triển có thu nhập cao (trong khi mục tiêu 2030 là nước công nghiệp hiện đại với thu nhập trung bình cao).",
    },
  };

  // Helper function để render nội dung có hình ảnh
  const renderContentWithImages = (content) => {
    const lines = content.split("\n");
    const elements = [];

    lines.forEach((line, index) => {
      if (line.includes("[IMAGE:")) {
        // Parse image format: [IMAGE:filename.jpg|Caption text]
        const match = line.match(/\[IMAGE:([^|]+)\|([^\]]+)\]/);
        if (match) {
          const [, filename, caption] = match;
          elements.push(
            <div key={index} className="my-2 text-center">
              <img
                src={`/${filename}`}
                alt={caption}
                className="max-w-[80%] max-h-[100px] mx-auto object-contain border border-slate-200 rounded"
              />
              <div className="text-[9px] italic text-slate-500 mt-1">
                {caption}
              </div>
            </div>
          );
        }
      } else if (line.trim()) {
        elements.push(
          <p key={index} className="mb-1 text-justify">
            {line}
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
                      <div className="text-4xl">
                        {page.flag === "VN" ? "🇻🇳" : page.flag || "🇻🇳"}
                      </div>
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
