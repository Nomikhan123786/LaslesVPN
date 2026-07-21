import illustration2 from "../assets/images/Illustration 2.svg";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const Feature = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-27 max-w-6xl mx-auto">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustration2}
            alt="Feature illustration"
            className="w-full max-w-md "
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 md:pr-25 ">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight lg:pr-10 pt-5">
            We Provide Many Features You Can Use
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="mt-8 space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2FAB73] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-white "
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-base">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
