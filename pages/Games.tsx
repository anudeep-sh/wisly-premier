
import React, { useState } from 'react';
import { Gamepad2, Brain, Sparkles, Send, Loader2 } from 'lucide-react';
import { generateQuiz, getAITutorResponse } from '../services/geminiService';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const Games: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'result'>('idle');
  const [aiQuestion, setAIQuestion] = useState('');
  const [aiAnswer, setAIAnswer] = useState('');

  const startQuiz = async () => {
    if (!topic) return;
    setLoading(true);
    const data = await generateQuiz(topic);
    if (data.length > 0) {
      setQuiz(data);
      setGameState('playing');
      setScore(0);
      setCurrentQuestion(0);
    }
    setLoading(false);
  };

  const handleAnswer = (option: string) => {
    if (option === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const askAI = async () => {
    if (!aiQuestion) return;
    setLoading(true);
    const res = await getAITutorResponse(aiQuestion);
    setAIAnswer(res || "Try again.");
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Quiz Game */}
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Brain className="w-32 h-32" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
            <Gamepad2 className="w-8 h-8 mr-3 text-blue-600" />
            Knowledge Quest
          </h2>

          {gameState === 'idle' && (
            <div className="space-y-6">
              <p className="text-gray-600">Challenge yourself with an AI-generated quiz on any topic!</p>
              <input
                type="text"
                placeholder="Enter topic (e.g. Photosynthesis, Trigonometry)"
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <button
                onClick={startQuiz}
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : 'Start Quest'}
              </button>
            </div>
          )}

          {gameState === 'playing' && quiz[currentQuestion] && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center text-sm font-bold text-blue-600 uppercase tracking-widest">
                <span>Question {currentQuestion + 1} of {quiz.length}</span>
                <span>Score: {score}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
                {quiz[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {quiz[currentQuestion].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className="p-5 text-left rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all font-medium text-gray-700"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Quest Completed!</h3>
              <p className="text-xl text-gray-600">You scored <span className="font-bold text-blue-600">{score}</span> out of {quiz.length}</p>
              <button
                onClick={() => setGameState('idle')}
                className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700"
              >
                Try Another Topic
              </button>
            </div>
          )}
        </div>

        {/* AI Tutor */}
        <div className="bg-slate-900 rounded-[3rem] p-10 shadow-xl text-white flex flex-col h-full">
          <h2 className="text-3xl font-extrabold mb-8 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-blue-400" />
            WISLY AI Tutor
          </h2>
          
          <div className="flex-grow mb-8 bg-slate-800/50 rounded-2xl p-6 overflow-y-auto max-h-[400px]">
            {aiAnswer ? (
              <div className="space-y-4">
                <div className="flex justify-start">
                   <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed">
                    {aiAnswer}
                   </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500">
                Ask me any question about your syllabus!
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="How do black holes form?"
              className="w-full bg-slate-800 border-none px-6 py-4 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none pr-16"
              value={aiQuestion}
              onChange={(e) => setAIQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && askAI()}
            />
            <button
              onClick={askAI}
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-blue-600 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
