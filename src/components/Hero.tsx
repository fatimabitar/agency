import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full flex flex-col justify-center items-center mt-40 text-center">
        <h1 className="main-title">
          Make your <br /> <span>Platform</span> Perfect
        </h1>
        <p className="lg:text-[21px] sm:text-[18px] ">
          we are a design studio that has completed various projects in the
          field <br /> of technology to perfection.
        </p>
        <button className="btn primary-btn my-9">Get started</button>
      </div>
    </div>
  );
};

export default Hero;
