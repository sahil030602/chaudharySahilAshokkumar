"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const SKills = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start center", "end center"],
  });
  return (
    <>
       <div className="text-center mt-20" id="skills">
        <h1 className="font-bold md:text-5xl text-2xl">SKILLS</h1>
        <p className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text tracking-[10px]">
          EXPLORE NOW
        </p>
      </div>

      <figure className="stroke-dark mx-auto  flex gap-20 ">
        <svg id="svg" viewBox="0 0 800 800" className=" w-[60%] hidden md:block">
          <motion.path
            style={{ pathLength: scrollYProgress }}
            d="M -5,0
            Q 450 230 300 450 
            T 130 750
            Q 100 850 300 1000"
            fill="none"
            stroke="white"
            stroke-width="2px"
          />
          <text fill="white"  className="text-lg font-semibold " x={105} y={55}>
            HTML,CSS
          </text>
          <circle fill="white" className="" r="7.5" cx="85" cy="50"/>
          <text fill="white"  className="text-lg font-semibold " x={215 } y={125}>
          JAVASCRIPT
          </text>
          <circle fill="white" className="" r="7.5" cx="195" cy="120"/>
          <text fill="white"  className="text-lg font-semibold " x={293} y={200}>
            REACTJS
          </text>
          <circle fill="white" className="" r="7.5" cx="273" cy="195"/>
          <text fill="white"  className="text-lg font-semibold " x={342} y={275}>
            NEXTJS
          </text>
          <circle fill="white" className="" r="7.5" cx="322" cy="270"/>
          <text fill="white"  className="text-lg font-semibold " x={357} y={350}>
            STRAPI
          </text>
          <circle fill="white" className="" r="7.5" cx="337" cy="345"/>
          <text fill="white"  className="text-lg font-semibold " x={337} y={425}>
            POSTMAN
          </text>
          <circle fill="white" className="" r="7.5" cx="317" cy="420"/>
          <text fill="white"  className="text-lg font-semibold " x={288} y={500}>
            REDUX TOOLKIT
          </text>
          <circle fill="white" className="" r="7.5" cx="268" cy="495"/>
          <text fill="white"  className="text-lg font-semibold " x={240} y={575}>
            TAILWIND CSS
          </text>
          <circle fill="white" className="" r="7.5" cx="220" cy="570"/>
          <text fill="white"  className="text-lg font-semibold " x={195} y={650}>
            FIGMA
          </text>
          <circle fill="white" className="" r="7.5" cx="175" cy="645"/>
          <text fill="white"  className="text-lg font-semibold " x={160} y={725}>
            SHADCNUI
          </text>
          <circle fill="white" className="" r="7.5" cx="140" cy="720"/>
          <text fill="white"  className="text-lg font-semibold " x={150} y={800}>
            MUI
          </text>
          <circle fill="white" className="" r="7.5" cx="130" cy="792.7"/>

        </svg>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-10 items-center mx-auto mt-7 md:mt-0 ">
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/html-5.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/css-3.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/js.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/physics.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/nextjs-icon.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/redux-icon.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/strapi.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/figma.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/postman-icon.png"} width={75}height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/material-ui.512x406.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/tailwind-css-icon.png"} width={75} height={75}/>
          <Image className="btn-gradient-1 object-contain hover:scale-110 transition-all ease-in-out" src={"/bootstrap-4-icon.png"} width={75 } height={75}/>
        </div>
      </figure>
   
         
         
    </>
  );
};

export default SKills;
