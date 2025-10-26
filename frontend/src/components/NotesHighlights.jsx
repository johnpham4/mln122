import React, { useState, useEffect } from "react";
import { Highlighter, StickyNote, X, Save, Trash2 } from "lucide-react";

function NotesHighlights({ currentPage }) {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("pageNotes");
    return saved ? JSON.parse(saved) : {};
  });

  const [highlights] = useState(() => {
    const saved = localStorage.getItem("pageHighlights");
    return saved ? JSON.parse(saved) : {};
  });

  const [showNotePanel, setShowNotePanel] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [editMode, setEditMode] = useState(false);

  // Load note for current page
  useEffect(() => {
    setCurrentNote(notes[currentPage] || "");
    setEditMode(false);
  }, [currentPage, notes]);

  const saveNote = () => {
    const updated = { ...notes };
    if (currentNote.trim()) {
      updated[currentPage] = currentNote;
    } else {
      delete updated[currentPage];
    }
    setNotes(updated);
    localStorage.setItem("pageNotes", JSON.stringify(updated));
    setEditMode(false);
  };

  const deleteNote = () => {
    const updated = { ...notes };
    delete updated[currentPage];
    setNotes(updated);
    localStorage.setItem("pageNotes", JSON.stringify(updated));
    setCurrentNote("");
    setEditMode(false);
  };

  const hasNote = notes[currentPage];

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3">
        {/* Highlight Button */}

        {/* Notes Button */}
        <button
          onClick={() => setShowNotePanel(!showNotePanel)}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            hasNote
              ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white"
              : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 hover:from-green-500 hover:to-emerald-600 hover:text-white"
          }`}
          title="Ghi chú"
        >
          <StickyNote className="w-5 h-5" />
          {hasNote && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900"></span>
          )}
        </button>
      </div>

      {/* Notes Panel */}
      {showNotePanel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowNotePanel(false)}
          />

          {/* Panel */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl border border-slate-700/50 animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <StickyNote className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">
                  Ghi chú - Trang {currentPage + 1}
                </h3>
              </div>
              <button
                onClick={() => setShowNotePanel(false)}
                className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {editMode ? (
                <>
                  <textarea
                    value={currentNote}
                    onChange={(e) => setCurrentNote(e.target.value)}
                    placeholder="Nhập ghi chú của bạn..."
                    className="w-full h-64 bg-slate-700/50 text-white rounded-xl p-4 border border-slate-600 focus:border-green-500 focus:outline-none resize-none"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                    autoFocus
                  />

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={saveNote}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Lưu ghi chú
                    </button>
                    <button
                      onClick={() => {
                        setCurrentNote(notes[currentPage] || "");
                        setEditMode(false);
                      }}
                      className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {hasNote ? (
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 min-h-[16rem]">
                      <div
                        className="text-white whitespace-pre-wrap"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {currentNote}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <StickyNote className="w-16 h-16 text-slate-600 mb-4" />
                      <p className="text-slate-400 mb-2">
                        Chưa có ghi chú cho trang này
                      </p>
                      <p className="text-slate-500 text-sm">
                        Nhấn "Thêm ghi chú" để bắt đầu
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setEditMode(true)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                    >
                      {hasNote ? "Chỉnh sửa" : "Thêm ghi chú"}
                    </button>
                    {hasNote && (
                      <button
                        onClick={deleteNote}
                        className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Xóa
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Footer Info */}
            <div className="px-6 pb-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-xs text-blue-300 text-center">
                  💡 Ghi chú được lưu tự động trên trình duyệt của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NotesHighlights;
