import React, { useState } from 'react';
import { Mail, HelpCircle, Calendar } from 'lucide-react';

const ChangeEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Handle email change logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Panel - Desktop Only */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <span className="text-white text-2xl font-bold">zabira</span>
          </div>

          <div className="flex items-center justify-center flex-1">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    $
                  </div>
                  <div className="absolute -top-4 right-4 w-10 h-10 bg-blue-400 rounded-full shadow-lg"></div>
                  <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gray-800 rounded-full mb-4"></div>
                          <div className="w-24 h-16 bg-gray-800 rounded-t-full mt-2"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        ₿
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-4xl font-bold mb-3">Trade Cryptocurrencies</h2>
            <p className="text-blue-200 text-lg">Easy way to buy, sell, convert and store cryptocurrencies</p>
            <div className="flex gap-2 mt-6">
              <div className="w-12 h-1 bg-white rounded"></div>
              <div className="w-12 h-1 bg-blue-600 rounded"></div>
              <div className="w-12 h-1 bg-blue-600 rounded"></div>
              <div className="w-12 h-1 bg-blue-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col min-h-screen lg:min-h-0">
        {/* Header */}
        <header className="bg-white lg:bg-transparent p-4 lg:p-8 flex items-center justify-between border-b lg:border-0">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded"></div>
            </div>
            <span className="text-xl font-bold">zabira</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Check Rates</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5" />
              <span className="hidden sm:inline lg:hidden xl:inline">Get Help</span>
              <span className="hidden lg:inline xl:hidden">Help</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-start lg:items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md lg:max-w-lg bg-white lg:bg-white rounded-none lg:rounded-2xl lg:shadow-lg p-6 lg:p-12">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Change email</h1>
            <p className="text-gray-600 mb-8">
              Enter the email address where you would like to receive the verification code
            </p>

            <div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Change Email
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">NDPR Compliant</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 lg:p-8 bg-white lg:bg-transparent border-t lg:border-0">
          <div className="flex items-center justify-between text-sm text-gray-600 max-w-7xl mx-auto">
            <span>© Zabira. 2026</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors hidden lg:inline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors hidden lg:inline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors lg:hidden">
                Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors lg:hidden">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChangeEmail;