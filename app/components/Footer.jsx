import {
  FacebookIcon,
  GitCommit,
  Github,
  Instagram,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 mx-auto w-full flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-10 items-center">
        <Link
          href={"https://www.linkedin.com/in/sahil-chaudhary-b3509a209 "}
          target="_blank"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={"https://github.com/sahil030602"}
          target="_blank"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <Github />
        </Link>

        <Link
          href={
            "https://www.instagram.com/sahil_ac03?utm_source=qr&igsh=MWtnaHk4eDdidnF6bA%3D%3D"
          }
          target="_blank"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <Instagram />
        </Link>

        <Link
          href={"mailto:sahilchaudhary0306@gmail.com"}
          target="_blank"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <MailIcon />
        </Link>
      </div>
      <div className="w-full">
        <hr/>
        <h2 className="text-center mt-5">2024 © All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
