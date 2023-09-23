import { useState } from "react";
import Hero from "./Hero";

function Navbar() {
  const [animationComplete] = useState(false);

  return (
    <>
      <header className="max-container flex justify-between h-10 py-[35px]  items-center px-[30px] absolute translate-x-[-50%] left-[50%] z-10">
        <div className="logo cursor-pointer">
          <img
            className="w-[180px] max-lg:w-[160px] max-sm:w-[140px] max-xsm:w-[130px]"
            src="images/logo.png"
            alt="#"
          />
        </div>
      </header>

      <Hero animationComplete={animationComplete} />
    </>
  );
}

export default Navbar;
