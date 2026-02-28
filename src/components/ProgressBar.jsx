import React, { useEffect, useState, useCallback } from "react";
import { Book, CheckCircle2 } from "lucide-react";

function ProgressBar({ currentPage, totalPages }) {
  const [readPages, setReadPages] = useState(() => {
    const saved = localStorage.getItem("readPages");
    return saved ? JSON.parse(saved) : [];
  });

  const pagesRead = readPages.length;
  const progressFromRead = Math.round((pagesRead / totalPages) * 100);

  // Sử dụng useCallback để tránh infinite loop
  const markPageAsRead = useCallback((pageIndex) => {
    setReadPages((prevReadPages) => {
      // Chỉ update nếu trang chưa được đánh dấu
      if (!prevReadPages.includes(pageIndex) && pageIndex >= 0) {
        const updated = [...prevReadPages, pageIndex].sort((a, b) => a - b);
        localStorage.setItem("readPages", JSON.stringify(updated));
        return updated;
      }
      return prevReadPages;
    });
  }, []);

  useEffect(() => {
    // Đánh dấu trang hiện tại đã đọc
    if (currentPage >= 0) {
      markPageAsRead(currentPage);
      // Cũng đánh dấu trang bên phải (currentPage + 1) nếu đang xem spread
      if (currentPage + 1 < totalPages) {
        markPageAsRead(currentPage + 1);
      }
    }
  }, [currentPage, totalPages, markPageAsRead]);

  const isCompleted = progressFromRead >= 95;

  // Reset progress
  const resetProgress = () => {
    if (window.confirm("Bạn có chắc muốn reset tiến độ đọc?")) {
      setReadPages([]);
      localStorage.removeItem("readPages");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-4">
          {/* Icon & Title */}
          <div className="flex items-center gap-2 min-w-[200px]">
            <Book className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-white">
              Tiến độ đọc
            </span>
            {pagesRead > 0 && (
              <button
                onClick={resetProgress}
                className="ml-2 text-xs text-slate-400 hover:text-red-400 transition-colors"
                title="Reset tiến độ"
              >
                ↻
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="flex-1 relative">
            <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full transition-all duration-500 ease-out ${
                  isCompleted
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600"
                }`}
                style={{ width: `${progressFromRead}%` }}
              >
                <div className="h-full w-full animate-pulse-glow opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 min-w-[200px] justify-end">
            <div className="text-right">
              <div className="text-xs text-slate-300">
                {pagesRead}/{totalPages} trang
              </div>
              <div
                className={`text-sm font-bold ${
                  isCompleted ? "text-green-400" : "text-blue-400"
                }`}
              >
                {progressFromRead}%
              </div>
            </div>

            {isCompleted && (
              <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs font-semibold text-green-400">
                  Hoàn thành
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
