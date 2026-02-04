"use client";
import Image from "next/image";
import objectSpred from "@/app/assets/object spread.png";
import { useEffect, useRef } from "react";
import rect from "@/app/assets/Rectangle shadow.svg";
import IconButton from "./Components/customs/icon-button";
import Stats from "./Components/stats";
import Features from "./Components/feature";
import sportlight from "@/app/assets/spotlight.jpg";
import Discoveries from "./Components/Discoveries/discoveries";
import ResearchCTA from "./Components/ReserchCTA";
import Footer from "./Components/footer";
import JoinSection from "./Components/Join";
import Hero from "./Components/Hero";

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
    <div ref={containerRef} className="relative min-h-screen bg-[#05051B]">
      <Image
        src={rect}
        alt="Background Dots"
        className="hidden sm:block absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Header/Navigation */}
      <header className="">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={objectSpred} alt="Object Spread Logo" />
            {/* <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-white text-xl font-semibold">ObjectSpread</span> */}
          </div>
          <IconButton title="Get in Touch">Get in Touch</IconButton>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero />
      
      <div className="hidden relative max-w-8xl mx-auto -mb-45 h-100 w-full lg:block">
        <Image
          src="/publications.svg"
          height={200}
          width={200}
          alt="pattern"
          className="absolute bottom-35 left-7 w-auto h-auto z-10 pointer-events-none"
        />
        <Image
          src="/research.svg"
          height={200}
          width={200}
          alt="pattern"
          className="absolute bottom-10 right-7 w-auto h-auto z-20 pointer-events-none"
        />
      </div>

      {/* Content Section */}
      <section className="bg-[#05051B] relative z-10">
        <div
          className="h-80 bg-cover bg-white pt-2 lg:pt-8 rounded-t-[20px] lg:rounded-t-[60px] bg-top bg-no-repeat"
          style={{ backgroundImage: "url(/Pattern-top.svg)" }}
        >
          {/* <Image src={pattern} alt="pattern"  className="fixed inset-0 w-full h-full z-0 pointer-events-none" /> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              {/* Lightbulb Icon */}
              <div className="flex gap-1 mt-0 mb-4 bg-linear-to-b from-[#E6E6E6] via-[#FFFFFF] to-[#E6E6E6] max-w-full sm:max-w-fit items-center justify-center py-1.5 px-3 rounded-full">
                <div className="w-4 h-4  bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <p className="text-[#353535] font-medium text-sm sm:text-base">
                  A new way to explore knowledge
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-full lg:max-w-200.75 text-[#05051B] mb-6 leading-tight">
                We&apos;re redefining what research looks like collaborative,
                open, and accessible to everyone with curiosity and drive.{" "}
                <span className="text-[#828282]">
                  You don&apos;t need titles or institutions.Just passion,
                  commitment, and the right community.
                </span>
              </h2>
            </div>
          </div>
          <Stats />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              {/* Lightbulb Icon */}
              <div className="flex gap-1 mt-8 mb-4 bg-linear-to-b from-[#E6E6E6] via-[#FFFFFF] to-[#E6E6E6] max-w-full sm:max-w-xs items-center justify-center py-1.5 px-3 rounded-full lg:max-w-fit">
                <div className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <p className="text-[#353535] font-medium text-sm sm:text-base">
                  What we do
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-full lg:max-w-2xl font-bold text-[#05051B] leading-tight">
                  Building the Future of Independent Research
                </h2>

                <p className="max-w-full lg:max-w-md text-[#353535] text-sm sm:text-base">
                  ObjectSpread is a community-driven platform designed to help
                  curious minds become confident researchers. We bring people
                  together to learn, collaborate, and turn ideas into
                  world-class research.
                </p>
              </div>
            </div>
          </div>
          <Features />
          <div className="bg-[#05051B] max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 rounded-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-6">
              Research Spotlight{" "}
              <Image
                src="/wi_stars.svg"
                width={100}
                height={100}
                alt="wi-star"
                className="inline-block w-12 h-auto ml-2 mb-1"
              />
            </h1>
            <div className="flex relative flex-col lg:flex-row justify-between gap-4 lg:gap-6">
                <Image
                  src={'/rectangle-shadow.svg'}
                  width={400}
                  height={300}
                  alt="spotlight"
                  className="absolute -top-16 left-0 lg:top-0 z-10 w-full lg:w-1/2 rounded-lg object-cover"
                />
                <Image
                  src={'/rectangle-shadow.svg'}
                  width={400}
                  height={300}
                  alt="spotlight"
                  className="absolute top-[-.1rem] lg:top-40 left-0 z-10 w-full lg:w-1/2 rounded-lg object-cover"
                />
              {/* <div className="relative w-full lg:w-1/2"> */}
                <Image
                  src={sportlight}
                  alt="spotlight"
                  className="w-full lg:w-1/2 rounded-lg object-cover"
                />
              {/* </div> */}
              <div className="w-full lg:w-1/2">
                <h1 className="text-white text-xl sm:text-2xl font-medium">
                  Pathways to sustainable agriculture in Africa: The role of
                  natural resources, renewable energy, and technological
                  innovation
                </h1>
                <p className="text-gray-400 my-3 ">Nov. 2025</p>
                <div className="flex items-center gap-2 mb-3 border-b-2 border-dotted border-[#4E4E77] pb-3   ">
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <Image
                      src={"/images/user.jpg"}
                      alt={"user"}
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="text-sm text-white">
                    Nazir Muhammad Abdullahi
                  </span>
                </div>
                <p className="text-white mb-5">
                  Agriculture is a significant contributor to greenhouse gas
                  emissions (GHGEs) in Africa, a region highly vulnerable to the
                  impacts of climate change. Rising food demand and expanding
                  cultivation are intensifying the challenge of balancing
                  productivity with environmental sustainability. Although
                  previous studies have examined aggregate CO₂ emissions in
                  resource-dependent economies, limited attention has been given
                  to agriculture-specific emissions and their interactions with
                  renewable energy use, natural resource dependency, and
                  technological innovation. This study addresses this gap by
                  analyzing the determinants of agricultural CO₂ (ACO₂)
                  emissions in 41 African ..
                </p>
                <IconButton title="Read more" />
              </div>
            </div>
          </div>
          <Discoveries />
          <JoinSection />
          <ResearchCTA />
          <Footer />
        </div>
      </section>
    </div>
  );
}
