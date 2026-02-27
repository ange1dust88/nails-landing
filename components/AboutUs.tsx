function AboutUs() {
  return (
    <section className="bg-[#f8eee8] ">
      <div className="max-w-4xl mx-auto h-full flex flex-col lg:px-0 px-4 pt-16 pb-4">
        <div className="w-full rounded-2xl border h-full border-[#e4cbcf] bg-[#f5e9e4] flex flex-col items-center pt-16 overflow-hidden">
          <h3 className="text-[#8c2155]">About Us</h3>
          <h4 className="text-[#240115] text-5xl text-center my-1">
            Rooted in calm.{" "}
          </h4>
          <h4 className="italic text-5xl text-[#8c2155] ">Built on detail</h4>

          <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 w-full my-16">
            <div className="w-full flex flex-col justify-center items-center py-2">
              <div className="flex gap-1 items-center justify-center">
                <svg
                  className="text-[#8c2155] h-8 w-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>

                <span className="text-[#8c2155] text-4xl">4.95</span>
              </div>
              <span className="text-[#240115] text-lg mt-2">
                Average Rating
              </span>
            </div>

            <div className="w-full flex flex-col justify-center items-center lg:border-x lg:border-y-0 border-y border-[#e4cbcf] lg py-2 ">
              <div className="flex gap-1 items-center justify-center">
                <svg
                  className="text-[#8c2155] h-8 w-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />{" "}
                </svg>
                <span className="text-[#8c2155] text-4xl">12+</span>
              </div>
              <span className="text-[#240115] text-lg mt-2">
                Years of Expertise
              </span>
            </div>

            <div className="w-full flex flex-col justify-center items-center py-2">
              <div className="flex gap-1 items-center justify-center">
                <svg
                  className="text-[#8c2155] h-8 w-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M345 151.2C354.2 143.9 360 132.6 360 120C360 97.9 342.1 80 320 80C297.9 80 280 97.9 280 120C280 132.6 285.9 143.9 295 151.2L226.6 258.8C216.6 274.5 195.3 278.4 180.4 267.2L120.9 222.7C125.4 216.3 128 208.4 128 200C128 177.9 110.1 160 88 160C65.9 160 48 177.9 48 200C48 221.8 65.5 239.6 87.2 240L119.8 457.5C124.5 488.8 151.4 512 183.1 512L456.9 512C488.6 512 515.5 488.8 520.2 457.5L552.8 240C574.5 239.6 592 221.8 592 200C592 177.9 574.1 160 552 160C529.9 160 512 177.9 512 200C512 208.4 514.6 216.3 519.1 222.7L459.7 267.3C444.8 278.5 423.5 274.6 413.5 258.9L345 151.2z" />
                </svg>
                <span className="text-[#8c2155] text-4xl">98%</span>
              </div>
              <span className="text-[#240115] text-lg mt-2">Rebook Rate</span>
            </div>
          </div>

          <div className="h-128 w-full relative">
            <img
              src="aboutus.avif"
              alt=""
              className="w-full h-full object-cover"
            />

            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-[#f7ede7] rounded-2xl
                w-[90%] sm:w-[80%] lg:w-1/2
                px-4 sm:px-6 lg:px-10
                py-6 sm:py-8
                text-center
                "
            >
              <p className="text-balance italic text-[#240115] text-lg sm:text-xl lg:text-2xl leading-relaxed">
                “Nailora is where calm meets style. Clean sets, custom art, zero
                drama. Just good nails, done right”
              </p>

              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
                <img
                  src="author.avif"
                  alt="Author"
                  className="rounded-full h-10 w-10 sm:h-12 sm:w-12 object-cover"
                />

                <div className="flex flex-col text-left">
                  <span className="text-[#240115] text-base sm:text-lg font-medium">
                    Name Surname
                  </span>
                  <span className="text-[#8c2155] text-sm sm:text-base">
                    Founder of Nails
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
