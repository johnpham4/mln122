import React, { useState } from "react";
import { Bookmark, X, ChevronRight } from "lucide-react";

function BookmarkPanel({ allPages, onNavigate, bookmarks = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (pageIndex) => {
    onNavigate(pageIndex);
    setIsOpen(false);
  };

  return (
    <>
      {/* Bookmark Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-6 z-50 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        title="Đánh dấu trang"
      >
        <Bookmark
          className="w-5 h-5"
          fill={bookmarks.length > 0 ? "currentColor" : "none"}
        />
        {bookmarks.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {bookmarks.length}
          </span>
        )}
      </button>

      {/* Bookmark Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-end pt-20 pr-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-96 max-h-[80vh] overflow-hidden border border-slate-700/50 animate-slide-in-right">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-white" fill="currentColor" />
                <h3 className="text-lg font-bold text-white">
                  Trang đã đánh dấu
                </h3>
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
              {bookmarks.length === 0 ? (
                <div className="text-center py-12">
                  <Bookmark className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400 text-sm">
                    Chưa có trang nào được đánh dấu
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Nhấn vào icon bookmark để lưu trang quan trọng
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {bookmarks.map((pageIndex) => {
                    const page = allPages[pageIndex];
                    return (
                      <button
                        key={pageIndex}
                        onClick={() => handleNavigate(pageIndex)}
                        className="w-full bg-slate-700/50 hover:bg-slate-700 p-3 rounded-xl transition-all duration-200 text-left group border border-slate-600/30 hover:border-amber-500/50"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold text-amber-400">
                                Trang {pageIndex + 1}
                              </span>
                              <span className="text-xs text-slate-500">•</span>
                              <span className="text-xs text-slate-400">
                                {page?.type || "content"}
                              </span>
                            </div>
                            <div className="text-sm text-white font-medium line-clamp-1">
                              {page?.title ||
                                page?.subtitle ||
                                "Không có tiêu đề"}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Export toggle function để dùng từ Book component
export function BookmarkButton({ pageIndex, isBookmarked, onToggle }) {
  // Trang chẵn (bên trái) -> bookmark bên trái (tránh vùng lật trang bên phải)
  // Trang lẻ (bên phải) -> bookmark bên phải (tránh vùng lật trang bên trái)
  const isLeftPage = pageIndex % 2 === 0;
  const positionClass = isLeftPage ? "left-4" : "right-4";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle(pageIndex);
      }}
      className={`absolute top-4 ${positionClass} z-10 p-2 rounded-lg transition-all duration-300 ${
        isBookmarked
          ? "bg-amber-500 text-white shadow-lg scale-110"
          : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-amber-400"
      }`}
      title={isBookmarked ? "Bỏ đánh dấu" : "Đánh dấu trang"}
    >
      <Bookmark
        className="w-4 h-4"
        fill={isBookmarked ? "currentColor" : "none"}
      />
    </button>
  );
}

export default BookmarkPanel;
