"use client";
import Image from "next/image";
import objectSpred from '@/app/assets/object spread.png'
import logoImg from '@/app/assets/logo.png'
import { useEffect, useRef, } from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const DOT_COUNT = 800;
    const DOT_SIZE = 1.41;

    for (let i = 0; i < DOT_COUNT; i++) {
      const dot = document.createElement("span");

      dot.style.position = "absolute";
      dot.style.width = `${DOT_SIZE}px`;
      dot.style.height = `${DOT_SIZE}px`;
      dot.style.backgroundColor = "#FFFFFF";
      dot.style.borderRadius = "100%";

      dot.style.left = `${
        Math.random() * (container.clientWidth - DOT_SIZE)
      }px`;
      dot.style.top = `${
        Math.random() * (container.clientHeight - DOT_SIZE)
      }px`;

      dot.style.opacity = `${Math.random() * 0.6 + 0.2}`; // subtle variation

      container.appendChild(dot);
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#05051B]">
  
      {/* Header/Navigation */}
      <header className="">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={objectSpred} alt="Object Spread Logo"   />
            {/* <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-white text-xl font-semibold">ObjectSpread</span> */}
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="relative">
            {/* Publications Card - Left Side */}
            {/* <div className="hidden lg:block absolute left-0 top-20 w-64 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <h3 className="text-white font-semibold mb-3 text-lg">Publications</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Recent Research Papers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Academic Journals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Case Studies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  White Papers
                </li>
              </ul>
            </div> */}

            {/* Sticky Note - Right Side */}
            {/* <div className="hidden lg:block absolute right-0 top-20 w-64 bg-yellow-300 rounded-sm p-6 shadow-lg transform rotate-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-16 h-4 bg-yellow-400/50"></div>
              </div>
              <div className="text-slate-800 space-y-1" style={{fontFamily: 'cursive'}}>
                <p className="text-base">• Famous Journals</p>
                <p className="text-base">• Exclusive</p>
                <p className="text-base">• Intellectuals</p>
                <p className="text-base">• Researchers</p>
                <p className="text-base">• Scholars</p>
                <p className="text-base">• Fun etc.</p>
              </div>
            </div> */}

            {/* Center Content */}
            <div className="flex flex-col items-center text-center lg:px-32">
              {/* Logo Icon */}
              <div className="mb-8">
                <div className="w-20 h-20 flex items-center justify-center shadow-lg">
                  <Image src={logoImg} alt="Logo" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-[63px] sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#AB6AFF] via-[#AB6AFF] to-[#E196FB] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] mb-6 leading-tight">
                Empowering Independent Researchers
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 color max-w-3xl mb-8 leading-relaxed">
                ObjectSpread is a community for curious minds, where independent researchers, students, and thinkers come together to explore ideas, publish papers, and mentor the next generation.
              </p>

              {/* CTA Button */}
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 text-lg font-medium">
                Join the Community
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Publications Card */}
              <div className="lg:hidden mt-12 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                <h3 className="text-white font-semibold mb-3 text-lg">Publications</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Recent Research Papers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Academic Journals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Case Studies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    White Papers
                  </li>
                </ul>
              </div>

            {/* Mobile Sticky Note */}
            <div className="lg:hidden mt-6 bg-yellow-300 rounded-sm p-6 shadow-lg">
              <div className="text-slate-800 space-y-1" style={{fontFamily: 'cursive'}}>
                <p className="text-base">• Famous Journals</p>
                <p className="text-base">• Exclusive</p>
                <p className="text-base">• Intellectuals</p>
                <p className="text-base">• Researchers</p>
                <p className="text-base">• Scholars</p>
                <p className="text-base">• Fun etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Lightbulb Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
              </div>
            </div>

            <p className="text-purple-600 font-medium mb-4 text-sm sm:text-base uppercase tracking-wide">
              A new way to explore knowledge
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We&apos;re redefining what research looks like
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              collaborative, open, and accessible for everyone with curiosity and drive. You{' '}
              <span className="text-blue-400 font-medium">don&apos;t need titles</span> or institutions. 
              Just passion, commitment, and the right community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
