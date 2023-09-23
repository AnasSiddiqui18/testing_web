function ClientCards({ head, rating, desc }) {
  return (
    <div className="text-white flex flex-col h-[260px] bg-gray-950 mb-[40px] rounded-md py-4 px-4  w-[100%] relative border-2 border-[#bbcee6]">
      <div className="flex flex-col gap-3 ">
        <h3 className="text-2xl font_stretch">{head}</h3>
        <h5>{rating}</h5>
      </div>
      <p className="mt-[25px]">{desc}</p>

      <img
        src="images/mount1.png"
        alt="no-img"
        className="w-[150px] absolute right-0 bottom-0"
      />
    </div>
  );
}

export default ClientCards;
