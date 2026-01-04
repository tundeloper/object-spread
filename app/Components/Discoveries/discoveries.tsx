"use client";

import { useState } from "react";
// import Card, { CardProps } from "./Card";
import SkeletonCard from "./Skeleton";
import { cards } from "./data";
import Card from "./Card";
const tabs = ["General", "Articles", "Journals", "Thesis", "Reports", "Chapters"];

export default function Discoveries() {
  const [activeTab, setActiveTab] = useState("General");
  const [loading, setLoading] = useState(false);

  const filteredCards =
    activeTab === "General"
      ? cards
      : cards.filter((c) => c.tag === activeTab.slice(0, -1));

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setLoading(true);

    // fake loading delay for UX
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover What Researchers Are Creating
        </h2>
        <p className="mt-4 text-gray-600">
          Researchers contribute to a growing library of ideas, research papers,
          insights, and experiments that push boundaries and spark innovation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredCards.map((card) => <Card key={card.title} {...card} />)}
      </div>
    </section>
  );
}
