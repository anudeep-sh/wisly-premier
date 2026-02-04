
import React, { useState } from 'react';
import { ShieldAlert, Send, CheckCircle, AlertCircle, Loader2, Info, Lock, EyeOff, ShieldCheck, HeartPulse, ArrowLeft } from 'lucide-react';

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
        {submitted ? (
          <div className="max-w-3xl mx-auto bg-white p-20 rounded-[4rem] shadow-2xl border border-gray-100 text-center animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">Report Received.</h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
              Your safety report has been logged securely. Our safety officer will review the incident immediately. Confidentiality is our priority.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-12 py-5 bg-gray-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all flex items-center mx-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              File Another Report
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="inline-flex items-center space-x-3 bg-red-50 text-red-700 px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest mb-4 border border-red-100">
                <ShieldAlert className="w-5 h-5" />
                <span>WISLY Safety Portal</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight uppercase">Safe Campus <br/><span className="text-blue-600">Protocol.</span></h1>
              <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
                WISLY Academy maintains a strict Zero-Tolerance policy against bullying and harassment. This portal is monitored by our administrative security team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-700">100% Confidential Submission</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-700">Immediate Administrative Response</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-10">Submit Confidential Report.</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Incident Type</label>
                    <select required className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 appearance-none">
                       <option value="">Select Category...</option>
                       <option>Bullying / Harassment</option>
                       <option>Infrastructure Hazard</option>
                       <option>Cyber Security Threat</option>
                       <option>Transport Issue</option>
                       <option>General Safety Concern</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Date of Incident</label>
                    <input required type="date" className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Description of Incident</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 transition-all resize-none"
                    placeholder="Provide details of the event, location, and individuals involved (if comfortable)..."
                  ></textarea>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 flex items-start space-x-4">
                  <Info className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-wider">
                    By submitting this report, you confirm that the information provided is accurate to the best of your knowledge. WISLY takes all reports seriously.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-red-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-3 shadow-2xl active:scale-95 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin w-8 h-8"/> : <><Send className="w-6 h-6" /> <span>File Urgent Report</span></>}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyReporting;
