/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const storedUser = localStorage.getItem("zabira_user");
    if (!storedUser) {
      setError("No account found. Please sign up.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (email !== user.email || password !== user.password) {
      setError("Invalid email or password");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Login successful");
      navigate("/dashboard");
    }, 800);
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
              <h2 className="text-2xl font-geist font-bold mb-3 text-center text-[#1A1A1A] lg:text-left">
                Login your account!
              </h2>

              {/* Promo Banner */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPromo * 100}%)`,
                  }}
                >
                  {promoImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`promo-${index}`}
                      className="w-full flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

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

              {/* Password Input */}
              <div className="mb-1 w-full p-3 border border-gray-300 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-[0px] flex items-center pointer-events-none">
                    <img
                      src="/pass-lock.png"
                      alt="password"
                      width={15}
                      height={15}
                    />
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
              {error && (
                <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
              )}
              <div className="my-1">
                <Link
                  to="/change-email"
                  className="text-blue-600 hover:underline font-medium text-xs"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleLogin}
                className={`w-full py-3 rounded-lg font-semibold mb-4 transition
${
  isSubmitting
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : "bg-[#1a1a1a] text-white"
}
  `}
              >
                {isSubmitting ? "Logging in..." : "Login"}
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
              <div className="text-center mt-6 mb-6">
                <span className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <a
                    href="/"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign Up
                  </a>
                </span>
              </div>

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

export default Login;
