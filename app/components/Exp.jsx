import React from "react";

const Exp = () => {
  return (
    <div className="mt-20 ">
      <div className="text-center">
        <h1 className="font-bold md:text-5xl text-2xl">EXPERIENCE</h1>
        <p className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text tracking-[10px]">
          EXPLORE NOW
        </p>
      </div>
      <div className=" w-full md:w-2/3 mx-auto mt-16 pl-5 md:pl-0">
        <p className="flex gap-3 md:justify-between text-md md:text-lg font-semibold">
          Outamation Technologies <br /> Ahmedabad Junior Web Developer (Intern)
          <span className="text-gray-300 text-sm md:text-lg"> January 2024 - May 2024</span>
        </p>
        <p className="text-left my-3">
          Assisted in the design of user interface features, site animation and
          special effects. Built the website or project for myself to submit in
          college for the final sem and created a great user interfaced webpage
          and many more Developed complex web applications using HTML, CSS,
          JavaScript and Reactjs technologies.
        </p>
        <p className=" flex gap-3 md:justify-between text-md md:text-lg mt-7   font-semibold">
          Demaze Technologies <br /> Ahmedabad Junior Web Developer (Intern)
          <span className="text-gray-300">May 2024 - PRESENT</span>
        </p>
        <p className="text-left my-3">
          Next.js is a React framework for building web applications that can
          help you create server-side rendered apps. Automatic code splitting:
          Splits the code into smaller chunks, making it easier to load and more
          performant. Dynamic HTML streaming: Instantly streams UI from the
          server. Route handlers: Build API endpoints to securely connect with
          third-party services. Shadcn UI to create applications that are both
          beautiful and accessible to all users. Fine-grained control and
          extensibility.
        </p>
      </div>
    </div>
  );
};

export default Exp;
