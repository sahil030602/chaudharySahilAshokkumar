import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed top-0  w-full md:w-[97%] z-10 bg-black shadow-sm">
      <div className="flex">
        <Link href={"/"}>
          {" "}
          <Image
            src={"/Sahil-Logo.png"}
            width={70}
            height={70}
            className="mt-0"
          />
        </Link>
        <div className="space-y-[-4px] p-1 mt-2  hidden md:flex flex-col">
          <span className="font-bold">CHAUDHARY</span>
          <p className="text-right">SAHIL</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
       <Link href={"/AboutMe"}>
       <Button variant="outline" className="text-black">
          About Me
        </Button>
       </Link>
        <Link href={"/Projects"}>
          <Button className="bg-transparent border">Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
