import Link from "next/link";
import React from "react";
import { ProductData } from "../../../data/data";
import Image from "next/image";

const Card = (props: ProductData) => {
  return (
    <Link href={`/product/${props.id}`} className="max-w-[230px]">
      <div className="p-2 border-[1px] border-gray-600/10 bg-white">
        <div className="pb-2">
          <div className="flex flex-col space-y-1 items-start">
            <p className="text-xs">{props.name} - 4.43pm</p>
            <span className="text-sm font-semibold pt-1 capitalize">
              {props.productTitle}
            </span>
            <span className="text-xs pt-1 capitalize">
              {props.productTitle2}
            </span>
          </div>
        </div>

        <div className="w-full pt-2 relative h-[180px] border-[1px] overflow-hidden border-[#ac2b2b46]/50">
          <Image
            fill
            src={props.src}
            alt={props.productTitle}
            priority
            // className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
