import React from "react";
import Carousel from "./cards/Carousel";
import { dummyData } from "../../data/data";

export const Screenb = () => {
  return (
    <section className="py-[2rem] md:py-[3rem] px-[2rem] md:px-[3rem] w-full">
      <div>
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from National Retailers
        </h1>

        <Carousel datas={dummyData} />
      </div>
      <div className="pt-3">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from Fashion and Apparel Brands
        </h1>

        <Carousel datas={dummyData} />
      </div>
      <div className="pt-3">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from Beauty and Care Brands
        </h1>

        <Carousel datas={dummyData} />
      </div>
      <div className="pt-3">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from Home & Decor Brands
        </h1>

        <Carousel datas={dummyData} />
      </div>
      <div className="pt-3">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from 2024 US President Candidates
        </h1>

        <Carousel datas={dummyData} />
      </div>
      <div className="pt-3">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Emails from 2024 Home Brands
        </h1>

        <Carousel datas={dummyData} />
      </div>
    </section>
  );
};
