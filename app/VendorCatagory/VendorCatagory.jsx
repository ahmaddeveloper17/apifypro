import React from "react";
import VendorCard from "../components/VendorCard/VendorCard";

function VendorCatagory() {
  return (
    <div className="mt-[-150px]">
      <p className="font-bold text-md sm:text-2xl text-center">
        Vendor Categories
      </p>
      <p className=" text-sm text-center ">
        Over 250,000 local professions with reviews,pricing and more
      </p>
      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </div>
    </div>
  );
}

export default VendorCatagory;
