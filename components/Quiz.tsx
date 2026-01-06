
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface Props {
  questions: Question[];
  topicName: string;
}

const Quiz: React.FC<Props> = ({ questions, topicName }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset quiz when questions change
  useEffect(() => {
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [questions]);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === questions[currentIdx].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100 text-center animate-in zoom-in duration-300">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold text-teal-800 mb-2">Kết quả luyện tập</h2>
        <p className="text-slate-500 mb-6">Chủ đề: {topicName}</p>
        <div className="text-6xl font-black text-teal-600 mb-8">
          {score}/{questions.length}
        </div>
        <div className="text-lg text-slate-700 mb-8">
          {score >= 8 ? 'Xuất sắc! Bạn đã nắm vững kiến thức này.' : 
           score >= 5 ? 'Khá tốt. Hãy ôn tập thêm một chút nhé.' : 
           'Bạn cần ôn lại lý thuyết kỹ hơn.'}
        </div>
        <button
          onClick={() => {
            setCurrentIdx(0);
            setScore(0);
            setShowResult(false);
            setSelectedOption(null);
            setIsAnswered(false);
          }}
          className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
        >
          Làm lại bài tập
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 animate-in slide-in-from-right duration-300">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">
          Câu hỏi {currentIdx + 1}/{questions.length}
        </span>
        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-500 transition-all duration-300" 
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-8">
        {currentQuestion.question}
      </h3>

      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((opt, idx) => {
          let className = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center ";
          
          if (!isAnswered) {
            className += "border-slate-100 hover:border-teal-200 hover:bg-teal-50 text-slate-700";
          } else {
            if (idx === currentQuestion.correctAnswer) {
              className += "border-green-500 bg-green-50 text-green-800 font-semibold ring-2 ring-green-100";
            } else if (idx === selectedOption) {
              className += "border-red-500 bg-red-50 text-red-800";
            } else {
              className += "border-slate-100 text-slate-400 opacity-60";
            }
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} disabled={isAnswered} className={className}>
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold ${
                isAnswered && idx === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 
                isAnswered && idx === selectedOption ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mb-8 p-4 bg-teal-50 rounded-xl border border-teal-100 animate-in fade-in slide-in-from-bottom duration-300">
          <p className="text-teal-800 font-semibold mb-1">Giải thích:</p>
          <p className="text-teal-700 text-sm">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
            isAnswered 
              ? 'bg-teal-600 text-white hover:bg-teal-700 active:scale-95' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {currentIdx === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
