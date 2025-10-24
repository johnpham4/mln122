import React, { useState } from "react";
import { X, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

const QuestionNotebook = ({ question, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    setUserAnswer(selectedAnswer);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setShowResult(false);
    setUserAnswer("");
  };

  const isCorrect = userAnswer === question.correctAnswer;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
            <h2 className="text-lg font-bold text-white">{question.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-88px)] overflow-y-auto">
          {/* Question */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-xs">
                ?
              </span>
              Câu hỏi:
            </h3>
            <p className="text-base text-slate-700 leading-relaxed pl-8">
              {question.question}
            </p>
          </div>

          {!showResult && (
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-semibold text-red-600 mb-3">
                Chọn đáp án:
              </h3>
              {question.options.map((option, index) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswer === letter;

                return (
                  <label
                    key={index}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md scale-[1.02]"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-blue-500 bg-blue-500"
                            : "border-slate-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="answer"
                        value={letter}
                        checked={isSelected}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="hidden"
                      />
                      <span className="text-sm text-slate-700 flex-1">
                        {option}
                      </span>
                    </div>
                  </label>
                );
              })}

              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={`w-full mt-4 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                  selectedAnswer
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {showResult && (
            <div className="space-y-4 animate-slide-up">
              {/* Result Badge */}
              <div
                className={`p-6 rounded-xl ${
                  isCorrect
                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                    : "bg-gradient-to-br from-red-500 to-rose-600"
                }`}
              >
                <div className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    {isCorrect ? (
                      <CheckCircle2 className="w-8 h-8" />
                    ) : (
                      <XCircle className="w-8 h-8" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      {isCorrect ? "Chính xác!" : "Chưa đúng"}
                    </h3>
                    <p className="text-sm opacity-95">
                      {isCorrect
                        ? `Bạn đã chọn đúng đáp án ${question.correctAnswer}`
                        : `Bạn đã chọn: ${userAnswer} | Đáp án đúng là: ${question.correctAnswer}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-xl border-l-4 border-red-500">
                <h3 className="text-sm font-bold text-red-600 mb-3 flex items-center gap-2">
                  <span className="text-lg">💡</span>
                  Giải thích:
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {question.explanation}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Thử lại
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionNotebook;
