import React from "react";
import { FaSearch } from "react-icons/fa";

export const Screena = () => {
  return (
    <section className="py-[2rem] md:py-[3rem] px-[2rem] md:px-[3rem] w-full">
      <div className="mx-auto flex flex-col items-center gap-7 md:flex-row md:justify-between w-full">
        {/* Side text */}
        <div className="w-full md:max-w-[52%] space-y-5">
          <h1 className="font-semibold text-xl md:text-2xl text-black">
            Milled is a search engine for
            <span className="text-blue-700"> email newsletters</span>
          </h1>
          <p className="text-sm md:text-normal text-slate-500">
            Find sales, deals, coupons, and discount codes from 109k+ brands and
            retailers.
          </p>
        </div>

        {/* Input Field */}
        <div className="flex shadow-md items-center justify-between w-full md:max-w-[80%] bg-white rounded-lg overflow-hidden">
          <input
            placeholder="Search brands or keywords"
            className="bg-transparent focus:outline-none  w-[80%] px-2"
          />
          <div className="bg-gray-100 px-5 py-3 cursor-pointer">
            <FaSearch size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};
