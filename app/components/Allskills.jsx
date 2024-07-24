import React from "react";
import Marquee from "react-fast-marquee";

const Allskills = () => {
  return (
    <div className="mt-24">
      <Marquee className=" overflow-hidden" autoFill>
          <h1 className="font-bold text-5xl bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text">SKILLS & EDUCATION||</h1>
      </Marquee>
      <Marquee className=" overflow-hidden" direction="right" autoFill>
          <h1 className="font-bold text-5xl bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text">SKILLS & EDUCATION||</h1>
      </Marquee>
    </div>
  );
};

export default Allskills;
