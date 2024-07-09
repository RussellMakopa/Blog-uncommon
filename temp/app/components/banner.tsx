import React from "react";

interface bannerProps {}

const Banner = ({}: bannerProps): JSX.Element => {
  return (
    <div className="p-[5%] pt-[4%] md:pb-[2.5%] lg:h-auto lg:pb-[1.2%] text-center flex flex-col gap-5  items-center justify-center mt-[-5%]">
      <h1 className="font-secondary text-5xl lg:text-[64px] mb-0 mt-[40px] md:mt-0">
        notes from the field
      </h1>
      <p className=" text-xl lg:text-3xl xl:text-[24px] max-w-[1100px] leading-[30px] mb-[20px] md:mb-0">
        Check out our blog for the latest news & updates from the Uncommon team.
      </p>
    </div>
  );
};

export default Banner;
