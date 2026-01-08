export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Image 1 */}
        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-80"
          style={{ backgroundImage: "url('/images/feature-1.jpg')" }}
        />

        {/* Text 1 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Become a Better Researcher
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Master real research skills through guided cohorts, structured
              learning, and hands-on exploration. We help you move from
              “interested” to “impactful.”
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-purple-600 font-medium"
          >
            Join a Cohort <span>→</span>
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
            <h3 className="text-2xl font-bold text-gray-900">
              Learn from Mentors Who&apos;ve Been There
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Every cohort is supported by mentors & researchers who graduated
              from earlier cohorts. They guide you, challenge you, and help you
              grow with experience and clarity.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-purple-600 font-medium"
          >
            Get a Mentor <span>→</span>
          </a>
        </div>

        {/* Image 3 */}
        {/* <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-[320px]"
          style={{ backgroundImage: "url('/images/researcher.jpg')" }}
        /> */}

        {/* Text 3 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Publish Your Research Internationally
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Your work deserves to be seen. We provide support to help you
              produce strong, publication-ready papers and share them through
              reputable international journals.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-purple-600 font-medium"
          >
            Seek Publishing Support <span>→</span>
          </a>
        </div>

        {/* Image 4 */}
        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-80"
          style={{ backgroundImage: "url('/images/feature-3.jpg')" }}
        />

        {/* Text 4 */}
        <div className="rounded-lg bg-[#FAF7FB] p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Access Funding Opportunities
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Research shouldn&apos;t stop because of lack of resources. We
              connect researchers with grants, sponsors, and funding options
              that help bring important ideas to life.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-purple-600 font-medium"
          >
            Access Funding <span>→</span>
          </a>
        </div>

        <div
          className="rounded-lg overflow-hidden bg-cover bg-center h-80"
          style={{ backgroundImage: "url('/images/feature-4.jpg')" }}
        />
      </div>
    </section>
  );
}
