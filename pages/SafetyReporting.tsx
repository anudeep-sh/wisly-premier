
import React, { useState } from 'react';
import { ShieldAlert, Send, CheckCircle, AlertCircle, Loader2, Info, Lock, EyeOff, ShieldCheck, HeartPulse } from 'lucide-react';

const SafetyReporting: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="inline-flex items-center space-x-3 bg-red-50 text-red-700 px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest mb-4 border border-red-100">
              <ShieldAlert className="w-5 h-5" />
              <span>NeoFin Nex Safety Portal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight uppercase">Safe Campus <br/><span className="text-blue-600">Protocol.</span></h1>
            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
              NeoFin Nex India Private Limited maintains a strict Zero-Tolerance policy against bullying and harassment.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-10">Submit Report.</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Incident Type</label>
                <select className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 appearance-none">
                   <option>Bullying</option>
                   <option>Infrastructure Hazard</option>
                   <option>Cyber Threat</option>
                   <option>General Concern</option>
                </select>
              </div>
              <textarea 
                rows={6}
                required
                className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 transition-all resize-none"
                placeholder="Description..."
              ></textarea>
              <button
                type="submit"
                className="w-full py-6 bg-red-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-3 shadow-2xl active:scale-95"
              >
                {loading ? <Loader2 className="animate-spin w-8 h-8"/> : <span>File Urgent Report</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyReporting;
