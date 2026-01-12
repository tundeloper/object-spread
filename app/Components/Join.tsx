"use client";

import Image from "next/image";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function JoinSection() {
  const items = [
    {
      img: "/images/feature-1.jpg",
      title: "Join the Community",
      desc: "Start your journey as an independent researcher.",
      cta: "Join a Cohort",
    },
    {
      img: "/images/feature-2.png",
      title: "Become a Mentor",
      desc: "Share your experience with the next generation.",
      cta: "Become a Mentor",
    },
    {
      img: "/images/feature-3.jpg",
      title: "Partner with Us",
      desc: "Start your journey as an independent researcher.",
      cta: "Contact Our Team",
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center text-center px-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-[#05051B] tracking-tight">
        Join the Movement
      </h2>
      <p className="mt-2 max-w-xl text-[#353535] leading-relaxed">
        Whether you&apos;re a learner, mentor, or partner. There&apos;s a place
        for you at ObjectSpread.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-7xl w-full">
        {items.map((item, i) => (
          <Card
            key={i}
            shadow="none"
            radius="lg"
            className="mx-auto max-w-sm rounded-t-lg rounded-b-sm  border border-transparent hover:border-gray-200 transition"
          >
            <CardBody className="p-0">
              <div className="w-full rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-[#05051B] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-[#353535] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </CardBody>
            <CardFooter className="pt-1 text-left px-0 pb-0">
              <a className="text-purple-600 font-medium text-sm hover:underline inline-flex items-center gap-1 cursor-pointer">
                {item.cta} <ArrowRight className="text-sm w-4 h-auto"/>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
