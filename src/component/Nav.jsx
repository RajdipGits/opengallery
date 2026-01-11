import React from "react";
import { Images } from "lucide-react";

const Nav = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center border-b-gray-300 border-b-2 lg:justify-start">
      <h1 className="font-bold tracking-widest text-xl text-black lg:text-2xl md:text-2xl font-serif flex gap-2">
        OpenGallery <Images strokeWidth={2} />
      </h1>
      
    </div>
  );
};

export default Nav;
