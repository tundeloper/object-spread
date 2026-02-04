"use client"
import { useEffect, useRef } from 'react'
import IconButton from './customs/icon-button';
import Image from 'next/image';
import logoImg from "@/app/assets/logo.png";


export default function Hero() {
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
    <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-20 lg:py-32 relative z-10">
          <div className="relative">
            {/* Center Content */}
            <div className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-16">
              {/* Logo Icon */}
              <div className="mb-8">
                <div className="w-20 h-20 flex items-center justify-center shadow-lg">
                  <Image src={logoImg} alt="Logo" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl sm:font-semibold bg-linear-to-r from-[#AB6AFF] via-[#AB6AFF] to-[#dca3f0] max-w-3xl bg-clip-text text-transparent [-webkit-text-stroke:1px_black] mb-6 leading-tight">
                Empowering Independent Researchers
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 color max-w-3xl mb-8 leading-relaxed">
                ObjectSpread is a community for curious minds, where independent
                researchers, students, and thinkers come together to explore
                ideas, publish papers, and mentor the next generation.
              </p>

              {/* CTA Button */}
              <IconButton title="Join the Community" />
            </div>
          </div>
        </div>
      </section>
  )
}
