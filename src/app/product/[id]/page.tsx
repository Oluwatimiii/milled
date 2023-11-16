import Image from "next/image";
import React from "react";
import { ProductData, dummyData } from "../../../../data/data";
import Carousel from "@/components/cards/Carousel";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  console.log("itemID", params.id);

  const data: any = dummyData.filter(
    (item: ProductData) => item?.id === parseInt(params.id, 10)
  );

  return (
    <section className="py-[3rem] md:py-[3rem] px-[2rem] md:px-[3rem] w-full">
      <div>
        <div className="w-full my-4 relative h-[140px] md:h-[190px] border-[1px] overflow-hidden border-[#ac2b2b46]/50">
          <Image
            fill
            src={data[0]?.src}
            alt={data[0]?.productTitle}
            objectFit="cover"
            priority
            // className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-bold uppercase text-center py-4">{data[0]?.productTitle}</h1>
        <p>
          Right now, as you're navigating through our Next.js website, simply
          click on any card to delve into a dedicated page meticulously crafted
          to unravel the key details of the item that piqued your interest.
          Witness the magic unfold as your current exploration seamlessly
          transitions into a more in-depth journey. It's all about you and your
          unique experience, effortlessly moving from the card overview to an
          engaging and personalized showcase of the features that matter most to
          you. Enjoy the immersive adventure as you uncover the specifics of
          each item—all at your fingertips.
        </p>
      </div>

      <div className="my-6">
        <h1 className="font-bold text-base md:text-xl pl-3 py-4">
          Similar products
        </h1>

        <Carousel datas={dummyData} />
      </div>
    </section>
  );
};

export default ProductDetails;
