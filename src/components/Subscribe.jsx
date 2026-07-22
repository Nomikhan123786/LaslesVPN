const Subscribe = () => {
  return (
    <section id="subscribe" className="px-6 md:px-12 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Subscribe Now for
              <br className="hidden sm:block" /> Get Special Features!
            </h3>
            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Button */}
          <button className="w-full md:w-auto shrink-0 bg-red-500 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors duration-200">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
