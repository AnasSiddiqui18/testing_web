import Button from "./Button";

function PortfolioSlider({ id, image, label, url }) {
  return (
    <div
      key={id}
      id="card"
      className={`bg-white px-4 p-6 rounded-xl flex flex-col mt-5`}
    >
      <div>
        <img src={image} alt="#" className="rounded-xl w-[380px]" />
      </div>
      <a
        href={url}
        className="text-black font-semibold font-montserrat text-start mt-5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="portfolio-color">{label}👉</Button>
      </a>
    </div>
  );
}

export default PortfolioSlider;
