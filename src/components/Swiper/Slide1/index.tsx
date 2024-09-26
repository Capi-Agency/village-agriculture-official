import NextImg from "@/components/common/next-img";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slide1 = () => {
  const slides = [
    {
      id: "01",
      title: "Crop Consulting",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/Frame 1261154501.png",
    },
    {
      id: "02",
      title: "Crop Consulting",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/Frame 1261154502.png",
    },
    {
      id: "03",
      title: "Crop Consulting",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/Frame 1261154503.png",
    },
    {
      id: "04",
      title: "Crop Consulting",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: "/assets/image/Frame 1261154501.png",
    },
  ];
  return (
    <>
      <div className="mt-[60px] lg:block hidden ">
        <Swiper
          spaceBetween={30}
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
          onInit={(swiper) => {
            const progressBar = document.getElementById("custom-progress-bar");
            const slidesPerView = swiper.params.slidesPerView ?? 1;
            if (progressBar && typeof slidesPerView === "number") {
              const totalSlides = swiper.slides.length - slidesPerView + 1;
              const percentage = ((swiper.activeIndex + 1) / totalSlides) * 100;
              progressBar.style.width = `${percentage}%`;
            }
            document
              .getElementById("prevBtn")
              ?.addEventListener("click", () => swiper.slidePrev());
            document
              .getElementById("nextBtn")
              ?.addEventListener("click", () => swiper.slideNext());
          }}
          onSlideChange={(swiper) => {
            const progressBar = document.getElementById("custom-progress-bar");
            const slidesPerView = swiper.params.slidesPerView ?? 1;
            if (progressBar && typeof slidesPerView === "number") {
              const totalSlides = swiper.slides.length - slidesPerView + 1;
              const percentage = ((swiper.activeIndex + 1) / totalSlides) * 100;
              progressBar.style.width = `${percentage}%`;
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-7 rounded-lg transition duration-300 cursor-pointer flex flex-col gap-[64px]" data-aos="fade-up">
                <div className="absolute w-full h-full inset-0 z-0">
                  <div className="relative w-full h-full rounded-lg">
                    <NextImg
                      src={slide.imageUrl}
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5 relative z-10">
                  <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF] mt-1">
                    {slide.id}
                  </span>
                  <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] place-content-end">
                    {slide.title}
                  </h4>
                  <div className="border border-[#FFF] p-3 rounded-full">
                    <div className="relative w-5 h-5">
                      <NextImg
                        src="/assets/icon/north_east.svg"
                        alt="Village-agriculture"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] relative z-10">
                  <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                    standard of quality
                  </span>
                  <p className="text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Progress Bar */}
        <div className="mt-[65px] flex justify-center items-center" data-aos="fade-up">
          <div className="w-[300px] h-[15px] overflow-hidden border border-[#333]">
            <div
              id="custom-progress-bar"
              className="w-0 h-full bg-[#545454] transition ease-in duration-300"
            ></div>
          </div>
          {/* Nút điều hướng tùy chỉnh */}
          <div className="custom-navigation ml-[80px] flex items-center gap-6">
            <button id="prevBtn" className="rounded-full bg-black p-4">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icon/arrow_forward.svg"
                  alt="Village-agriculture"
                  objectFit="cover"
                />
              </div>
            </button>
            <button id="nextBtn" className="rounded-full bg-black p-4">
              <div className="relative w-6 h-6 rotate-180">
                <NextImg
                  src="/assets/icon/arrow_forward.svg"
                  alt="Village-agriculture"
                  objectFit="cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden block mt-[58px]">
        <div className="flex flex-col gap-5">
          {slides.map((slide, index) => (
            <div
              className="relative p-7 rounded-lg transition duration-300 cursor-pointer flex flex-col gap-[64px]"
              key={index} data-aos="fade-up"
            >
              <div className="absolute w-full h-full inset-0 z-0">
                <div className="relative w-full h-full rounded-lg">
                  <NextImg
                    src={slide.imageUrl}
                    alt="Village-agriculture"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-between lg:items-stretch items-center gap-5 relative z-10">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF] mt-1">
                  {slide.id}
                </span>
                <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] 2xl:place-content-end">
                  {slide.title}
                </h4>
                <div className="border border-[#FFF] p-3 rounded-full">
                  <div className="relative w-5 h-5">
                    <NextImg
                      src="/assets/icon/north_east.svg"
                      alt="Village-agriculture"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] relative z-10">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  standard of quality
                </span>
                <p className="text-base font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide1;
