import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import { useState } from "react";

const navLinks = [
  { href: "", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testinomials", label: "Testinomials" },
  { href: "#subscribe", label: "Help" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 right-0 left-0 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-7 py-4 lg:py-[18px] flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="LaslesVPN" className="h-6 sm:h-7" />
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ">
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#4F5665] transition-colors duration-200 hover:text-red-500"
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link
            to="/login"
            className="text-sm-[800] font-medium text-black hover:text-red-500 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="border-1 border-[#F53855] text-[#F53855] text-sm-[800] font-bold px-10 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* {menubar} */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 lg:hidden z-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-red-500"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className=" text-sm font-semibold text-gray-700 hover:text-red-500 "
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
