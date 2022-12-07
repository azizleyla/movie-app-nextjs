import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <div className="font-bold font-neue text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
        <Link className="text-base md:text-2xl" href="/">
          Watch
          <span className="text-red-600">Me</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
