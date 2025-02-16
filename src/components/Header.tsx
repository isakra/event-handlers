import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        alt="shrek"
        className="rounded-full  hover:rotate-45 transition"
        width={200}
        height={200}
        src={"/shrek.jpg"}
      />
      <h1 className="text-5xl font-extrabold text-green-800">
        Welcome to Shrek's Swamp!
      </h1>
    </div>
  );
};

export default Header;
