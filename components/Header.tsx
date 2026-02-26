"use client";

import { useState, useEffect } from "react";
import ButtonShift from "./ui/ButtonShift";

const NAV_ITEMS = ["Services", "Portfolio", "Reviews", "FAQ", "Contact"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const burgerColor = "bg-[#8c2155]";

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-16 bg-[#f8eee8] flex justify-center">
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0   z-40 transition-opacity duration-300 lg:hidden
  ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />

        <nav
          className={`fixed top-16 left-0 w-full bg-[#f8eee8] z-40 lg:hidden transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] border-b border-[#e9d1d4] shadow-xs
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center gap-3 py-5 px-4">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={`text-[#240115] text-lg transition-all duration-300 cursor-pointer hover:text-[#8c2155]  
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {item}
              </button>
            ))}
            <ButtonShift href="#" className="w-full mt-1">
              Book Now
            </ButtonShift>
          </div>
        </nav>

        <div
          className={`mx-auto w-full max-w-4xl lg:px-0 px-4 py-1 flex items-center justify-between relative 
            ${menuOpen ? "border-none shadow-none" : "border-b border-[#e9d1d4] shadow-xs"}`}
        >
          <button
            onClick={() => handleScroll("hero")}
            className="flex flex-col leading-tight cursor-pointer"
          >
            <span className="text-[#240115] hover:text-[#8c2155] transition-colors duration-300 text-lg top-4 left-4 lg:top-0 lg:left-0 fixed lg:relative">
              Nails
            </span>
          </button>

          <nav className="hidden lg:flex gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="

                  text-[#240115]
                  cursor-pointer
                  transition-colors
                  duration-300
                  hover:text-[#8c2155]
                "
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex gap-2 items-center">
            <a
              href="tel:+14706297525"
              className="hidden lg:flex items-center justify-center
             h-8 w-8 rounded-full
             bg-[#f0dfde] hover:bg-[#e8d1d4] transition-colors duration-300 text-[#8c2155]"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
              </svg>
            </a>

            <ButtonShift href="#" className="hidden lg:flex w-26 h-8">
              Book Now
            </ButtonShift>
          </div>
        </div>
      </header>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center z-50 lg:hidden cursor-pointer duration-300 transition-colors bg-[#eedddc] hover:bg-[#e8d1d4] rounded-[50%]"
        aria-label="Toggle menu"
      >
        <span
          className={`absolute w-4 h-0.5 transition-all duration-300 ${
            menuOpen ? "rotate-45" : "-translate-y-1"
          } ${burgerColor}`}
        />
        <span
          className={`absolute w-4 h-0.5 transition-opacity duration-200 ${
            menuOpen ? "opacity-0" : "opacity-100"
          } ${burgerColor}`}
        />
        <span
          className={`absolute w-4 h-0.5 transition-all duration-300 ${
            menuOpen ? "-rotate-45" : "translate-y-1"
          } ${burgerColor}`}
        />
      </button>
    </>
  );
}

export default Header;
