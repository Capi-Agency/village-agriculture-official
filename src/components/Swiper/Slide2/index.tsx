import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import NextImg from "@/components/common/next-img";

const slides = [
  {
    src: "/assets/image/sl2-img1.jpg",
    alt: "Village-agriculture",
    description:
      "In the ever-evoling landscape of agriculture, sustainable farming practice have become a cornerstone for ensuring long-term environmental health and the vitality of our framing communities",
  },
  {
    src: "/assets/image/sl2-img2.jpg",
    alt: "Village-agriculture",
    title: "Year",
    description: "// 2024",
  },
  {
    src: "/assets/image/sl2-img3.jpg",
    alt: "Village-agriculture",
    title: "Category",
    description: "// 2024",
  },
  {
    src: "/assets/image/sl2-img3.jpg",
    alt: "Village-agriculture",
    title: "Company",
    description: "// VILLAGE AGRICULTURE",
  },
];

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  const updateProgressBar = (swiper: SwiperType) => {
    // Tìm kiếm cả hai progress bar
    const progressBarLg = document.getElementById("progress-bar-lg");
    const progressBarXl = document.getElementById("progress-bar-xl");

    // Lấy phần tử hiện đang hiển thị
    const progressBar = progressBarLg?.offsetParent
      ? progressBarLg
      : progressBarXl;
    if (!progressBar) return;

    const totalSlides = slides.length;
    const percentage = ((swiper.activeIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${percentage}%`;
  };

  return (
    <>
      {/* lg, 2xl */}
      <div className="lg:block hidden">
        <div className="grid lg:grid-cols-2 items-center mt-[68px] lg:mt-[110px] 2xl:mt-[150px]">
          <div data-aos="fade-up">
            <p className="text-[36px] lg:text-[44px] 2xl:text-[64px] leading-[44px] lg:leading-[64px] -tracking-[1.92px]">
              Real <span className="font-bold">Solutions</span>, <br />
              Real
              <span className="font-bold"> Results</span>
            </p>
          </div>
          <div className="lg:flex flex-col gap-10 items-end hidden">
            <p className="flex flex-col gap-[15px]" data-aos="fade-up">
              <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
                &#47;&#47; Farmers by Heart
              </span>
              <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#333] pl-[109px]">
                Stewards by Choise.
              </span>
            </p>
            <p
              className="text-2xl -tracking-[0.72px]  leading-[180%] text-right w-[90%] text-[#545454]"
              data-aos="fade-up"
            >
              {slides[0]?.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid lg:grid-cols-[65%,35%] 2xl:grid-cols-2 lg:gap-4 2xl:gap-5 mt-[50px]">
          {/* Slider chính */}
          <div className="relative w-full">
            <Swiper
              loop={false}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs]}
              className="mySwiper2 w-full"
              allowTouchMove={false}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              onSwiper={(swiper) => {
                setMainSwiper(swiper);
                updateProgressBar(swiper); // Cập nhật thanh tiến trình khi khởi tạo
              }}
              onSlideChange={(swiper) => {
                updateProgressBar(swiper); // Cập nhật thanh tiến trình khi slide thay đổi
              }}
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[598px] rounded-lg">
                    <NextImg
                      src={image.src}
                      alt={image.alt}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider thumbnail */}
          <div className="flex flex-col">
            <Swiper
              loop={false}
              spaceBetween={12}
              breakpoints={{
                1440: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              freeMode={true}
              watchSlidesProgress={true}
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper w-full"
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[290px] rounded-lg">
                    <NextImg
                      src={image.src}
                      alt={image.alt}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thanh tiến trình */}
            <div className="flex flex-row justify-between ml-[30%] lg:hidden 2xl:flex mt-[90px]">
              <div
                className="prev text-[32px] -tracking-[0.96px] text-[#333] leading-[32px] cursor-pointer"
                onClick={() => {
                  if (mainSwiper) {
                    mainSwiper.slidePrev();
                    updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
                  }
                }}
              >
                Prev
              </div>
              <div className="bg-[#D9D9D9] w-[148px] h-[10px] place-self-end mb-2">
                <div
                  id="progress-bar-xl"
                  className="w-0 h-full bg-[#545454] transition ease-in duration-300"
                ></div>
              </div>
              <div className="flex items-center gap-3 place-self-end">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className="text-base font-bold -tracking-[0.48px] text-[#545454] leading-[28px] cursor-pointer"
                    onClick={() => {
                      if (mainSwiper) {
                        mainSwiper.slideTo(index); // Chuyển đến slide tương ứng
                        updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
                      }
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}{" "}
                  </span>
                ))}
              </div>
              <div
                className="next text-[32px] -tracking-[0.96px] text-[#333] leading-[32px] cursor-pointer"
                onClick={() => {
                  if (mainSwiper) {
                    mainSwiper.slideNext();
                    updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
                  }
                }}
              >
                Next
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:flex justify-between hidden mx-auto w-[55%] mt-[60px] 2xl:hidden"
          data-aos="fade-up"
        >
          <div
            className="prev text-[32px] -tracking-[0.96px] text-[#333] leading-[32px] cursor-pointer"
            onClick={() => {
              if (mainSwiper) {
                mainSwiper.slidePrev();
                updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
              }
            }}
          >
            Prev
          </div>
          <div className="bg-[#D9D9D9] w-[148px] h-[10px] place-self-end mb-2">
            <div
              id="progress-bar"
              className="w-0 h-full bg-[#545454] transition ease-in duration-300"
            ></div>
          </div>
          <div className="flex items-center gap-3 place-self-end">
            {slides.map((_, index) => (
              <span
                key={index}
                className="text-base font-bold -tracking-[0.48px] text-[#545454] leading-[28px] cursor-pointer"
                onClick={() => {
                  if (mainSwiper) {
                    mainSwiper.slideTo(index); // Chuyển đến slide tương ứng
                    updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
                  }
                }}
              >
                {String(index + 1).padStart(2, "0")}{" "}
              </span>
            ))}
          </div>
          <div
            className="next text-[32px] -tracking-[0.96px] text-[#333] leading-[32px] cursor-pointer"
            onClick={() => {
              if (mainSwiper) {
                mainSwiper.slideNext();
                updateProgressBar(mainSwiper); // Cập nhật thanh tiến trình
              }
            }}
          >
            Next
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 justify-between lg:mt-[70px] 2xl:mt-0"
          data-aos="fade-up"
        >
          <div className="flex items-center 2xl:flex justify-between lg:grid lg:grid-cols-2 lg:gap-[50px]">
            {slides.map((slide, index) => {
              if (index > 0) {
                return (
                  <div
                    className="flex flex-col gap-1 place-self-end lg:place-self-auto"
                    key={index}
                  >
                    <span className="text-base font-medium -tracking-[0.48px] text-[#545454]">
                      {slide.title}
                    </span>
                    <span className="text-base font-bold -tracking-[0.48px] text-[#545454]">
                      {slide.description}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[64px] -tracking-[1.92px] leading-[64px] text-[#545454]">
              Portfolio
            </span>
            <span className="text-[64px] font-medium -tracking-[1.92px] leading-[64px] text-[#545454]">
              &#47;&#47; 2024
            </span>
          </div>
        </div>
      </div>
      {/* slide 2 mobile */}
      <div className="mt-[68px] lg:hidden block">
        <div data-aos="fade-up">
          <p className="text-[36px] lg:text-[44px] 2xl:text-[64px] leading-[44px] lg:leading-[64px] -tracking-[1.92px]">
            Real <span className="font-bold">Solutions</span>, <br />
            Real
            <span className="font-bold"> Results</span>
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-[50px]">
          {slides.map((slide, index) => {
            if (index === 0) {
              return (
                <>
                  <div
                    key={index}
                    className="relative w-full h-[598px] rounded-lg"
                    data-aos="fade-up"
                  >
                    <NextImg
                      src={slide.src}
                      alt={slide.alt}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p
                    className="text-[16px] 2xl:text-2xl -tracking-[0.72px] leading-[180%] text-right text-[#545454]"
                    data-aos="fade-up"
                  >
                    {slide.description}
                  </p>
                </>
              );
            }
            return null; 
          })}
        </div>

        <div className="flex flex-col">
          {slides.slice(1).map((slide, index) => (
            <>
              <div
                key={index}
                className="relative w-full h-[290px] rounded-lg mt-10"
                data-aos="fade-up"
              >
                <NextImg
                  src={slide.src}
                  alt={slide.alt}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div
                className="flex items-center gap-[55px] mt-3"
                data-aos="fade-up"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium -tracking-[0.48px] text-[#545454]">
                    {slide.title}
                  </span>
                  <span className="text-base font-bold -tracking-[0.48px] text-[#545454]">
                    {slide.description}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
