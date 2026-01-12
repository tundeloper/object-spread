import Image from "next/image";
import grads from "@/app/assets/graduation-hat-and-books.png";
import book from "@/app/assets/Open-Book.png";

export default function Stats() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="relative rounded-2xl overflow-hidden text-white min-h-70"
          style={{
            backgroundImage: "url('/images/researcher.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative p-6 h-full flex flex-col justify-end">
            <h2 className="text-2xl sm:text-3xl font-bold">200+</h2>
            <p className="font-semibold mt-1 text-sm sm:text-base">Researchers Trained</p>
            <p className="text-sm text-white/80 mt-2">
              Individuals who started with curiosity and became confident
              researchers.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          {/* Card 2 */}
          <div className="rounded-2xl p-6 text-white bg-linear-to-br from-[#E196FB] to-[#9848FF] min-h-32.5">
            <Image src={grads} alt="Mentor" width={40} height={40} />
            <h2 className="text-2xl sm:text-3xl font-bold">60+</h2>
            <p className="font-semibold mt-1 text-sm sm:text-base">Active Mentors</p>
            <p className="text-sm text-white/80 mt-2">
              Graduates who now guide and shape the next generation of cohorts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-6 text-white bg-linear-to-br from-[#9848FF] to-[#614FD6] min-h-32.5">
            {/* <div className="text-2xl mb-2">📚</div> */}
            <Image src={book} alt="Book" width={40} height={40} />

            <h2 className="text-2xl sm:text-3xl font-bold">45+</h2>
            <p className="font-semibold mt-1 text-sm sm:text-base">Published Research</p>
            <p className="text-sm text-white/80 mt-2">
              Research available to help independent researchers on our
              platform.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-2xl overflow-hidden text-white min-h-[280px]">
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: "url('/images/funding.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative text-white p-6 h-full flex flex-col justify-end">
            <h2 className="text-2xl sm:text-3xl font-bold">$120K+</h2>
            <p className="font-semibold mt-1 text-sm sm:text-base">Funding Connected</p>
            <p className="text-sm mt-2">
              Helping researchers secure grants, sponsorships, and project
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
