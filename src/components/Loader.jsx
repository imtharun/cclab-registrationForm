import React from "react";
import { FillingBottle } from "react-cssfx-loading/lib";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#F5FEFD]">
      <FillingBottle color="#176698" width="100px" height="100px" />
    </div>
  );
};

export default Loader;
