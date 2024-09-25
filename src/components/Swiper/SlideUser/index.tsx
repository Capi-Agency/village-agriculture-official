import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NextImg from "@/components/common/next-img";

const SlideUser = () => {
  const slides = [
    {
      name: "Mr. Joshep Canavi",
      position: "Project Manager",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/user1.png",
    },
    {
      name: "Ms. Tristiana  Linda",
      position: "Human associate manager",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/user2.png",
    },
    {
      name: "Ms. Nguyen Rachel",
      position: "Community Manager",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/user3.png",
    },
    {
      name: "Mr. Joshep Canavi",
      position: "Community Manager",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/user1.png",
    },
  ];
  return (
    <>
      <div className="mt-[72px] lg:mt-[110px] 2xl:mt-[133px] lg:flex lg:flex-row flex-col items-center gap-7 lg:gap-4 hidden">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          grabCursor={true}
          loop={false}
        >
          {slides.map((user, index) => (
            <SwiperSlide key={index}>
              <div data-aos="fade-up">
                <div className="relative w-full h-[362px]">
                  <NextImg
                    src={user.imageUrl}
                    alt="Village-agriculture"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full 2xl:w-[85%] mt-7 2xl:mt-[38px]">
                  <h3 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px]">
                    {user.name}
                  </h3>
                  <span className="text-sm -tracking-[0.42px] leading-[26px] mt-6 2xl:mt-11 mb-[6px]">
                    {user.position}
                  </span>
                  <p className="text-xl -tracking-[0.6px]  leading-[150%] font-light ">
                    {user.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-[72px] lg:mt-[110px] 2xl:mt-[133px] flex lg:flex-row flex-col items-center gap-7 2xl:gap-4 lg:hidden">
        {slides.map((user, index) => (
          <div data-aos="fade-up" key={index}>
            <div className="relative w-full h-[362px]">
              <NextImg
                src={user.imageUrl}
                alt="Village-agriculture"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full 2xl:w-[85%] mt-7 2xl:mt-[38px]">
              <h3 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px]">
                {user.name}
              </h3>
              <span className="text-sm -tracking-[0.42px] leading-[26px] mt-6 2xl:mt-11 mb-[6px]">
                {user.position}
              </span>
              <p className="text-xl -tracking-[0.6px]  leading-[150%] font-light ">
                {user.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideUser;
