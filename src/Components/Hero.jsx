import gsap from "gsap";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      "#home_image_parent img",

      {
        y: "-100%",
      },
      {
        y: "0",
        duration: 2,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="h-[100vh] flex  bg-[#27213C]  ">
      <div className="max-container flex flex-col max-lg:items-center max-lg:text-center overflow-hidden relative border-2 border-[#D35269] justify-center px-[30px] py-4">
        <div className="max-w-[500px] flex flex-col gap-[27px] text-white z-10">
          <h1 className="text-[70px]">Ayan GFX</h1>
          <p className="text-2xl">{`"Let's invent something fresh and revolutionize your social media presence!"`}</p>

          <div className="flex gap-5 max-lg:justify-center">
            <button className="bg-[#D35269] px-5 py-3">View Brochure</button>
            <button className="px-5 py-3" id="second-button">
              Visit Fiverr
            </button>
          </div>
        </div>

        <div
          className="grid min-[1300px]:grid-cols-3 grid-cols-2 max-sm:w-[560px] max-[500px]:w-[450px] max-md:w-[700px] w-[800px] absolute top-[-50px] right-[-150px] gap-x-3 gap-y-[20px]  border-2 border-[#D35269] rotate-[12.821deg] bg_[##27213c] px-5 h-auto marquee-container overflow-hidden"
          id="home_image_parent"
        >
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
          <img src="images/home_1.jpg" alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
