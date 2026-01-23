
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Shield, 
  Smartphone, 
  Users, 
  Lock, 
  RefreshCcw, 
  Scale,
  ChevronRight,
  AlertTriangle,
  FileText,
  Gavel,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const Policies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'safety' | 'privacy' | 'refund' | 'terms'>('safety');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab') as any;
    if (['safety', 'privacy', 'refund', 'terms'].includes(tab)) {
      setActiveTab(tab);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const tabs = [
    { id: 'safety', label: 'Safety Hub', icon: Shield },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'refund', label: 'Refund Policy', icon: RefreshCcw },
    { id: 'terms', label: 'Terms & Conditions', icon: Scale },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-16">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <Gavel className="w-4 h-4 mr-2" />
            Legal & Compliance
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">WISLY Trust <span className="text-blue-600">Center.</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Our commitment to transparency, safety, and excellence is governed by these official guidelines and legal frameworks.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-8 py-5 text-sm font-black border-b-[3px] transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600 bg-blue-50/30' 
                    : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-t-[2rem]'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-300'}`} />
                <span className="uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {activeTab === 'safety' && (
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
              <div className="flex items-center space-x-6 mb-10">
                <div className="bg-blue-600 p-4 rounded-[1.5rem] shadow-lg shadow-blue-200">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Digital Guardian Policy</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-lg mb-8 font-medium">
                WISLY employs a comprehensive "Digital Guardian" framework to ensure the online safety of all students within our network.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Network Monitoring", desc: "Real-time AI-driven monitoring of on-campus internet traffic to block harmful content." },
                  { title: "Data Protection", desc: "Strict adherence to the Digital Personal Data Protection (DPDP) Act, 2023." },
                  { title: "Whistleblower App", desc: "Anonymous reporting channel for cyberbullying or online harassment." },
                  { title: "Device Security", desc: "Mandatory antivirus and firewall protocols for all school-issued hardware." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-black text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Users className="w-40 h-40" />
              </div>
              <div className="flex items-center space-x-6 mb-10">
                <div className="bg-red-600 p-4 rounded-[1.5rem] shadow-lg shadow-red-200">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Anti-Bullying & Ragging</h2>
              </div>
              <div className="prose prose-lg prose-slate max-w-none text-gray-500 font-medium leading-relaxed mb-10">
                Ragging is a criminal offense as per the Honorable Supreme Court of India guidelines. WISLY maintains a Zero-Tolerance policy.
              </div>
              <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 flex items-start space-x-6">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-red-900 font-bold leading-relaxed">
                  "Any student found guilty of bullying, ragging, or physical harassment will be subject to immediate suspension, expulsion, and if necessary, legal prosecution by Hyderabad police authorities."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-indigo-600 p-4 rounded-[1.5rem] shadow-lg shadow-indigo-200">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Privacy & Data Governance</h2>
            </div>
            <div className="space-y-12">
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black">1</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Nature of Data Collection</h3>
                <p className="text-gray-500 font-medium leading-relaxed">NEOFIN NEX India Private Limited collect student demographic data, academic performance metrics, attendance logs, and guardian contact details for the sole purpose of educational administration.</p>
              </section>
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black">2</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Data Sovereignty</h3>
                <p className="text-gray-500 font-medium leading-relaxed">In compliance with Indian data localization laws, all sensitive student data is stored on secure servers located within the territory of India.</p>
              </section>
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black">3</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Encryption Standards</h3>
                <p className="text-gray-500 font-medium leading-relaxed">All database transactions and cloud uploads are protected using AES-256 bit encryption and multi-factor authentication for administrative access.</p>
              </section>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 italic text-gray-400 font-medium text-sm">
                * Our privacy practices are reviewed annually by independent security auditors to ensure 100% compliance with evolving digital laws in India.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-emerald-600 p-4 rounded-[1.5rem] shadow-lg shadow-emerald-200">
                <RefreshCcw className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Fee Refund & Cancellation</h2>
            </div>
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-black text-blue-900 mb-4">Duplicate Payments</h4>
                  <p className="text-blue-700 font-medium">Any technical errors resulting in double deduction of fees will be auto-processed for refund within 7-10 working days upon verification.</p>
                </div>
                <div className="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-black text-orange-900 mb-4">Admission Withdrawal</h4>
                  <p className="text-orange-700 font-medium">Refund requests for admission withdrawal must be submitted in writing. Note that registration fees are strictly non-refundable.</p>
                </div>
              </div>
              
              <div className="space-y-6 bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">Standard Refund Schedule</h3>
                <ul className="space-y-4">
                  {[
                    "Before start of academic session: 90% of tuition fee refundable.",
                    "Within 30 days of session start: 50% of tuition fee refundable.",
                    "After 30 days of session start: No refunds applicable.",
                    "Transport and Lab fees are non-refundable once the service is activated."
                  ].map((line, idx) => (
                    <li key={idx} className="flex items-center space-x-4 text-gray-500 font-bold">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-slate-900 p-4 rounded-[1.5rem] shadow-lg shadow-gray-200">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Terms of Enrollment</h2>
            </div>
            <div className="space-y-8 prose prose-lg prose-slate max-w-none text-gray-500 font-medium leading-relaxed">
              <section>
                <h3 className="text-xl font-black text-gray-900 mb-4">1. Academic Obligations</h3>
                <p>By enrolling at NEOFIN NEX India Private Limited, students agree to maintain a minimum of 75% attendance and adhere to the academic code of conduct. Failure to do so may result in debarment from terminal examinations.</p>
              </section>
              <section>
                <h3 className="text-xl font-black text-gray-900 mb-4">2. Intellectual Property</h3>
                <p>All learning materials, software interfaces, and curriculum designs provided by WISLY are the exclusive intellectual property of the institution. Unauthorized redistribution is strictly prohibited.</p>
              </section>
              <section>
                <h3 className="text-xl font-black text-gray-900 mb-4">3. Jurisdictional Courts</h3>
                <p>All legal disputes or matters of litigation shall be subject to the exclusive jurisdiction of the competent courts located in Hyderabad, Telangana, India.</p>
              </section>
              <section>
                <h3 className="text-xl font-black text-gray-900 mb-4">4. Code of Discipline</h3>
                <p>WISLY reserves the right to terminate enrollment for habitual indiscipline, damage to campus property, or behavior that compromises the institutional reputation.</p>
              </section>
            </div>
          </div>
        )}

        <div className="mt-20 p-16 bg-gray-900 rounded-[4rem] text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700"></div>
          <AlertTriangle className="w-16 h-16 text-orange-400 mx-auto mb-8 animate-pulse" />
          <h3 className="text-4xl font-black mb-6 tracking-tight">Need Legal Clarification?</h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Our administrative and legal compliance team is available to discuss any questions regarding our institutional policies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:support@thequickpayme.com" 
              className="px-12 py-5 bg-white text-gray-900 rounded-[2rem] font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center"
            >
              Contact Legal Desk
            </a>
            <button className="px-12 py-5 bg-gray-800 text-gray-400 rounded-[2rem] font-black text-xl hover:bg-gray-700 transition-all active:scale-95">
              Download Full PDF
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default Policies;
