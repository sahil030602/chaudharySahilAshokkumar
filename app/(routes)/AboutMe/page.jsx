"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, GraduationCap, MoveDownIcon } from "lucide-react";
import Link from "next/link";
import SKills from "@/app/components/SKills";
import Allskills from "@/app/components/Allskills";
import Education from "@/app/components/Education";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const AboutUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef(null);
  return (
    <div className="">
      <div className="text-center mt-20">
        <h1 className="font-bold md:text-5xl text-2xl">ABOUT ME</h1>
        <p className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text tracking-[10px]">
          EXPLORE NOW
        </p>
      </div>
      <div className="flex flex-col justify-around md:flex-row mt-7 md:mt-5 items-center gap-10">
        <Image
          src={"/Me.png"}
          width={400}
          height={400}
          className="w-[200px] h-[200px]"
        />
        <div className=" w-full md:w-[60%] px-5">
          <p className="font-semibold  text-md md:text-xl">
            Hi Everyone, I am{" "}
            <span className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text">
              Chaudhary Sahil
            </span>{" "}
            from Ahmedabad ,Gujarat, India. <br /> I am a recent graduate with a
            BTech in Computer Engineering and I'm excited to boost my career in{" "}
            <span className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text">
              Frontend Web Developer
            </span>
            . Position and creativity of web pages. With all the skills that I
            mentioned below, I am confident in my ability to contribute
            effectively to your team. Accomplished professional with fresh
            mindset in planning, designing, and implementing high-quality
            websites. <br /> Proven ability to quickly understand requirements,
            create innovative solutions, and complete projects with all the
            requirement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 ">
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CheckCircle className="w-[30px] h-[30px]" />
              </CardHeader>
              <CardContent className="flex gap-2 items-center">
                <p className="text-3xl font-bold">SKILLS</p>
                <Link href={"#skills"} className="aboutusLink">
                  <MoveDownIcon />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-white">
              <CardHeader>
                <GraduationCap className="w-[30px] h-[30px]" />
              </CardHeader>
              <CardContent className="flex gap-2 items-center">
                <p className="text-3xl font-bold">EDUCATION</p>
                <Link href={"#education"} className="">
                  <MoveDownIcon />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Allskills />
      <div ref={ref} className="relative overflow-hidden">
        <SKills reference={ref} />
      </div>
      <Education />
    </div>
  );
};

export default AboutUs;
