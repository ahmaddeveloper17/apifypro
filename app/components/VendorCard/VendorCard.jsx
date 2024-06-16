import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function VendorCard() {
  return (
    <div className="grid grid-cols-2 ml-16 mr-6 rounded-lg mt-6 w-[350px] sm:w-[500px] bg-slate-400">
      <div>
        <div className="flex  pt-4 pl-2">
          <p className="pr-4 font-bold pl-8">venues</p>
          <Image src={Images.down} height={15} width={15} />
        </div>
        <p className="text-sm  pl-10">Banquet Halls</p>
      </div>
      <Image
        src={Images.images}
        height={105}
        width={105}
        className="rounded-lg  my-3"
      />
    </div>
  );
}

export default VendorCard;
