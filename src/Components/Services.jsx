import { services } from "../constants/Constants";

function Services() {
  return (
    <div className="text-white text-center font-bold relative ">
      <img
        src="images/services_dribble.png"
        alt="#"
        className="absolute doodle top-[-10px] right-[-40px] -z-10"
      />
      <h2 className="mt-10 uppercase text-[40px]">Our Services</h2>

      <p className="font-light">
        “We don't just sell products, we provide solutions.”
      </p>
      <div className="grid grid-cols-3 bg-black border border-[#ffe] rounded-md mt-20">
        {services.map((service) => (
          <div
            key={service.id}
            id="service_box"
            className="h-[200px] flex items-center justify-center px-3 py-3 border border-[#eee]"
            style={{
              backgroundImage: `url(${service.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p className="tracking-[1px]">{service.head}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
