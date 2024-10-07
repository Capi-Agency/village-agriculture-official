import React from 'react';
import NextImg from 'next/image'; 

interface SectionProps {
    title: string; 
    className?: string;
  }
const Section = ({ title, className }:SectionProps ) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 2xl:gap-8 ${className}`}
      data-aos="fade-up"
    >
      <span className="text-[24px] 2xl:text-[32px] text-[#545454] font-medium">
        {title} 
      </span>

      <div className="flex-1 flex items-center">
        <div className="bg-[#333] h-[1px] 2xl:h-[2px] w-full"></div>
      </div>

      <div className="relative w-[180px] lg:w-[360px] lg:h-[48px] h-[24px]">
        <NextImg
          src="/assets/icon/HorizontalLogo.svg"
          alt="BannerHeader"
          objectFit="contain"
          className=""
          width={367}
          height={48}
        />
      </div>

      <div className="hidden 2xl:flex flex-1 items-center">
        <div className="bg-[#333] h-[1px] 2xl:h-[2px] w-full"></div>
      </div>

      <span className="hidden 2xl:block text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
        © 2024
      </span>
    </div>
  );
};

export default Section;
