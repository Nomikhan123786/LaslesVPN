import global from "../assets/images/Huge Global.svg";
import social from "../assets/images/Sponsored.svg";
const Network = () => {
  return (
    <section
      id="network"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-white from-50% to-gray-50 to-50%"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl  md:text-4xl font-medium text-gray-900 md:pr-15 md:pl-15 ">
            Huge Global Network of Fast VPN
          </h2>
          <p className="pt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
        <div className="item-center">
          <img src={global} alt="" className="w-full md:h-165 pt-35 " />
        </div>
        <div>
          <img src={social} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Network;
