
import React, { useState } from 'react';
import { User } from '../types';
import { Mail, Lock, User as UserIcon, LogIn, UserPlus, Phone } from 'lucide-react';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    grade: 'Grade 10',
    rollNumber: '',
    phoneNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication and detailed student creation
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name || 'Student User',
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      rollNumber: formData.rollNumber || `E-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      grade: formData.grade,
      isLoggedIn: true
    };
    onLogin(user);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block relative bg-blue-600">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-40" 
            alt="auth"
          />
          <div className="relative z-10 h-full p-12 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-6">Welcome to egurukl</h2>
            <p className="text-lg opacity-90 mb-8">Access your personalized learning dashboard, manage your details, and join classrooms instantly.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-md">
                <div className="bg-white/20 p-2 rounded-lg">✓</div>
                <span>Personalized Learning Path</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-md">
                <div className="bg-white/20 p-2 rounded-lg">✓</div>
                <span>Secure Student Records</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-gray-900">{isLogin ? 'Sign In' : 'Join egurukl'}</h1>
            <p className="text-gray-500 mt-2">Empowering Students of MTST SEVA Technologies Pvt. Ltd.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Student Full Name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Parent/Student Phone Number"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Roll No. (Optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  />
                </div>
              </>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-200"
            >
              {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
              <span>{isLogin ? 'Login' : 'Complete Registration'}</span>
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "New student?" : "Already registered?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-bold text-blue-600 hover:underline"
            >
              {isLogin ? 'Create Student Profile' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
