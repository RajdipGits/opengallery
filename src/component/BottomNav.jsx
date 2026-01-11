import React from "react";
import { Github, Images, Instagram, Linkedin } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center flex-col border-t-2 border-t-gray-500 gap-5">
      <h1 className="font-bold tracking-widest text-xl text-black lg:text-2xl md:text-2xl font-serif flex gap-2">
        OpenGallery <Images strokeWidth={2} />
      </h1>
      <div className="flex flex-col justify-center items-center gap-2.5">
        <div className="flex gap-6">
          <a
            href="https://github.com/RajdipGits"
            className="bg-black p-1.5 rounded-xl"
          >
            <Github color="white" />
          </a>
          <a
            href="https://www.instagram.com/rajdippp___/"
            className="bg-black p-1.5 rounded-xl"
          >
            <Instagram color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajdip-das01"
            className="bg-black p-1.5 rounded-xl"
          >
            <Linkedin color="white"/>
          </a>
        </div>
        <p>
          © 2026 Rajdip Das – <a href="https://github.com/RajdipGits/opengallery">OpenGallery </a>|{" "}
          <a href="">MIT License</a>
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
