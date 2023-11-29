import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";

function Hero() {
  const [revert, setrevert] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({});

    setTimeout(() => {
      tl.fromTo(
        "#heading",
        {
          fontWeight: "normal",
          fontStretch: "normal",
        },

        {
          fontWeight: 100,
          fontStretch: "800%",
        }
      );
      setrevert(true);
    }, 5000);

    {
      revert &&
        setTimeout(() => {
          gsap.to("#heading", {
            fontWeight: "700",
            fontStretch: "600%",
          });
          setrevert(false);
        }, 5000);
    }
  }, [revert]);

  return (
    <div className="bg-[#27213C]">
      <div className=" max-container flex flex-col min-h-[100vh]  h max-lg:items-center max-lg:text-center overflow-hidden relative border-2 border-[#D35269] justify-center px-[30px] py-4">
        <div className="max-w-[500px] flex flex-col gap-[27px] text-white z-10">
          <h1
            className="text-[70px] font-Heading font_stretch font-bold"
            id="heading"
          >
            Ayan GFX
          </h1>
          <p className="text-2xl">{`"Let's invent something fresh and revolutionize your social media presence!"`}</p>

          <div className="flex gap-5 max-lg:justify-center">
            <button className="inline-block bg-[#D35269] px-5 py-3">
              View Brochure
            </button>
            <button className="inline-block px-5 py-3" id="second-button">
              Visit Fiverr
            </button>
          </div>
        </div>

        <img
          src="images/home_right.png"
          alt="#"
          className="absolute bottom-0 right-0"
          id="home_man"
        />
      </div>
    </div>
  );
}

export default Hero;
