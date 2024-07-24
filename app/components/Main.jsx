"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-2 md:gap-4 items-center mt-20">
        <Image src={"/Me.png"} width={300} height={300} />
        <div>
          <h1 className="text-center font-semibold text-2xl items-center">
            Hi I'm Chaudhary Sahil
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <div className=" text-4xl text-center md:text-6xl w-full h-[50px] md:h-[70px] font-bold bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text">
            <Typewriter
              options={{
                strings: [
                  "FrontEnd Developer",
                  "UI/UX Designer",
                  "Graphic Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="font-semibold text-xl  md:text-3xl text-center md:p-2">
            I write a code and than debug
          </p>
        </div>
        <p className=" text-center">
          I recently graduated in a BTech in computer engineering and I'm
          excited to boost my <br></br>
          career in the front end web development position and creativity of web
          pages
        </p>
        <div>
          <Link
            href={"/ForPortfolioResume.pdf"}
            download={"ChaudharySahil.pdf"}
            target="_blank"
          >
            <Button className="bg-transparent border rounded-2xl w-32 hover:bg-black">
              Resume
            </Button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;
