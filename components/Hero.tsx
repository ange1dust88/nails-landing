import React from "react";

function Hero() {
  return (
    <section className="bg-[#f8eee8] h-screen ">
      <div className="max-w-4xl mx-auto bg-red-50 min-h-full flex flex-col lg:px-0 px-4 pt-12 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0 lg:items-center mt-12 ">
          <h1 className="text-[#240115] lg:text-6xl text-5xl">
            Ready for nails
            <br /> that feel{" "}
            <span className="italic text-[#8c2155]">like you?</span>
          </h1>

          <div className="flex flex-col gap-4 items-start max-w-70">
            <p className="">
              Custom nail designs that reflect your mood, style, and everyday
              energy.
            </p>
            <a
              href=""
              className="group px-4 py-2 bg-[#8c2155] text-white rounded-2xl flex items-center justify-between gap-2"
            >
              <span className="relative  overflow-hidden w-20 h-7">
                <span className="absolute left-0 transition-all duration-300 group-hover:-translate-y-full ease-[cubic-bezier(.22,.61,.36,1)]">
                  Book Now
                </span>
                <span className="absolute left-0 transition-all duration-300 translate-y-full group-hover:translate-y-0 ease-[cubic-bezier(.22,.61,.36,1)]">
                  Book Now
                </span>
              </span>
              <span className="text-[#8c2155] bg-white rounded-[50%] h-7 w-7 flex justify-center items-center relative overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 ease-[cubic-bezier(.22,.61,.36,1)]"
                >
                  <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-5 h-5 absolute -translate-x-6 transition-all duration-300 group-hover:translate-x-0 ease-[cubic-bezier(.22,.61,.36,1)]"
                >
                  <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 flex-1">
          <img
            src="/hero1.avif"
            alt=""
            className="w-full h-full object-cover rounded-t-[9rem] rounded-b-2xl"
          />
          <img
            src="/hero2.avif"
            alt=""
            className="w-full h-full object-cover rounded-t-[9rem] rounded-b-[9rem]"
          />
          <img
            src="/hero3.avif"
            alt=""
            className="w-full h-full object-cover rounded-t-[9rem] rounded-b-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
