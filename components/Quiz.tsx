
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { EraYear } from '../types';

interface QuizProps {
  onClose: () => void;
  year: EraYear;
}

const Quiz: React.FC<QuizProps> = ({ onClose, year }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = QUIZ_QUESTIONS.filter(q => q.year <= year);
  const currentQuestion = questions[currentStep];

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const correct = index === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-lg w-full text-white shadow-2xl">
        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Web History Quiz</span>
              <button onClick={onClose} className="text-slate-500 hover:text-white">✕</button>
            </div>
            
            <h3 className="text-xl font-bold mb-6">{currentQuestion.question}</h3>
            
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`
                    w-full text-left p-4 rounded-xl border transition-all
                    ${selectedOption === idx 
                      ? (isCorrect ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500')
                      : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedOption !== null && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className={`text-sm mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect.'} {currentQuestion.explanation}
                </p>
                <button
                  onClick={nextQuestion}
                  className="w-full bg-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors"
                >
                  {currentStep + 1 === questions.length ? 'Finish' : 'Next Question'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-black mb-2">Quiz Complete!</h3>
            <p className="text-slate-400 mb-8">You scored {score} out of {questions.length}</p>
            <button
              onClick={onClose}
              className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Back to Time Travel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
