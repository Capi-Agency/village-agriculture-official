import Footer from "@/components/common/Footer/page";
import Header from "@/components/common/Header/page";
import NextImg from "@/components/common/next-img";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import { FreeMode, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative container mt-[117px]">
        <div className="relative w-full h-[1012px]">
          <NextImg
            src="/assets/image/Rectangle 171.png"
            alt="Village-agriculture"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[53%] flex items-center justify-center text-[72px] font-bold -tracking-[2.16px] text-white mx-auto text-center leading-[84px]">
          Discover the Cutting - Edge World of Modern Agriculture
        </p>
        <div className="absolute left-[10%] top-[60%] flex flex-col gap-[15px]">
          <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#FFF]">
            // Farmers by Heart
          </span>
          <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#FFF] pl-[109px]">
            Stewards by Choise.
          </span>
        </div>
        <div className="h-[2px] w-[90%] border border-white absolute bottom-[19%]"></div>
        <div className="absolute bottom-20 left-[10%] right-[10%]">
          <div className="flex item-center justify-between">
            <div className="flex items-center gap-14">
              <span className="text-[24px] -tracking-[0.72px] leading-[32px] text-[#FFF]">
                [ Organic Farming ]
              </span>
              <span className="text-[24px] -tracking-[0.72px] leading-[32px] text-[#FFF]">
                [ Food & Beverage ]
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[24px] -tracking-[0.72px] leading-[32px] text-[#FFF]">
                [ Farming ]
              </span>
              <span className="text-[24px] -tracking-[0.72px] leading-[32px] text-[#FFF]">
                [ Global Agriculture ]
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[106px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-8">
              <span className="leading-[64px] -tracking-[1,92px] font-medium text-[64px] text-[#333]">
                40+
              </span>
              <span className="text-[#545454] leading-[32px] text-2xl">
                Year of Experiences
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="leading-[64px] -tracking-[1,92px] font-medium text-[64px] text-[#333]">
                190+
              </span>
              <span className="text-[#545454] leading-[32px] text-2xl">
                Fields in Process
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="leading-[64px] -tracking-[1,92px] font-medium text-[64px] text-[#333]">
                126,000+
              </span>
              <span className="text-[#545454] leading-[32px] text-2xl">
                Farmer Around World
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="leading-[64px] -tracking-[1,92px] font-medium text-[64px] text-[#333]">
                $14 Billion
              </span>
              <span className="text-[#545454] leading-[32px] text-2xl">
                Agricultural Product
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-[89px]">
            <div className="flex flex-col gap-[15px]">
              <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
                // Farmers by Heart
              </span>
              <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454] pl-[109px]">
                Stewards by Choise.
              </span>
            </div>
            <p className="text-[24px] leading-[180%] -tracking-[0.72px] text-[#545454]">
              In the ever-evoling landscape of agriculture, sustainable farming
              practice have become a cornerstone for ensuring long-term
              environmental health and the vitality of our framing communities
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-[64px] font-bold leading-[64px] -tracking-[1.92px] text-[#333] mt-[38px]">
            Rooted in Tradition, <br /> Growing for the Future
          </h1>
          <div className="flex items-center justify-between mt-[136px]">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Mission
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
          <div className="mt-[136px] grid grid-cols-[30%,40%,20%] justify-between">
            <span className="text-[64px] font-bold leading-[64px] -tracking-[1.92px] text-[#545454]">
              What we do
            </span>
            <p className="text-[24px] leading-[180%] -tracking-[0.72px] text-[#545454]">
              In the ever-evoling landscape of agriculture, sustainable farming
              practice have become a cornerstone for ensuring
            </p>
            <button className="text-2xl -tracking-[0.72px] font-semibold text-[#FFF] px-16 py-4 bg-[#545454] rounded-full h-20">
              All Benefits
            </button>
          </div>
          {/* <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </section>
      <section className="mt-[136px] container">
        <div className="flex items-center justify-between mt-[136px]">
          <span className="text-[32px] -tracking-[1px] text-[#545454]">
            Meet Us
          </span>
          <div className="border border-[#333] h-[1px] w-[200px]"></div>
          <div className="relative w-[275px] h-[36px]">
            <NextImg
              src="/assets/icon/Horizontal Logo.svg"
              alt="BannerHeader"
              objectFit="cover"
            />
          </div>
          <div className="border border-[#333] h-[1px] w-[255px]"></div>
          <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
            © 2024
          </span>
        </div>
        <div className="mt-[133px] flex items-center gap-4">
          <div>
            <div className="relative w-full h-[362px]">
              <NextImg
                src="/assets/image/user1.png"
                alt="Village-agriculture"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[85%] mt-[38px]">
              <h3 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px]">
                Mr. Joshep Canavi
              </h3>
              <span className="text-sm -tracking-[0.42px] leading-[26px] mt-11 mb-[6px]">
                Project Manager
              </span>
              <p className="text-xl -tracking-[0.6px]  leading-[150%] font-light ">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[362px]">
              <NextImg
                src="/assets/image/user2.png"
                alt="Village-agriculture"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[85%] mt-[38px]">
              <h3 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px]">
                Ms. Tristiana Linda
              </h3>
              <span className="text-sm -tracking-[0.42px] leading-[26px] mt-11 mb-[6px]">
                Human associate manager
              </span>
              <p className="text-xl -tracking-[0.6px]  leading-[150%] font-light ">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[362px]">
              <NextImg
                src="/assets/image/user3.png"
                alt="Village-agriculture"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[85%] mt-[38px]">
              <h3 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px]">
                Ms. Nguyen Rachel
              </h3>
              <span className="text-sm -tracking-[0.42px] leading-[26px] mt-11 mb-[6px]">
                Community Manager
              </span>
              <p className="text-xl -tracking-[0.6px]  leading-[150%] font-light ">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[108px] container">
        <div className="flex items-center justify-between mt-[136px]">
          <span className="text-[32px] -tracking-[1px] text-[#545454]">
            Our Work
          </span>
          <div className="border border-[#333] h-[1px] w-[200px]"></div>
          <div className="relative w-[275px] h-[36px]">
            <NextImg
              src="/assets/icon/Horizontal Logo.svg"
              alt="BannerHeader"
              objectFit="cover"
            />
          </div>
          <div className="border border-[#333] h-[1px] w-[255px]"></div>
          <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
            © 2024
          </span>
        </div>
        <div className="grid grid-cols-2 items-center mt-[150px]">
          <div>
            <p className="text-[64px] leading-[64px] -tracking-[1.92px]">
              Real <span className="font-bold">Solutions</span>, <br />
              Real
              <span className="font-bold">Results</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 items-end">
            <p className="flex flex-col gap-[15px]">
              <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
                // Farmers by Heart
              </span>
              <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#333] pl-[109px]">
                Stewards by Choise.
              </span>
            </p>
            <p className="text-2xl -tracking-[0.72px]  leading-[180%] text-right w-[90%] text-[#545454]">
              In the ever-evoling landscape of agriculture, sustainable farming
              practice have become a cornerstone for ensuring long-term
              environmental health and the vitality of our framing communities
            </p>
          </div>
        </div>
      </section>
      <section className="container mt-120px">
        <div className="flex items-center justify-between mt-[136px]">
          <span className="text-[32px] -tracking-[1px] text-[#545454]">
            Blog
          </span>
          <div className="border border-[#333] h-[1px] w-[200px]"></div>
          <div className="relative w-[275px] h-[36px]">
            <NextImg
              src="/assets/icon/Horizontal Logo.svg"
              alt="BannerHeader"
              objectFit="cover"
            />
          </div>
          <div className="border border-[#333] h-[1px] w-[255px]"></div>
          <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
            © 2024
          </span>
        </div>
        <div className="flex items-center justify-between mt-[103px]">
          <p className="text-[32px] -tracking-[0.96px]  leading-[32px] text-left text-[#545454]">
            // All
          </p>
          <h1 className="text-[64px] font-bold leading-[64px] -tracking-[1.92px] text-[#333] flex-grow text-center">
            Sustainable Farming 101
          </h1>
        </div>
        <div className="mt-[116px] relative">
          <div className="relative w-full h-[720px]">
            <NextImg
              src="/assets/image/Rectangle 166.png"
              alt="Village-agriculture"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(23,23,23,0.50)] h-full rounded-lg"></div>
          <h2 className="text-[64px] font-medium leading-[64px] -tracking-[1.92px] text-[#FFF] absolute top-[104px] left-[84px] w-[70%]">
            The Sustainable Agriculture Innovation and Practices Symposium
          </h2>
          <p className="flex flex-col gap-8 items-end absolute top-[104px] right-[111px]">
            <span className="text-[48px] font-medium leading-none -tracking-[1.44px] text-[#FFF] underline">
              Jan 2024
            </span>
            <span className="text-[24px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Feb 2024
            </span>
            <span className="text-[24px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Mar 2024
            </span>
            <span className="text-[24px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Apr 2024
            </span>
            <span className="text-[24px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              May 2024
            </span>
            <span className="text-[24px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Jun 2024
            </span>
          </p>
          <button className="px-[56px] py-2 bg-[#FFF] text-[#333] text-[18px] font-semibold -tracking-[0.54px] leading-[48px] absolute left-[76px] bottom-[105px] rounded-full">
            Join Now
          </button>
        </div>
        <div className="mt-[104px] grid grid-cols-[30%,55%] items-center justify-between">
          <div className="flex flex-col gap-[15px]">
            <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
              // Farmers by Heart
            </span>
            <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#333] pl-[109px]">
              Stewards by Choise.
            </span>
          </div>
          <p className="text-[24px] leading-[28px] -tracking-[0.72px] text-[#545454] text-right">
            In the ever-evoling landscape of agriculture, sustainable farming
            practice have become a cornerstone for ensuring long-term
            environmental health and the vitality of our framing communities
          </p>
        </div>
      </section>
      <section className="mt-[210px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Our Stories
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
          <div className="mt-[182px] flex justify-end">
            <p className="text-[48px] -tracking-[1.44px]  leading-[64px] text-[#545454] text-right w-[70%]">
              Lorem Ipsum is simply dummy text of&nbsp;
              <span className="font-medium text-[#333]">
                the printing and typesetting industry
              </span>
              . Lorem Ipsum has been&nbsp;
              <span className="font-medium text-[#333]">
                the industry&apos;s standard dummy text ever since the 1500s
              </span>
            </p>
          </div>
          <div className="grid grid-cols-[35%,65%] mt-[140px]">
            <div className="relative">
              <ul className="flex flex-col gap-8 absolute top-24 left-0">
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  // All
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  // New
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  // Tranding
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  // Organic Farming
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  // Vertical Farming
                </li>
              </ul>
              <div className="flex flex-col text-right absolute bottom-0 left-0">
                <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
                  // Nourishing the Land
                </span>
                <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
                  Cultivating Communities
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex gap-6">
                <div>
                  <div className="relative w-full h-[302px]">
                    <NextImg
                      src="/assets/image/Rectangle 163.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-[44px] mb-4">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-[136px]">
                    Learn More
                  </button>
                </div>
                <div>
                  <div className="relative w-full h-[589px]">
                    <NextImg
                      src="/assets/image/Rectangle 164.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-[44px] mb-4">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-[53px]">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="mt-[140px] flex gap-6">
                <div>
                  <div className="relative w-full h-[302px]">
                    <NextImg
                      src="/assets/image/Rectangle 161.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-[44px] mb-4">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-[136px]">
                    Learn More
                  </button>
                </div>
                <div>
                  <div className="relative w-full h-[589px]">
                    <NextImg
                      src="/assets/image/Rectangle 162.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-[44px] mb-4">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-[53px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[117px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Sustainability
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
          <div className="mt-[180px] flex justify-end">
            <p className="text-[48px] -tracking-[1.44px]  leading-[64px] text-[#545454] text-right w-full">
              Lorem Ipsum is simply dummy text of&nbsp;
              <span className="font-medium text-[#333]">
                the printing and typesetting industry
              </span>
              . Lorem Ipsum has been&nbsp;
              <span className="font-medium text-[#333]">
                the industry&apos;s standard dummy text ever since the 1500s
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-[50px]">
            <p className="text-[24px] -tracking-[0.72px]  leading-[64px] text-[#545454] font-light">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <button className="text-2xl -tracking-[0.72px] font-semibold text-[#FFF] px-16 py-4 bg-[#545454] rounded-full h-20">
              All Benefits
            </button>
          </div>
          <div className="flex flex-col text-right justify-end mt-[91px]">
            <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
              // Sustainable Arigculture,
            </span>
            <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
              Shared Values.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-7 rounded-lg bg-[#545454] hover:bg-[#333] transition duration-300 cursor-pointer h-[350px]">
              <div className="flex justify-between gap-5">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF] mt-1">
                  01
                </span>
                <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] place-content-end">
                  Quality Assurxance
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
              <div className="mt-[106px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  standard of quality
                </span>
                <p className="text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  Our products and service meet the highest standards of
                  quality. ensuring a reliable and consistent experience for our
                  customers.
                </p>
              </div>
            </div>
            <div className="p-7 rounded-lg bg-[#545454] hover:bg-[#333] transition duration-300 cursor-pointer mt-[83px] h-[350px]">
              <div className="flex justify-between gap-5">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF] mt-1">
                  02
                </span>
                <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] place-content-end">
                  Sustainability
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
              <div className="mt-[106px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  Friendly Farming
                </span>
                <p className="text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  We are committed to sustainable and eco-friendly farming
                  practice, aiming to contribute to healthier planet and more
                  resilient agriculture industry.
                </p>
              </div>
            </div>
            <div className="p-7 rounded-lg bg-[#545454] hover:bg-[#333] transition duration-300 cursor-pointer mt-[211px] h-[350px]">
              <div className="flex justify-between gap-5">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF] mt-1">
                  03
                </span>
                <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] place-content-end">
                  Expert Guidance
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
              <div className="mt-[106px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  Agronomist
                </span>
                <p className="text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  Benefit from the expertise of our seasoned agronomist and
                  specialists who are dedicated to supporting your farming
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right float-start">
            <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
              // Cultivating Dreams,
            </span>
            <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
              Showing Success.
            </span>
          </div>
        </div>
      </section>
      <section className="mt-[250px] mb-[200px] container">
        <div className="relative">
          <div className="relative w-full h-[512px]">
            <NextImg
              src="/assets/image/Rectangle 160.png"
              alt="Village-agriculture"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(23,23,23,0.50)] h-full rounded-lg"></div>
          <h2 className="text-[64px] font-medium leading-[64px] -tracking-[1.92px] text-[#FFF] absolute top-[109px] left-1/2 -translate-x-1/2 w-[50%] text-center">
            Join the Agricultural Revolution
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[127px] ">
            <form className="relative">
              <input
                type="text"
                className="px-8 py-2 bg-[#FFF] text-[#333] text-[18px] font-semibold -tracking-[0.54px] leading-[48px] rounded-full w-[410px] placeholder:text-text-[18px] placeholder:font-semibold placeholder:-tracking-[0.54px] placeholder:text-[#333] focus:outline-none"
                placeholder="Your email address"
              />
              <button className="px-8 py-2 bg-[#404040] text-[#FFF] text-[18px] font-semibold -tracking-[0.54px] rounded-full absolute right-2 top-1 bottom-1" type="submit">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
