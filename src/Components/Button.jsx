import { twMerge } from "tailwind-merge";

function Button({ children, as = "div", className }) {
  const Comp = as;

  return (
    <Comp
      className={twMerge(
        `text-white text-[1.125rem] text-center hover:scale-[1.05] font-semibold px-[20px] max-lg:text-[16px]  max-sm:text-[12px] max-xsm:text-[10px] py-[8px] rounded-full tracking-wider transition-transform duration-300 ease-in-out cursor-pointer font-Poppins ${className}`
      )}
    >
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
