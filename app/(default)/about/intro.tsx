export default function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40">
          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider"
              data-aos="zoom-y-out"
            >
              One Venue
            </div>
            <h1 className="h1 mb-4">
              We enable venue managers to create memorable{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
