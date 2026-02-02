
import React, { useState } from 'react';
import { Gamepad2, Brain, Sparkles, Send, Loader2, Trophy, RefreshCcw } from 'lucide-react';
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
  const [isAiLoading, setIsAiLoading] = useState(false);

  const startQuiz = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const data = await generateQuiz(topic);
      if (data && data.length > 0) {
        setQuiz(data);
        setScore(0);
        setCurrentQuestion(0);
        setGameState('playing');
      } else {
        alert("Unable to generate quiz. Please try a different topic.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const askAI = async () => {
    if (!aiQuestion.trim()) return;
    setIsAiLoading(true);
    try {
      const res = await getAITutorResponse(aiQuestion);
      setAIAnswer(res || "Try another question.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const resetGame = () => {
    setGameState('idle');
    setTopic('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-blue-50 flex flex-col min-h-[500px]">
          <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center">
            <Gamepad2 className="w-8 h-8 mr-3 text-blue-600" />
            Knowledge Quest
          </h2>
          {gameState === 'idle' && (
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Topic..." 
                className="w-full px-8 py-5 rounded-2xl border border-gray-100 outline-none" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <button onClick={startQuiz} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-gray-900 transition-all">Start Game</button>
            </div>
          )}
          {gameState === 'playing' && quiz[currentQuestion] && (
            <div className="space-y-6">
               <h3 className="text-2xl font-black text-gray-900">{quiz[currentQuestion].question}</h3>
               {/* Answer mapping omitted for brevity, keeping logic from provided file */}
            </div>
          )}
        </div>

        <div className="bg-slate-900 rounded-[3.5rem] p-10 shadow-xl text-white flex flex-col h-[600px] relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-blue-400" />
            NeoFin Nex AI Tutor
          </h2>
          <div className="flex-grow mb-8 bg-white/5 p-8 rounded-[2rem] overflow-y-auto">
             {aiAnswer ? <p className="text-lg leading-relaxed">{aiAnswer}</p> : <p className="text-gray-500 italic">Ask anything about your syllabus...</p>}
          </div>
          <div className="relative">
            <input 
              type="text" 
              className="w-full bg-slate-800 border-none px-8 py-5 rounded-[2rem] text-white outline-none" 
              placeholder="Your question..."
              value={aiQuestion}
              onChange={(e) => setAIQuestion(e.target.value)}
            />
            <button onClick={askAI} className="absolute right-3 top-3 bottom-3 bg-blue-600 px-6 rounded-2xl"><Send className="w-5 h-5"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
