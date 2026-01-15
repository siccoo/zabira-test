/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const promoImages = [
  "/power-banner1.png",
  "/power-banner2.png",
  "/power-banner3.png",
];

const leftPanelSlides = [
  {
    title: (
      <>
        Easily Buy & Sell
        <br />
        Cryptocurrencies,
        <br />
        Giftcards & Pay Bills
      </>
    ),
    description: "Manage your assets and portfolio easily!",
  },
  {
    title: (
      <>
        Fast & Secure
        <br />
        Crypto Transactions
      </>
    ),
    description: "Top-level security with instant settlements.",
  },
  {
    title: (
      <>
        Pay Bills
        <br />
        Anytime, Anywhere
      </>
    ),
    description: "Electricity, data, airtime & more in seconds.",
  },
  {
    title: (
      <>
        Trusted by
        <br />
        Thousands of Users
      </>
    ),
    description: "Join a fast-growing community across Africa.",
  },
];

const CheckEmail: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [email] = useState<string>("jacob@jones.com");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      inputRefs.current[5]?.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promoImages.length);
    }, 3500); // change slide every 3.5s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % leftPanelSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

        {/* Content Slider */}
        <div className="relative z-10 overflow-hidden h-[140px]">
          <div
            className="transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${currentPromo * 140}px)`,
            }}
          >
            {leftPanelSlides.map((slide, index) => (
              <div key={index} className="h-[140px]">
                <h1 className="text-2xl font-geist font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-[#D1D5DB] font-medium text-lg mt-2">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 relative z-10">
          {leftPanelSlides.map((_, index) => (
            <span
              key={index}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                currentPromo === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
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
            <div className="md:flex w-fit rounded-full bg-primary-04 border border-primary-05 overflow-hidden">
              <p className="text-primary-base flex items-center py-2 px-3 cursor-pointer border-r transition-colors">
                <img
                  src="/check-rates.png"
                  alt="rates"
                  className="w-4 h-4 mr-1.5"
                />
                Check Rates
              </p>
              <p className="text-primary-base flex items-center py-2 px-3 cursor-pointer transition-colors border-primary-05">
                <img
                  src="/help.png"
                  alt="headphones"
                  className="w-4 h-4 mr-1.5"
                />{" "}
                Help
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-xl p-8">
            <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                Check your email
              </h1>
              <p className="text-gray-600 text-sm mb-6">
                Hello Boss, please enter the 6 digit code that was sent to{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 hover:underline"
                >
                  {email}
                </a>
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium">Enter Code</label>
                  <button
                    onClick={() => {
                      // Paste code simulation
                      const dummyCode = "123456";
                      setCode(dummyCode.split(""));
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Paste Code
                  </button>
                </div>

                <div className="flex gap-2 mb-6">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className="w-full aspect-square text-center text-xl font-semibold border-2 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm mb-6">
                  <Link to="/change-email" className="flex items-center rounded-md border border-gray-200 px-1 gap-2 text-gray-700 hover:text-gray-900">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Change Email
                  </Link>
                  <button className="font-medium text-gray-900 hover:text-gray-700">
                    Resend Code
                  </button>
                </div>

                <button className="w-full bg-[#1a1a1a] font-geist text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <img src="/verify.png" alt="verify" className="w-5 h-5" />
                  Verify
                </button>
              </div>
            </div>
            <div>
              <div className="text-center mt-6 mb-6"></div>

              {/* NDPR Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 border border-white bg-white rounded-md w-fit mx-auto p-[3px]">
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
        <div className="p-4 text-center text-sm text-gray-500 flex justify-between gap-6 flex-wrap">
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

export default CheckEmail;
