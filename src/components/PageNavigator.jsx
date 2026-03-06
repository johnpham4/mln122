import React, { useState } from "react";
import { Hash, ArrowRight } from "lucide-react";

function PageNavigator({ totalPages, onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageInput, setPageInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput);
    
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      // Convert 1-based page number to 0-based index
      onNavigate(pageNum - 1);
      setPageInput("");
      setIsOpen(false);
    } else {
      alert(`Vui lòng nhập số trang từ 1 đến ${totalPages}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Button to open page navigator */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-32 left-6 z-50 bg-gradient-to-br from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Nhảy đến trang"
      >
        <Hash className="w-5 h-5" />
      </button>

      {/* Page Navigator Panel */}
      {isOpen && (
        <div className="fixed top-32 left-20 z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-4 border border-slate-700/50 w-64">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Nhảy đến trang</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`1 - ${totalPages}`}
                  className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Trang hiện tại: <span className="text-purple-400 font-semibold">{currentPage + 1}</span></span>
                <span>/ {totalPages}</span>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium"
              >
                Đi đến
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-slate-400 hover:text-white text-xs py-1 transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PageNavigator;
