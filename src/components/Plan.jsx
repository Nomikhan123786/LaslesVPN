import box from "../assets/images/box.svg";

const plans = [
  {
    title: "Free Plan",
    strategy: [
      "Unlimited Bandwidth",
      "Encrypted connection",
      "No traffic logs",
      "Works on all devices",
    ],
    offer: "Free",
    select: "Select",
    highlighted: false,
  },
  {
    title: "Standard Plan",
    strategy: [
      "Unlimited Bandwidth",
      "Encrypted connection",
      "Yes traffic logs",
      "Works on all devices",
      "Connect Anywhere",
    ],
    offer: "$9 ",
    month: "/ mo",
    select: "Select",
    highlighted: false,
  },
  {
    title: "Premium Plan",
    strategy: [
      "Unlimited Bandwidth",
      "Encrypted connection",
      "Yes traffic logs",
      "Works on all devices",
      "Connect Anywhere",
      "Get New Feature",
    ],
    offer: "$12 ",
    month: "/ mo",
    select: "Select",
    highlighted: true,
  },
];

const Plan = () => {
  return (
    <section id="network" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 ">
            Choose Your Plan
          </h2>
          <p className="pt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>

        {/* Plans */}
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((card_item, index) => (
            <div
              key={index}
              className={`h-full flex flex-col items-center text-center rounded-2xl border p-8 ${
                card_item.highlighted
                  ? "border-2 border-red-500 shadow-xl shadow-red-100"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Icon */}
              <img src={box} alt="" className="w-35 h-35 mt-10" />

              {/* Title */}
              <h3 className="pt-6 font-semibold text-gray-900">
                {card_item.title}
              </h3>

              {/* Features */}
              <div className="text-center md:h-60">
                <ul className="pt-10 space-y-3 text-left w-full flex-1">
                  {card_item.strategy.map((strategy_item, strategy_index) => (
                    <li
                      key={strategy_index}
                      className="flex items-center gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="2"
                        className="w-3.5 h-3.5 text-green-600 shrink-0 fontWeight-bold"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {strategy_item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="flex flex-row gap-2">
                <p className="mt-8 text-2xl font-bold text-gray-900">
                  {card_item.offer}
                </p>
                <span className="mt-8 text-2xl font-medium text-[#4F5665]">
                  {card_item.month}
                </span>
              </div>

              {/* Select button */}
              <button
                className={`mt-6 w-full max-w-[180px] py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  card_item.highlighted
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                }`}
              >
                {card_item.select}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
