import React from "react";

function Found() {
  return (
    <section className="bg-[#f8eee8] h-screen ">
      <div className="max-w-4xl mx-auto h-full flex flex-col lg:px-0 px-4 pt-32 pb-4">
        <h2 className=" text-5xl text-[#240115] text-center">
          The foundation <br />{" "}
          <span className="text-[#8c2155] italic">of great nails</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <a
            href="/"
            className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#e4cbcf] bg-[#f5e9e4] p-6 h-72 transition-colors duration-300 hover:bg-[#f0e2df] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <svg
                className="text-[#8c2155] h-10 w-10 mb-2"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM320 416C267 416 224 373 224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416z" />
              </svg>

              <h3 className="text-[#240115] text-2xl">Manicures</h3>
            </div>

            <span className="group px-4 text-[#8c2155] overflow-hidden rounded-2xl flex items-center justify-center w-24">
              <span className="relative h-6 w-full">
                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-transform duration-400 group-hover:-translate-y-full ease-[cubic-bezier(.22,.61,.36,1)]">
                  8 services
                </span>

                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap translate-y-full transition-transform duration-400 group-hover:translate-y-0 ease-[cubic-bezier(.22,.61,.36,1)]">
                  View All
                </span>
              </span>
            </span>

            <div className="bg-[#ecd9da] absolute h-2 w-8/10 top-full rounded-b-2xl"></div>
          </a>

          <a
            href="/"
            className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#e4cbcf] bg-[#f5e9e4] p-6 h-72 transition-colors duration-300 hover:bg-[#f0e2df] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <svg
                className="text-[#8c2155] h-10 w-10 mb-2"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M286.7 96.1C291.7 113 282.1 130.9 265.2 135.9C185.9 159.5 128.1 233 128.1 320C128.1 426 214.1 512 320.1 512C426.1 512 512.1 426 512.1 320C512.1 233.1 454.3 159.6 375 135.9C358.1 130.9 348.4 113 353.5 96.1C358.6 79.2 376.4 69.5 393.3 74.6C498.9 106.1 576 204 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 204 141.1 106.1 246.9 74.6C263.8 69.6 281.7 79.2 286.7 96.1z" />
              </svg>

              <h3 className="text-[#240115] text-2xl">Pedicures</h3>
            </div>

            <span className="group px-4 text-[#8c2155] overflow-hidden rounded-2xl flex items-center justify-center w-24">
              <span className="relative h-6 w-full">
                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-transform duration-400 group-hover:-translate-y-full ease-[cubic-bezier(.22,.61,.36,1)]">
                  6 services
                </span>

                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap translate-y-full transition-transform duration-400 group-hover:translate-y-0 ease-[cubic-bezier(.22,.61,.36,1)]">
                  View All
                </span>
              </span>
            </span>
            <div className="bg-[#ecd9da] absolute h-2 w-8/10 top-full rounded-b-2xl"></div>
          </a>

          <a
            href="/"
            className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#e4cbcf] bg-[#f5e9e4] p-6 h-72 transition-colors duration-300 hover:bg-[#f0e2df] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <svg
                className="text-[#8c2155] h-10 w-10 mb-2"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
              </svg>

              <h3 className="text-[#240115] text-2xl">Gel Nails</h3>
            </div>

            <span className="group px-4 text-[#8c2155] overflow-hidden rounded-2xl flex items-center justify-center w-24">
              <span className="relative h-6 w-full">
                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-transform duration-400 group-hover:-translate-y-full ease-[cubic-bezier(.22,.61,.36,1)]">
                  6 services
                </span>

                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap translate-y-full transition-transform duration-400 group-hover:translate-y-0 ease-[cubic-bezier(.22,.61,.36,1)]">
                  View All
                </span>
              </span>
            </span>
            <div className="bg-[#ecd9da] absolute h-2 w-8/10 top-full rounded-b-2xl"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Found;
