
import React, { useState } from 'react';
import { ShieldAlert, Send, CheckCircle, AlertCircle, Loader2, Info } from 'lucide-react';

const SafetyReporting: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState('other');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Report Received</h1>
        <p className="text-xl text-gray-600 mb-10">
          Your safety is our priority. Our disciplinary and safety committee has been notified and will act within 2 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200"
        >
          Submit Another Concern
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="inline-flex items-center space-x-2 text-red-600 font-bold tracking-widest uppercase text-xs mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Campus Safety Guard</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Anonymous Safety Reporting</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At WISLY Private Limited, we maintain a 100% safe environment. If you witness bullying, harassment, or infrastructure issues, report them here. You can choose to remain anonymous.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="bg-orange-100 p-3 rounded-2xl">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Strict Confidentiality</h4>
                <p className="text-gray-500">Your identity is protected under our whistle-blower policy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Action Focused</h4>
                <p className="text-gray-500">Reports are reviewed by independent safety officers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-2">Type of Issue</label>
              <select 
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-50 outline-none font-medium text-gray-700"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="bullying">Bullying or Harassment</option>
                <option value="infrastructure">Campus Infrastructure/Safety</option>
                <option value="cyber">Cyber Security Concern</option>
                <option value="transport">Bus/Transport Issue</option>
                <option value="other">Other Concerns</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-2">Describe the Incident</label>
              <textarea 
                rows={5}
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-50 outline-none font-medium text-gray-700 resize-none"
                placeholder="What happened? Please provide details like location and time..."
              ></textarea>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-gray-500 italic">
              * By submitting this report, you confirm that the information provided is true to the best of your knowledge.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-red-200"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Urgent Report</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SafetyReporting;
