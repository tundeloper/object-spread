import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Image 1 */}
        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-80"
          style={{ backgroundImage: "url('/images/feature-1.jpg')" }}
        />

        {/* Text 1 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#05051B]">
              Become a Better Researcher
            </h3>
            <p className="text-[#353535] mt-4 leading-relaxed">
              Master real research skills through guided cohorts, structured
              learning, and hands-on exploration. We help you move from
              “interested” to “impactful.”
            </p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all min-h-[44px] py-2"
          >
            Join a Cohort <span><ArrowRight/></span>
          </a>
        </div>

        {/* Image 2 */}
        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-80"
          style={{ backgroundImage: "url('/images/feature-2.png')" }}
        />

        {/* Text 2 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#05051B]">
              Learn from Mentors Who&apos;ve Been There
            </h3>
            <p className="text-[#353535] mt-4 leading-relaxed">
              Every cohort is supported by mentors & researchers who graduated
              from earlier cohorts. They guide you, challenge you, and help you
              grow with experience and clarity.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all min-h-[44px] py-2"
          >
            Get a Mentor <span><ArrowRight/></span>
          </a>
        </div>

        {/* Image 3 */}
        {/* <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-[320px]"
          style={{ backgroundImage: "url('/images/researcher.jpg')" }}
        /> */}

        {/* Text 3 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 sm:p-6 flex flex-col justify-between min-h-[256px] sm:min-h-[288px] lg:min-h-[320px]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#05051B]">
              Publish Your Research Internationally
            </h3>
            <p className="text-[#353535] mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              Your work deserves to be seen. We provide support to help you
              produce strong, publication-ready papers and share them through
              reputable international journals.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all min-h-[44px] py-2"
          >
            Seek Publishing Support <span><ArrowRight/></span>
          </a>
        </div>

        {/* Image 4 */}
        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-64 sm:h-72 lg:h-80"
          style={{ backgroundImage: "url('/images/feature-3.jpg')" }}
        />

        {/* Text 4 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 sm:p-6 flex flex-col justify-between min-h-[256px] sm:min-h-[288px] lg:min-h-[320px]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#05051B]">
              Access Funding Opportunities
            </h3>
            <p className="text-[#353535] mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              Research shouldn&apos;t stop because of lack of resources. We
              connect researchers with grants, sponsors, and funding options
              that help bring important ideas to life.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all min-h-[44px] py-2"
          >
            Access Funding <span><ArrowRight/></span>
          </a>
        </div>

        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-64 sm:h-72 lg:h-80"
          style={{ backgroundImage: "url('/images/feature-4.jpg')" }}
        />
      </div>
    </section>
  );
}
