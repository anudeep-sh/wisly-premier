
import React, { useState } from 'react';
import { User } from '../types';
import { Mail, Lock, User as UserIcon, LogIn, UserPlus, Phone, Star, ShieldCheck } from 'lucide-react';

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
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name || 'Student User',
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      rollNumber: formData.rollNumber || `NFN-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      grade: formData.grade,
      isLoggedIn: true
    };
    onLogin(user);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12 pt-32">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 border border-gray-100">
        <div className="hidden md:block relative bg-blue-600">
          <img 
            src="https://images.unsplash.com/photo-1523240715630-979bb0709a19?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
            alt="students collaborating"
            loading="lazy"
            decoding="async"
          />
          <div className="relative z-10 h-full p-16 flex flex-col justify-center text-white">
            <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">Join <br/> NeoFin Nex.</h2>
            <p className="text-xl opacity-80 mb-12 font-medium leading-relaxed">Access your academic records, track progress, and learn within the NeoFin Nex ecosystem.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-3xl backdrop-blur-xl border border-white/20">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold">NeoFin Nex Academic Roadmap</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-3xl backdrop-blur-xl border border-white/20">
                <div className="bg-white/20 p-2 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold">Secure Academic Identity</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-12 md:p-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">{isLogin ? 'Student Login' : 'Student Registration'}</h1>
            <p className="text-gray-500 mt-2 font-medium">Official Portal: NeoFin Nex India Private Limited</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Student Full Name"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Student Phone Number"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold"
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-gray-700 appearance-none"
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Roll No."
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold"
                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  />
                </div>
              </>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Secure Password"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-blue-100 active:scale-95 mt-4"
            >
              {isLogin ? <LogIn className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
              <span>{isLogin ? 'Login to Academy' : 'Create Student Account'}</span>
            </button>
          </form>

          <div className="mt-10 text-center text-gray-500 font-bold">
            {isLogin ? "New to NeoFin Nex?" : "Already a member?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 hover:underline transition-all"
            >
              {isLogin ? 'Register Now' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
