import React, { useState } from "react";
import { Menu, X, ChevronRight, Book } from "lucide-react";

function TableOfContents({ allPages, onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract chapters and sections from pages
  const chapters = allPages
    .map((page, index) => {
      // Include chapter pages, TOC, and content pages with numbered sections (1.1, 1.2, 2.1, etc.)
      if (page.type === "chapter" || page.type === "toc") {
        return {
          index,
          title: page.title,
          subtitle: page.subtitle,
          type: page.type,
          level: 0, // Main chapter
        };
      }

      // Include content pages that start with section numbers like "1.1.", "2.1.", etc.
      // Skip pages with "(tiếp)" in the title
      if (
        page.type === "content" &&
        page.title &&
        !page.title.includes("(tiếp)")
      ) {
        const match = page.title.match(/^(\d+\.\d+)/); // Match patterns like "1.1", "2.1"
        if (match) {
          const sectionNumber = match[1];
          const level = sectionNumber.split(".").length - 1; // 1.1 = level 1, 1.1.1 = level 2
          return {
            index,
            title: page.title,
            subtitle: page.subtitle,
            type: "section",
            level: level,
            sectionNumber: sectionNumber,
          };
        }
      }
      return null;
    })
    .filter(Boolean);

  const handleNavigate = (pageIndex) => {
    console.log("TOC: Navigating to page index:", pageIndex);
    onNavigate(pageIndex);
    setIsOpen(false);
  };

  return (
    <>
      {/* TOC Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-6 z-50 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Mục lục"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* TOC Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-start pt-20 pl-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-96 max-h-[80vh] overflow-hidden border border-slate-700/50 animate-slide-in-left">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Mục lục</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-[calc(80vh-80px)] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                {chapters.map((chapter, idx) => {
                  const isActive = currentPage === chapter.index;
                  const isSection = chapter.type === "section";
                  const indentClass = isSection
                    ? chapter.level === 1
                      ? "ml-4"
                      : "ml-8"
                    : "";

                  return (
                    <button
                      key={chapter.index}
                      onClick={() => handleNavigate(chapter.index)}
                      className={`w-full p-3 rounded-lg transition-all duration-200 text-left group border ${indentClass} ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border-blue-500/50"
                          : "bg-slate-700/50 hover:bg-slate-700 border-slate-600/30 hover:border-blue-500/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          {chapter.type === "chapter" && (
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`text-xs font-bold px-2 py-1 rounded ${
                                  isActive
                                    ? "bg-blue-500 text-white"
                                    : "bg-slate-600 text-slate-300"
                                }`}
                              >
                                Chương {idx + 1}
                              </span>
                            </div>
                          )}
                          <div
                            className={`${
                              isSection ? "text-xs" : "text-sm"
                            } font-bold mb-1 ${
                              isActive ? "text-blue-400" : "text-white"
                            }`}
                          >
                            {chapter.title}
                          </div>
                          {chapter.subtitle && (
                            <div className="text-xs text-slate-400 line-clamp-2">
                              {chapter.subtitle}
                            </div>
                          )}
                          <div className="text-xs text-slate-500 mt-1">
                            Trang {chapter.index + 1}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-colors flex-shrink-0 ${
                            isActive
                              ? "text-blue-400"
                              : "text-slate-400 group-hover:text-blue-400"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableOfContents;
