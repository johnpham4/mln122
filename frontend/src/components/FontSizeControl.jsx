import React, { useState } from "react";
import { Type, Minus, Plus } from "lucide-react";

function FontSizeControl() {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? parseInt(saved) : 13;
  });

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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-full shadow-2xl border border-slate-700/50 p-2 flex items-center gap-2">
        {/* Decrease Button */}
        <button
          onClick={decrease}
          disabled={fontSize <= 10}
          className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-200 hover:scale-110"
          title="Giảm cỡ chữ"
        >
          <Minus className="w-4 h-4" />
        </button>

        {/* Font Icon & Size Display */}
        <div className="flex items-center gap-2 px-3">
          <Type className="w-4 h-4 text-blue-400" />
          <span className="text-white font-semibold text-sm min-w-[60px] text-center">
            {fontSize}px
          </span>
        </div>

        {/* Increase Button */}
        <button
          onClick={increase}
          disabled={fontSize >= 20}
          className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-200 hover:scale-110"
          title="Tăng cỡ chữ"
        >
          <Plus className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-600 mx-1" />

        {/* Preset Sizes */}
        <div className="flex gap-1">
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => changeFontSize(size.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                fontSize === size.value
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
              title={`Cỡ chữ ${size.label}`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FontSizeControl;
