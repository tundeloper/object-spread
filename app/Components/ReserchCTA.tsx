const ResearchCTA = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-t-[60px] bg-[#05051B] ">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_0%,#9848FF,#371464,#05051B)]" />

      {/* Star Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-105 flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-219.75 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
          Ready to begin your research <br className="hidden md:block" />
          journey?
        </h1>

        <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
          Join a community built for thinkers, dreamers, and problem-solvers.
        </p>

        <button className="group mt-10 flex items-center gap-3 rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-violet-400">
          Get in Touch
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-violet-600 transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default ResearchCTA;
