import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiArrowsLeftRight } from "react-icons/pi";

function Portfolio() {
  const [showCard, setshowCard] = useState(false);
  const [showSlider, setshowSlider] = useState(true);

  const handleShowCard = () => {
    setshowCard(true);
    setshowSlider(false);
  };

  const handleShowSlider = () => {
    setshowSlider(true);
    setshowCard(false);
  };

  return (
    <div className="text-white text-center">
      <h2 className="uppercase text-[40px]">Our Portfolio </h2>
      <div className="flex gap-4 justify-center font-Poppins text-2xl mt-3">
        <p
          className={`cursor-pointer flex items-center gap-3 ${
            showCard !== true && "active-link"
          }`}
          onClick={handleShowSlider}
        >
          <PiArrowsLeftRight className="text-2xl" /> Slider View
        </p>
        <p
          className={`cursor-pointer flex gap-3 items-center ${
            showCard && "active-link"
          }`}
          onClick={handleShowCard}
        >
          <BsFillGrid3X3GapFill className={`text-2xl }`} />
          Grid View
        </p>
      </div>
      <PortfolioCard showCard={showCard} showSlider={showSlider} />
    </div>
  );
}

export default Portfolio;
