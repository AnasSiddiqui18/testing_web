function ServicesCard({ head, img }) {
  const h4Style = {
    backgroundImage: `url(${img})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    color: "white",
    boxShadow: "0px 0px 10px grey",
  };

  return (
    <div
      className="mt-[35px] text-center  max-w-[100%] max-sm:w-[400px]  m-auto h-[320px] text-black rounded-md relative mb-[50px] border border-gray-300 flex items-end justify-center"
      style={h4Style}
    >
      <div className="w-[100%] bg-white py-2">
        <h4 className="text-[16px] tracking-[1px] font-bold text-black">
          {head}
        </h4>
      </div>
    </div>
  );
}

export default ServicesCard;
