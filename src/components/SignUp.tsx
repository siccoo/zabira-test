/* eslint-disable react-hooks/purity */
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignUp = () => {
    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    console.log("Sign up:", { email, password, referralCode });
  };

  return (
    <div className="min-h-screen font-geist flex flex-col lg:flex-row p-6 lg:p-6">
      {/* Left Panel - Desktop Only */}
      <div className="hidden lg:flex lg:w-[300px] rounded-[16px] bg-gradient-to-b from-[#1e3a8a] to-black text-white p-4 flex-col justify-between relative overflow-hidden">
        {/* Crypto Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/graphic_element.png')`,
            }}
          >
            {[""].map((char, i) => (
              <span
                key={i}
                className="absolute text-blue-300 text-xl font-bold opacity-30"
                style={{
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 10}%`,
                  transform: `rotate(${Math.random() * 160}deg)`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <img src="/zabira-logo.png" alt="logo" width={115} height={24} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-geist font-bold leading-tight">
            Easily Buy & Sell
            <br />
            Cryptocurrencies,
            <br />
            Giftcards & Pay Bills
          </h1>
          <p className="text-[#D1D5DB] font-medium text-lg">
            Manage your assets and portfolio easily!
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 relative z-10">
          <div className="w-8 h-1 bg-white rounded-full"></div>
          <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 lg:hidden">
            <img src="/z-logo.png" alt="logo" width={100} height={20} />
          </div>
          <div className="flex ml-auto">
            <div className="md:flex w-fit rounded-full bg-primary-04 border border-primary-05 overflow-hidden ng-tns-c173-0">
              <a
                href="/"
                className="text-primary-base flex items-center py-2 px-3 cursor-pointer hover:bg-primary-05 border-r transition-colors ng-tns-c173-0"
                tabIndex={0}
              >
                <img
                  src="assets/images/icons/calculator2.svg"
                  alt="rates"
                  className="w-4 h-4 mr-1.5"
                />
                Check Rates
              </a>
              <a
                href="/"
                className="text-primary-base flex items-center py-2 px-3 cursor-pointer hover:bg-primary-05 transition-colors border-primary-05 ng-tns-c173-0"
              >
                <img
                  src="assets/images/icons/headphones.svg"
                  alt="headphones"
                  className="w-4 h-4 mr-1.5"
                />{" "}
                Help
              </a>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-xl p-8">
            <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
                Create an account in 2 minutes!
              </h2>

              {/* Promo Banner */}
              <div className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] rounded-xl p-4 mb-6 flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 flex-shrink-0">
                  <div className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    LGBTQ
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg">
                    SELL & GAIN up to ₦50 on every
                  </div>
                  <div className="font-semibold">$ Crypto Trade</div>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-4 mb-4 w-full p-3 border border-gray-300 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-[0px] flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    className="w-full pl-8 pr-22 outline-none transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4 w-full p-3 border border-gray-300 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-[0px] flex items-center pointer-events-none">
                    <img src="/pass-lock.png" alt="password" width={15} height={15} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-8 pr-22 outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Referral Code Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Code (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    placeholder="Enter referral code"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    By clicking 'Sign Up', I agree to Zabira's{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleSignUp}
                className="w-full py-3 bg-gray-200 text-gray-400 rounded-lg font-semibold mb-4 hover:bg-gray-300 transition"
              >
                Sign Up
              </button>

              {/* Social Sign In */}
              <div className="text-center mb-4">
                <span className="text-gray-500 text-sm">Or continue with</span>
              </div>

              <div className="flex gap-3 mb-6">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="font-medium hidden sm:inline">Google</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="font-medium hidden sm:inline">Apple</span>
                </button>
              </div>
            </div>
            <div>
              {/* Login Link */}
              <div className="text-center mb-4">
                <span className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Login
                  </a>
                </span>
              </div>

              {/* NDPR Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>NDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-sm text-gray-500 flex justify-center gap-6 flex-wrap">
          <span>© Zabira. 2026</span>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
