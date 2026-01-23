
import React, { useState } from 'react';
import { ShieldAlert, Send, CheckCircle, AlertCircle, Loader2, Info, Lock, EyeOff, ShieldCheck, HeartPulse } from 'lucide-react';

const SafetyReporting: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState('other');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to the secure safety server
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl w-full bg-white rounded-[4rem] p-16 shadow-2xl shadow-gray-200/50 text-center animate-in zoom-in fade-in duration-700">
          <div className="w-24 h-24 bg-green-100 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-50">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Report Secured.</h1>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Your safety concern has been encrypted and sent directly to the WISLY Disciplinary Committee. We will investigate and act within 2 hours. Your bravery helps keep our campus safe.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => setSubmitted(false)}
              className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-gray-900 transition-all shadow-2xl shadow-blue-100"
            >
              Back to Portal
            </button>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ref ID: WIS-SAFE-29931</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-10">
            <div className="inline-flex items-center space-x-3 bg-red-50 text-red-700 px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest mb-4 border border-red-100">
              <ShieldAlert className="w-5 h-5" />
              <span>Campus Safety Portal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              Safety is our <br/><span className="text-blue-600">Zero Protocol.</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
              At WISLY, we foster an environment of radical kindness and absolute safety. If you witness bullying, infrastructure failures, or cyber threats, use this portal.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: EyeOff, 
                  title: "Anonymity Guaranteed", 
                  desc: "Your identity is hidden from all faculty members and only accessible to the Safety Board.",
                  color: "bg-blue-600"
                },
                { 
                  icon: Lock, 
                  title: "End-to-End Encrypted", 
                  desc: "Every report is protected by industry-standard encryption for maximum security.",
                  color: "bg-indigo-600"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Rapid Response", 
                  desc: "Our safety response team is notified instantly and acts on critical reports in real-time.",
                  color: "bg-emerald-600"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 p-8 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 group hover:border-blue-200 transition-all">
                  <div className={`${item.color} p-4 rounded-2xl shadow-lg shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
              <HeartPulse className="absolute -right-10 -bottom-10 w-40 h-40 text-blue-600 opacity-20" />
              <h3 className="text-xl font-black mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-blue-400" />
                Anti-Ragging Squad
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed text-sm">
                Our specialized Anti-Ragging Squad conducts surprise patrols across the Hyderabad campus. We are committed to a 100% ragging-free zone.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-10">File a Report.</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Type of Incident</label>
                  <select 
                    className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 transition-all appearance-none"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <option value="bullying">Bullying or Harassment</option>
                    <option value="infrastructure">Campus Safety Hazard</option>
                    <option value="cyber">Cyber Security Threat</option>
                    <option value="transport">Transport Incident</option>
                    <option value="other">General Concern</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Urgency Level</label>
                  <select className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 transition-all appearance-none">
                    <option>Standard</option>
                    <option className="text-orange-600 font-bold">Important</option>
                    <option className="text-red-600 font-bold underline">Urgent / Crisis</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Incident Details</label>
                <textarea 
                  rows={6}
                  required
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold text-gray-700 transition-all resize-none"
                  placeholder="Describe what happened, when, and where. Please provide as much detail as possible..."
                ></textarea>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start space-x-4">
                <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                  <Info className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">
                  NOTE: By submitting this report, you confirm the details are true to your knowledge. False reporting is subject to the school's disciplinary policy.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-red-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-red-200 group active:scale-95"
              >
                {loading ? (
                  <Loader2 className="w-8 h-8 animate-spin" />
                ) : (
                  <>
                    <span>Submit Urgent Safety Report</span>
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyReporting;
