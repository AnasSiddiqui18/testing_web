import Lottie from "lottie-react";
import star from "/src/Json/star.json";
import { clients } from "../constants/Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ClientCards from "./ClientCards";

function Clients() {
  return (
    <div
      className="background-clients h-[100vh] py-8 flex flex-col relative items-center"
      id="client_parent"
    >
      <img
        src="/images/doodle.png"
        alt="#"
        className="w-[400px] -z-10 absolute top-[-250px] right-[-40px] doodle"
      />

      <div className="text-white mt-2">
        <h2 className="uppercase text-[40px] text-center relative w-fit m-auto ">
          Customer Reviews
          <Lottie
            className="w-[100px]  absolute bottom-[-20%] right-[-20%]"
            animationData={star}
          />
        </h2>
      </div>

      <div className="mt-[50px] max-container absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientCards
                head={client.head}
                rating={client.rating}
                desc={client.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
