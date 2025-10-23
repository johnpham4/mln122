import React, { useState } from 'react';

const QuestionNotebook = ({ question, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    setUserAnswer(selectedAnswer);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setUserAnswer('');
  };

  return (
    <div className="notebook-overlay">
      <div className="notebook-container">
        <div className="notebook-header">
          <h2>{question.title}</h2>
          <button className="close-btn" onClick={onClose}>❌</button>
        </div>

        <div className="notebook-content">
          <div className="question-section">
            <h3>Câu hỏi:</h3>
            <p>{question.question}</p>
          </div>

          {!showResult && (
            <div className="options-section">
              <h3>Chọn đáp án:</h3>
              {question.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name="answer"
                    value={option.charAt(0)}
                    checked={selectedAnswer === option.charAt(0)}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  <span>{option}</span>
                </label>
              ))}

              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
              >
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {showResult && (
            <div className="result-section">
              <div className={`result ${userAnswer === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                {userAnswer === question.correctAnswer ? (
                  <div className="correct-answer">
                    <h3>✅ Chính xác!</h3>
                    <p>Bạn đã chọn đúng đáp án {question.correctAnswer}</p>
                  </div>
                ) : (
                  <div className="incorrect-answer">
                    <h3>❌ Chưa đúng</h3>
                    <p>Bạn đã chọn: {userAnswer}</p>
                    <p>Đáp án đúng là: {question.correctAnswer}</p>
                  </div>
                )}
              </div>

              <div className="explanation">
                <h3>Giải thích:</h3>
                <p>{question.explanation}</p>
              </div>

              <button className="retry-btn" onClick={handleReset}>
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