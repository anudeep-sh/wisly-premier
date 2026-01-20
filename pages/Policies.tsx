
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Book, 
  AlertTriangle, 
  FileText, 
  Smartphone, 
  Users, 
  Lock, 
  RefreshCcw, 
  Scale,
  ChevronRight
} from 'lucide-react';

const Policies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'safety' | 'privacy' | 'refund' | 'terms'>('safety');
  const location = useLocation();

  // Basic deep linking logic if needed in the future
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab') as any;
    if (['safety', 'privacy', 'refund', 'terms'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const tabs = [
    { id: 'safety', label: 'Campus Safety', icon: Shield },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'refund', label: 'Refund Policy', icon: RefreshCcw },
    { id: 'terms', label: 'Terms & Conditions', icon: Scale },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">WISLY Legal & Safety Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ensuring a transparent, secure, and disciplined environment for WISLY Private Limited's 3,000+ students.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar space-x-2 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-t-xl'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'safety' && (
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Smartphone className="w-8 h-8 mr-4 text-blue-600" />
                Digital & Cyber Safety
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                In the digital age, WISLY maintains the strictest cyber protocols in India. Our "Cyber Guard" system utilizes AI to monitor on-campus network traffic for any signs of predatory behavior or cyberbullying.
              </p>
              <ul className="space-y-4">
                {['Unauthorized recording of faculty or peers is strictly prohibited.', 
                  'Sharing of non-educational content via school Wi-Fi leads to immediate suspension.', 
                  'Digital footprint audits are conducted for school-issued devices.'].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Users className="w-8 h-8 mr-4 text-blue-600" />
                Anti-Ragging Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Ragging is a criminal offense. WISLY Private Limited adheres to the Supreme Court of India guidelines. Our campus is a 100% ragging-free zone.
              </p>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <p className="text-red-700 font-medium italic text-sm">
                  "Any student found guilty of ragging will be summarily expelled and reported to the local law enforcement authorities without exception."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Lock className="w-8 h-8 mr-4 text-blue-600" />
              Privacy Policy
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p>Last Updated: October 2024</p>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h3>
                <p>We collect personal identifiers including student name, date of birth, guardian details, Aadhaar number (optional), and academic history. We also collect digital data like login times and classroom interactions.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Data</h3>
                <p>Data is used exclusively for educational progress tracking, attendance monitoring, and automated communication with parents via WhatsApp and SMS.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h3>
                <p>All student information is stored on secure, encrypted Indian servers. WISLY Private Limited employs bank-grade 256-bit encryption for all database transactions.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Sharing</h3>
                <p>We do not sell student data. Information is only shared with authorized educational boards or in compliance with Indian legal requirements.</p>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <RefreshCcw className="w-8 h-8 mr-4 text-blue-600" />
              Refund & Cancellation
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">Technical Double-Payments</h4>
                <p className="text-blue-800 text-sm">In case of a technical glitch where a payment is deducted twice, the surplus amount will be refunded to the original payment method within 7-10 working days after verification.</p>
              </div>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Admission Fees</h3>
                <p>Admission fees are non-refundable once the enrollment process is completed and the student has been allocated a roll number.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Tuition & Term Fees</h3>
                <p>Tuition fees paid for a specific term are generally non-refundable. However, in extreme cases of medical emergency or relocation, a pro-rated credit may be applied to the next academic session at the management's discretion.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Transport & Bus Fees</h3>
                <p>Bus fees are charged on a quarterly basis and are non-refundable once the quarter has commenced.</p>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Scale className="w-8 h-8 mr-4 text-blue-600" />
              Terms & Conditions
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Attendance Requirement</h3>
                <p>A minimum of 75% attendance is mandatory for a student to be eligible to appear for the final examinations, as per CBSE/State Board guidelines.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Disciplinary Code</h3>
                <p>Students must adhere to the WISLY Code of Honor. Habitual late-coming, usage of banned substances, or damage to school property will result in disciplinary action or expulsion.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Bus Transport Liability</h3>
                <p>While we maintain the highest safety standards, WISLY Private Limited is not liable for delays caused by traffic, weather conditions, or unforeseen vehicle breakdowns beyond our control.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h3>
                <p>All curriculum material, recorded lectures, and software provided by WISLY are the intellectual property of WISLY Private Limited and cannot be shared or reproduced.</p>
              </section>
            </div>
          </div>
        )}

        <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 pointer-events-none"></div>
          <AlertTriangle className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Questions regarding our policies?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our legal and administrative team is ready to clarify any doubts you may have regarding these guidelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/safety" className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">Safety Portal</Link>
            <a href="mailto:legal@wisly.com" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">Contact Legal Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
