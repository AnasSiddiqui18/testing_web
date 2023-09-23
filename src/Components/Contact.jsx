import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";

function Contact() {
  return (
    <div className="text-white text-center text-2xl relative">
      <div className="max-container">
        <p className="text-green-500 text-2xl tracking-[1px]">
          {`"So, what are you waiting for?"`}
        </p>

        <h3 className="font-Heading font_stretch  relative text-[45px] w-[750px] uppercase m-auto mt-6 leading-[70px] ">
          Partner with Us to create a compelling narrative for your Brand!{" "}
          <span className="bg-orange-600 w-[290px] -z-10 top-[75px] rounded-md rotate-[4deg] left-[50px] h-[62px] absolute"></span>
        </h3>
        <div className="flex justify-center gap-8 mt-10">
          <a href="https://api.whatsapp.com/send/?phone=%2B14709248301&text&type=phone_number&app_absent=0">
            <BsWhatsapp className="border-dashed border p-5 h-[80px] w-[80px] rounded-lg  hover:text-green-300 hover:border-green-300" />
          </a>
          <a href="mailto:ayangfxonlineagency@gmail.com">
            <AiOutlineMail className="border-dashed border p-5 h-[80px] w-[80px] rounded-lg hover:text-green-300 hover:border-green-300" />
          </a>
          <a href="https://www.fiverr.com/ayangfxagency">
            <TbBrandFiverr className="border-dashed border p-5 h-[80px] w-[80px] rounded-lg hover:text-green-300 hover:border-green-300" />
          </a>
          <a href="https://forms.gle/Ku1z3VFUoj8jcbJcA">
            <SiGoogleforms className="border-dashed border p-5 h-[80px] w-[80px] rounded-lg hover:text-green-300 hover:border-green-300" />
          </a>
        </div>
      </div>
      <div className=" w-[100%] h-[50px] mt-5"></div>
    </div>
  );
}

export default Contact;
