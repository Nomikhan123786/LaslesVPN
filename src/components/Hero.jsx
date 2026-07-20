import illustration_1 from "../assets/images/Illustration 1.svg";

const stats = [
  { icon: "person", value: "90+", label: "Users" },
  { icon: "location", value: "30+", label: "Locations" },
  { icon: "server", value: "50+", label: "Servers" },
];

const Hero = () => {
  return (
    <section id="hero" className="bg-white">
      <div className="max-w-[1140px]  mx-auto px-4 sm:px-6 lg:px-7 pt-8 lg:pt-16 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-11 lg:gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Want anything to be easy with{" "}
              <span className="font-sans text-gray-900 font-extrabold">
                LaslesVPN.
              </span>
            </h1>
            <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="font-semibold text-gray-700">LaslesVPN</span>{" "}
              discover interesting features from us.
            </p>
            <div className="mt-8 ">
              <button className="bg-[#F53838] text-white font-semibold px-20 py-3.5 rounded-lg shadow-xl shadow-[#db9b9b] hover:bg-[#f73131] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={illustration_1}
              alt="Person using laptop illustration"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-20 bg-white rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 px-6 sm:px-10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-around divide-y sm:divide-y-0 sm:divide-x divide-gray-200 gap-6 sm:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 w-full sm:w-auto justify-center ${
                  index !== 0 ? "sm:pl-8 pt-6 sm:pt-0" : ""
                } ${index !== stats.length - 1 ? "sm:pr-8" : ""}`}
              >
                <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <StatIcon type={stat.icon} />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatIcon = ({ type }) => {
  const common = "w-5 h-5 text-red-500";
  if (type === "person") {
    return (
      <svg className={common} fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (type === "location") {
    return (
      <svg className={common} fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg className={common} fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5zM3 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
    </svg>
  );
};

export default Hero;
