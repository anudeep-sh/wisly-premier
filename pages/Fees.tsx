
import React, { useState } from 'react';
import { CreditCard, Receipt, ShieldCheck, CheckCircle2, AlertCircle, Smartphone, Globe, Landmark, IndianRupee, ArrowRight, Loader2 } from 'lucide-react';
import { FeeStructure } from '../types';

const Fees: React.FC = () => {
  const [paymentStep, setPaymentStep] = useState(0); // 0: Details, 1: Gateway, 2: Success
  const [method, setMethod] = useState<'upi' | 'card' | 'net'>('upi');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const fees: FeeStructure[] = [
    { grade: 'Grade 9', tuition: 45000, transport: 12000, lab: 5000, total: 62000 },
    { grade: 'Grade 10', tuition: 45000, transport: 12000, lab: 5000, total: 62000 },
    { grade: 'Grade 11', tuition: 55000, transport: 12000, lab: 8000, total: 75000 },
    { grade: 'Grade 12', tuition: 55000, transport: 12000, lab: 8000, total: 75000 },
  ];

  const handlePayment = () => {
    if (isCustomMode && (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0)) {
      alert("Please enter a valid amount");
      return;
    }
    setPaymentStep(1);
    setTimeout(() => setPaymentStep(2), 3000);
  };

  const currentPayable = isCustomMode ? Number(customAmount) || 0 : 26500;

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6">
            Secure Payments
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Fee Portal.</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Fast, secure, and transparent fee management for your academic journey at WISLY.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table side */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="p-10 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 flex items-center">
                    <Receipt className="w-8 h-8 mr-3 text-blue-600" />
                    Fee Schedule 2024-25
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Active</span>
                  <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">INR (₹)</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-10 py-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Grade</th>
                      <th className="px-10 py-6 text-right text-xs font-black text-gray-400 uppercase tracking-widest">Tuition</th>
                      <th className="px-10 py-6 text-right text-xs font-black text-gray-400 uppercase tracking-widest">Transport</th>
                      <th className="px-10 py-6 text-right text-xs font-black text-gray-400 uppercase tracking-widest">Total Annual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {fees.map((f, i) => (
                      <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                        <td className="px-10 py-8 font-black text-gray-900 text-lg">{f.grade}</td>
                        <td className="px-10 py-8 text-right text-gray-500 font-bold">₹{f.tuition.toLocaleString()}</td>
                        <td className="px-10 py-8 text-right text-gray-500 font-bold">₹{f.transport.toLocaleString()}</td>
                        <td className="px-10 py-8 text-right">
                          <span className="text-xl font-black text-blue-600">₹{f.total.toLocaleString()}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="bg-white/10 p-4 rounded-3xl">
                  <AlertCircle className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Notice on Refunds</h3>
                  <p className="text-blue-200 text-lg leading-relaxed font-medium">
                    Transactions are encrypted with bank-grade security. Refunds are only applicable in case of verified technical double-deductions. Contact support for inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment side */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-10 sticky top-32">
              {paymentStep === 0 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-2xl font-black text-gray-900 mb-8">Checkout.</h3>
                  
                  <div className="flex mb-8 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                    <button 
                      onClick={() => setIsCustomMode(false)}
                      className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${!isCustomMode ? 'bg-white shadow-lg text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      Term Fee
                    </button>
                    <button 
                      onClick={() => setIsCustomMode(true)}
                      className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${isCustomMode ? 'bg-white shadow-lg text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      Other
                    </button>
                  </div>

                  <div className="space-y-6 mb-10">
                    {isCustomMode ? (
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Payment Amount (INR)</label>
                        <div className="relative">
                          <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-500" />
                          <input 
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-black text-2xl text-gray-900"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3">
                        <div className="flex justify-between text-gray-500 font-bold">
                          <span>Tuition (Term 2)</span>
                          <span className="text-gray-900">₹22,500</span>
                        </div>
                        <div className="flex justify-between text-gray-500 font-bold">
                          <span>Bus Fee</span>
                          <span className="text-gray-900">₹4,000</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center py-4 px-2 border-t border-dashed border-gray-200">
                      <span className="text-lg font-bold text-gray-400">Total</span>
                      <span className="text-3xl font-black text-blue-600">₹{currentPayable.toLocaleString()}</span>
                    </div>

                    <div className="space-y-3 mt-8">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Payment Method</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'upi', icon: Smartphone, label: 'UPI' },
                          { id: 'card', icon: CreditCard, label: 'Card' },
                          { id: 'net', icon: Landmark, label: 'Net' }
                        ].map((item) => (
                          <button 
                            key={item.id}
                            onClick={() => setMethod(item.id as any)}
                            className={`py-4 rounded-2xl border-2 flex flex-col items-center transition-all ${method === item.id ? 'border-blue-600 bg-blue-50/50 text-blue-700 shadow-md' : 'border-gray-50 text-gray-400 hover:border-gray-100 hover:text-gray-600'}`}
                          >
                            <item.icon className="w-6 h-6 mb-2" />
                            <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-gray-900 transition-all shadow-2xl shadow-blue-100 flex items-center justify-center group"
                  >
                    <span>Proceed to Pay</span>
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-8 flex items-center justify-center space-x-3 text-xs font-bold text-gray-400 tracking-wider">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    <span className="uppercase">AES-256 Encrypted Payment</span>
                  </div>
                </div>
              )}

              {paymentStep === 1 && (
                <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="relative w-32 h-32 mb-10">
                    <div className="absolute inset-0 border-[6px] border-blue-50 rounded-full"></div>
                    <div className="absolute inset-0 border-[6px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Smartphone className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4 text-center">Verifying Pay.</h3>
                  <p className="text-gray-500 text-center font-medium max-w-xs leading-relaxed">
                    Check your mobile app to authorize the transaction. This window will update automatically.
                  </p>
                </div>
              )}

              {paymentStep === 2 && (
                <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-100">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-4 text-center">Success!</h3>
                  <p className="text-center text-gray-500 font-medium mb-10 leading-relaxed max-w-xs">
                    Transaction of <span className="text-gray-900 font-black">₹{currentPayable.toLocaleString()}</span> was successful. Receipt sent to your email.
                  </p>
                  <div className="w-full space-y-4">
                    <button
                      onClick={() => setPaymentStep(0)}
                      className="w-full py-5 bg-gray-900 text-white rounded-3xl font-black text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
                    >
                      Back to Dashboard
                    </button>
                    <button className="w-full py-5 text-blue-600 font-bold hover:bg-blue-50 rounded-3xl transition-colors">
                      Download Receipt
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
