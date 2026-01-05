export default function Stats() {
  return (
    <section className="w-full max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div
          className="relative rounded-2xl overflow-hidden text-white"
          style={{
            backgroundImage: "url('/images/researcher.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative p-6 h-full flex flex-col justify-end">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="font-semibold mt-1">Researchers Trained</p>
            <p className="text-sm text-white/80 mt-2">
              Individuals who started with curiosity and became confident researchers.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          
          {/* Card 2 */}
          <div className="rounded-2xl p-6 text-white bg-linear-to-br from-purple-400 to-purple-600">
            <div className="text-2xl mb-2">🎓</div>
            <h2 className="text-3xl font-bold">60+</h2>
            <p className="font-semibold mt-1">Active Mentors</p>
            <p className="text-sm text-white/80 mt-2">
              Graduates who now guide and shape the next generation of cohorts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-6 text-white bg-linear-to-br from-purple-600 to-[#614FD6]">
            <div className="text-2xl mb-2">📚</div>
            <h2 className="text-3xl font-bold">45+</h2>
            <p className="font-semibold mt-1">Published Research</p>
            <p className="text-sm text-white/80 mt-2">
              Research available to help independent researchers on our platform.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative rounded-2xl overflow-hidden text-white"
        >
          <div className="absolute inset-0 bg-black" 
          style={{
            backgroundImage: "url('/images/funding.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          />
          <div className="relative text-white max-w-[320px] p-6 h-full flex flex-col justify-end">
            <h2 className="text-3xl font-bold">$120K+</h2>
            <p className="font-semibold mt-1">Funding Connected</p>
            <p className="text-sm mt-2">
              Helping researchers secure grants, sponsorships, and project support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
