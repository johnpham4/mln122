import React, { useState } from "react";
import { Type, Minus, Plus, X } from "lucide-react";

function FontSizeControl() {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? parseInt(saved) : 13;
  });
  const [isOpen, setIsOpen] = useState(false);

  const sizes = [
    { label: "Nhỏ", value: 11 },
    { label: "Trung bình", value: 13 },
    { label: "Lớn", value: 15 },
    { label: "Rất lớn", value: 17 },
  ];

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
    localStorage.setItem("fontSize", newSize.toString());

    // Set CSS variable for font size
    document.documentElement.style.setProperty(
      "--book-font-size",
      `${newSize}px`
    );

    // Apply to all book pages (fallback)
    const bookPages = document.querySelectorAll(".book-page-content");
    bookPages.forEach((page) => {
      page.style.fontSize = `${newSize}px`;
    });

    // Apply to .section-content pre (override CSS)
    const sectionPres = document.querySelectorAll(".section-content pre");
    sectionPres.forEach((pre) => {
      pre.style.fontSize = `${newSize}px`;
    });
  };

  const increase = () => {
    if (fontSize < 20) {
      changeFontSize(fontSize + 1);
    }
  };

  const decrease = () => {
    if (fontSize > 10) {
      changeFontSize(fontSize - 1);
    }
  };

  return (
    <>
      {/* Font Size Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[140px] right-6 z-50 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Điều chỉnh cỡ chữ"
      >
        <Type className="w-5 h-5" />
      </button>

      {/* Font Size Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-end pt-[120px] pr-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-700/50 animate-slide-in-right">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">
                  Cỡ chữ
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
            <div className="p-4 space-y-4">
              {/* Current Size Display */}
              <div className="bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600/30">
                <div className="text-slate-400 text-xs mb-1">Kích thước hiện tại</div>
                <div className="text-white font-bold text-2xl">{fontSize}px</div>
              </div>

              {/* Plus/Minus Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={decrease}
                  disabled={fontSize <= 10}
                  className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-200 hover:scale-110"
                  title="Giảm cỡ chữ"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <button
                  onClick={increase}
                  disabled={fontSize >= 20}
                  className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-200 hover:scale-110"
                  title="Tăng cỡ chữ"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-600/50" />

              {/* Preset Sizes */}
              <div>
                <div className="text-slate-400 text-xs mb-3 text-center">Kích thước nhanh</div>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => changeFontSize(size.value)}
                      className={`p-3 rounded-xl font-medium transition-all duration-200 ${
                        fontSize === size.value
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600/30"
                      }`}
                      title={`Cỡ chữ ${size.label}`}
                    >
                      {size.label}
                      <div className="text-xs opacity-75 mt-1">{size.value}px</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FontSizeControl;
