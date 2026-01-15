/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from "react";
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

const ChangeEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const [currentPromo, setCurrentPromo] = useState(0);

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

//   const handleSubmit = () => {
//     console.log("Email submitted:", email);
//     //     // Handle email change logic here
//   };

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
              <h1 className="text-2xl font-geist font-bold mb-3 text-center text-[#1A1A1A] lg:text-left">
                Change email
              </h1>
              <p className="text-[16px] text-gray-600 mb-8">
                Enter the email address where you would like to receive the
                verification code
              </p>

              <div>
                {/* Email Input */}
              <div className="mb-4 w-full p-3 border border-gray-300 rounded-lg">
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

                <a
                  href="/check-email"
                  className=" bg-[#1a1a1a] font-geist text-white px-[171px] py-4 pt-3 rounded-[6px] font-semibold transition-colors"
                >
                  Change Email
                </a>
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

export default ChangeEmail;
