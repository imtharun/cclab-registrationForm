import React from "react";
import { BouncingBalls } from "react-cssfx-loading/lib";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#F5FEFD]">
      <BouncingBalls color="#176698" width="30px" height="30px" />
    </div>
  );
};

export default Loader;
