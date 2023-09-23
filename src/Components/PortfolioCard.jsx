import { useEffect, useState } from "react";
import { portfolio } from "../constants/Constants";
import gsap from "gsap";
import Button from "./Button";
import PortfolioSlider from "./PortfolioSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function PortfolioCard({ showCard, showSlider }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
  };

  const filteredServices = selectedCategory
    ? portfolio.filter((item) => item.category === selectedCategory)
    : portfolio;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        delay: 0.2,
        y: 0,
      }
    );
  }, [selectedCategory]);

  useEffect(() => {
    if (showCard) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".grid_parent",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );
    }
  }, [showCard]);

  useEffect(() => {
    if (showSlider) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".slider_parent",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );
    }
  }, [showSlider]);

  return (
    <>
      {showCard && (
        <>
          <div className="grid_parent">
            <div className="flex my-[20px] justify-center gap-5 flex-wrap gap-y-[10px]">
              <h3
                onClick={clearFilter}
                className={`${
                  selectedCategory === null ? "active-link" : ""
                } font-Poppins uppercase text-xl  max-sm:text-[13px]  max-md:text-[16px]   font-bold cursor-pointer tracking-[1px] `}
              >
                All
              </h3>
              {Array.from(new Set(portfolio.map((item) => item.category))).map(
                (category) => (
                  <h3
                    key={category}
                    onClick={() => handleClick(category)}
                    className={` ${
                      selectedCategory === category ? "active-link" : ""
                    } cursor-pointer tracking-[1px] text-xl  max-sm:text-[13px] max-md:text-[16px]  uppercase font-Poppins font-bold`}
                  >
                    {category}
                  </h3>
                )
              )}
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 gap-y-12 mt-[40px] shadow-md bg-golden-500">
              {filteredServices.map((value) => (
                <div
                  key={value.id}
                  id="card"
                  className={`bg-white px-4 p-6 rounded-xl flex flex-col `}
                >
                  <div>
                    <img
                      src={value.img}
                      alt="#"
                      className="rounded-xl w-[380px]"
                    />
                  </div>
                  <a
                    href={value.url}
                    className="text-black font-semibold font-montserrat text-start mt-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="portfolio-color">See Project 👉</Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {showSlider && (
        <div className="slider_parent">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={false}
            navigation={{
              clickable: true,
              prevEl: "#arrow_up",
              nextEl: "#arrow_down",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {portfolio.map((value) => (
              <SwiperSlide key={value.id}>
                <PortfolioSlider
                  id={value.id}
                  image={value.img}
                  category={value.category}
                  label={value.label}
                  url={value.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="h-[100%] flex gap-5 justify-end text-center items-start  py-[30px] right-0 w-fit m-auto  mt-3">
            <button
              id="arrow_up"
              className={`w-[40px] arrow_up -rotate-90 border border-[#acacac] rounded-full`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M24,21a1,1,0,0,1-.71-.29L16,13.41l-7.29,7.3a1,1,0,1,1-1.42-1.42l8-8a1,1,0,0,1,1.42,0l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,24,21Z"
                  fill="orange"
                />
              </svg>
            </button>

            <button
              className="w-[40px] arrow_down -rotate-90 border border-[#acacac] rounded-full"
              id="arrow_down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z"
                  fill="orange"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioCard;
