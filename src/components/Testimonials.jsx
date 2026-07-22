import { useState } from "react";
import avatar1 from "../assets/images/Ellipse 175.svg";
import avatar2 from "../assets/images/Ellipse 175 (2).svg";
import avatar3 from "../assets/images/Ellipse 175 (1).svg";
import avatar4 from "../assets/images/Noman.jpeg";

const testimonials = [
  {
    name: "Noman Nawaz",
    location: "Rawalpindi,Pakistan",
    rating: "4.5",
    avatar: avatar4,
    quote:
      "Wow... It is very useful VPN and easy to use for everyOne, it turned out to be more than my expectations. LaslesVPN always the best.",
  },
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    avatar: avatar1,
    quote:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    avatar: avatar2,
    quote:
      "I like it because I like to travel far and still can connect with high speed.",
  },
  {
    name: "Kim Young",
    location: "Seoul, South Korea",
    rating: "4.5",
    avatar: avatar3,
    quote:
      "This is very unusual, most VPN currently requires a very high fee to get a service that has high security.",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-yellow-400"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
  </svg>
);

const ArrowIcon = ({ direction = "left" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 ${direction === "right" ? "rotate-180" : ""}`}
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const VISIBLE_COUNT = 3;

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const maxIndex = Math.max(testimonials.length - VISIBLE_COUNT, 0);
  const windowStart = Math.min(active, maxIndex);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section id="testinomials" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 leading-tight pr-10 pl-10">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        {/* Desktop: sliding window, always shows exactly 3 cards no matter how many total */}
        <div className="mt-12 hidden md:block overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out -mx-3"
            style={{
              transform: `translateX(-${windowStart * (100 / VISIBLE_COUNT)}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="w-1/3 shrink-0 px-3">
                <div
                  className={`h-full rounded-2xl border p-6 ${
                    index === active
                      ? "border-2 border-red-500 shadow-lg shadow-red-100 bg-white"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-900 font-medium">
                      <span>{t.rating}</span>
                      <StarIcon />
                    </div>
                  </div>
                  <p className="mt-5 text-gray-600 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single card  */}
        <div className="mt-12 md:hidden">
          <div className="rounded-2xl border border-red-500 shadow-lg shadow-red-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[active].location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-900 font-medium">
                <span>{testimonials[active].rating}</span>
                <StarIcon />
              </div>
            </div>
            <p className="mt-5 text-gray-600 leading-relaxed">
              "{testimonials[active].quote}"
            </p>
          </div>
        </div>

        {/* Pagination dots + nav arrows */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === active
                    ? "w-12 p-1.5 bg-red-500"
                    : "w-2 p-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12  flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
