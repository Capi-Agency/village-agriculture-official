"use client";

import NextImg from "@/components/common/next-img";
import Section from "@/components/common/Section";
import Slide1 from "@/components/Swiper/Slide1/index";
import Slide2 from "@/components/Swiper/Slide2";
import SlideUser from "@/components/Swiper/SlideUser";
import CountUp from "react-countup";

export default function Home() {
  return (
    <div>
      {/* Begin: banner */}
      <section className="container mt-10 lg:mt-[81px] 2xl:mt-[117px]">
        <div className="relative" data-aos="fade-up">
          <div className="relative w-full pt-[80%]" data-aos="fade-up">
            <NextImg
              src="/assets/image/Rectangle 171.png"
              alt="Village-agriculture"
              objectFit="cover"
              className="absolute top-0 left-0 rounded-lg"
            />
          </div>

          <p className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[55%] xl:w-[50%] 2xl:w-[60%] flex items-center justify-center text-2xl md:text-[48px] 2xl:text-[72px] font-bold -tracking-wide text-white mx-auto text-center md:leading-[64px] 2xl:leading-[1.15]">
            Discover the Cutting - Edge World of Modern Agriculture
          </p>

          <div className="absolute left-0 top-[60%] px-5 lg:px-14 flex flex-col md:gap-3">
            <span className="text-xs md:text-[24px] 2xl:text-[32px] lg:leading-normal text-[#FFF]">
              &#47;&#47; Farmers by Heart
            </span>
            <span className="text-xs md:text-[24px] 2xl:text-[32px] lg:leading-normal font-medium text-[#FFF] pl-[40px] lg:pl-[109px]">
              Stewards by Choise.
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t-[1px] md:border-t-[2px] border-white mx-5 2xl:mx-0">
            <div className="flex flex-col md:flex-row item-center justify-between gap-2 px-0 lg:px-8 2xl:px-12 py-4 md:py-10 2xl:py-20 text-white">
              <div className="flex items-center gap-1 md:gap-2 2xl:gap-14">
                <span className="text-[10px] md:text-base 2xl:text-[24px]">
                  [ Organic Farming ]
                </span>
                <span className="text-[10px] md:text-base 2xl:text-[24px]">
                  [ Food & Beverage ]
                </span>
              </div>

              <div className="flex items-center gap-1 md:gap-2 2xl:gap-4">
                <span className="text-[10px] md:text-base 2xl:text-[24px]">
                  [ Farming ]
                </span>
                <span className="text-[10px] md:text-base 2xl:text-[24px]">
                  [ Global Agriculture ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[60px] 2xl:mt-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[48px] lg:gap-0">
            <div className="flex flex-col items-center 2xl:items-start 2xl:gap-4">
              <span className="font-medium text-[40px] 2xl:text-[64px] text-[#333]">
                <CountUp start={0} end={40} duration={4} />+
              </span>
              <span className="text-[#545454] text-2xl">
                Year of Experiences
              </span>
            </div>

            <div className="flex flex-col items-center 2xl:items-start 2xl:gap-4">
              <p className="font-medium text-[40px] 2xl:text-[64px] text-[#333]">
                <CountUp start={0} end={190} duration={4} />+
              </p>
              <span className="text-[#545454] text-2xl">Fields in Process</span>
            </div>
            <div className="flex flex-col items-center 2xl:items-start 2xl:gap-4">
              <p className="font-medium text-[40px] 2xl:text-[64px] text-[#333]">
                <CountUp
                  start={100000}
                  end={126000}
                  duration={4}
                  formattingFn={(value) =>
                    new Intl.NumberFormat("en-US").format(value)
                  }
                />
                +
              </p>
              <span className="text-[#545454] text-2xl">
                Farmer Around World
              </span>
            </div>
            <div className="flex flex-col items-center 2xl:items-start 2xl:gap-4">
              <span className="font-medium text-[40px] 2xl:text-[64px] text-[#333]">
                $<CountUp start={0} end={14} duration={3} /> Billion
              </span>
              <span className="text-[#545454] text-2xl">
                Agricultural Product
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-[89px] gap-6 lg:gap-0">
            <div className="flex flex-col lg:gap-4" data-aos="fade-up">
              <span className="text-base lg:text-[24px] 2xl:text-[32px] lg:leading-[32px] text-[#545454]">
                &#47;&#47; Farmers by Heart
              </span>
              <span className="text-base lg:text-[24px] 2xl:text-[32px] lg:leading-[32px] font-medium text-[#545454] pl-[40px] lg:pl-[109px]">
                Stewards by Choise.
              </span>
            </div>

            <p
              className="text-base lg:text-[24px] leading-[180%] -tracking-[0.72px] text-[#545454]"
              data-aos="fade-up"
            >
              In the ever-evoling landscape of agriculture, sustainable farming
              practice have become a cornerstone for ensuring long-term
              environmental health and the vitality of our framing communities
            </p>
          </div>
        </div>
      </section>

      {/* End: banner */}

      <section className="container">
        <h1
          className="text-[36px] 2xl:text-[64px] font-bold leading-[1.25] 2xl:leading-[1] tracking-tight text-[#333] lg:mt-20 mt-[38px]"
          data-aos="fade-up"
        >
          Rooted in Tradition, <br /> Growing for the Future
        </h1>
        <Section
          title="Mission"
          className="mt-16 lg:mt-[110px] 2xl:mt-[136px]"
        />

        <div className="mt-8 lg:mt-[110px] 2xl:mt-[136px] flex flex-col gap-5 2xl:gap-0 lg:grid lg:grid-cols-[30%,40%,15%] 2xl:grid-cols-[30%,40%,20%] justify-between">
          <span
            className="text-[24px] lg:text-[44px] 2xl:text-[64px] font-bold -tracking-[1.92px] text-[#545454]"
            data-aos="fade-up"
          >
            What we do
          </span>
          <p
            className="text-base lg:text-[24px] leading-[180%] -tracking-[0.48px] 2xl:-tracking-[0.72px] text-[#545454]"
            data-aos="fade-up"
          >
            In the ever-evoling landscape of agriculture, sustainable farming
            practice have become a cornerstone for ensuring
          </p>
          <button
            className="self-start text-sm lg:text-[16px] 2xl:text-2xl -tracking-[0.72px] font-semibold text-[#FFF] px-7 lg:px-5 2xl:px-16 bg-[#545454] rounded-full h-10 lg:h-10 2xl:h-20"
            data-aos="fade-up"
          >
            All Benefits
          </button>
        </div>
        <Slide1 />
      </section>

      <section className="mt-16 lg:mt-[110px] 2xl:mt-[136px] container">
        <Section
          title="Meet Us"
        />
        <SlideUser/>
      </section>
      <section className="mt-[68px] 2xl:mt-[108px] container">
        <Section title="Our Work" />

        {/* SLide2 */}
        <Slide2/>

      </section>
      <section className="container mt-16 lg:mt-[120px]">
        <Section title="Blog" />
        <div
          className="flex items-center justify-between mt-[50px] lg:mt-[103px]"
          data-aos="fade-up"
        >
          <p className="text-[32px] -tracking-[0.96px]  leading-[32px] text-left text-[#545454] 2xl:block hidden">
            &#47;&#47; All
          </p>
          <h1 className="text-[36px] 2xl:text-[64px] font-bold leading-[64px] -tracking-[1.92px] text-[#333] flex-grow lg:text-center">
            Sustainable <br className="lg:hidden block" />
            Farming 101
          </h1>
        </div>
        <div
          className="mt-10 2xl:mt-[116px] lg:mt-[100px] relative"
          data-aos="fade-up"
        >
          <div className="relative w-full 2xl:h-[720px] lg:h-[938px] h-[553px]">
            <NextImg
              src="/assets/image/Rectangle 166.png"
              alt="Village-agriculture"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(23,23,23,0.50)] h-full rounded-lg"></div>
          <h2 className="2xl:text-[64px] lg:text-[32px] text-[24px] font-medium leading-[32px] lg:leading-[44px] 2xl:leading-[64px] 2xl:-tracking-[1.92px] -tracking-[0.72px] text-[#FFF] absolute 2xl:top-[104px] 2xl:left-[84px] lg:left-[54px] lg:top-[140px] top-10 left-8 w-[90%] lg:w-[43%] 2xl:w-[70%]">
            The Sustainable Agriculture Innovation and Practices Symposium
          </h2>
          <p className="flex flex-col gap-8 items-end absolute lg:top-[140px] top-[50%] -translate-y-1/2 lg:-translate-y-0 right-7 lg:right-[70px] 2xl:right-[111px]">
            <span className="2xl:text-[48px] lg:text-[32px] text-[24px] font-medium leading-none -tracking-[1.44px] text-[#FFF] underline">
              Jan 2024
            </span>
            <span className="lg:text-[24px] text-[16px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Feb 2024
            </span>
            <span className="lg:text-[24px] text-[16px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Mar 2024
            </span>
            <span className="lg:text-[24px] text-[16px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Apr 2024
            </span>
            <span className="lg:text-[24px] text-[16px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              May 2024
            </span>
            <span className="lg:text-[24px] text-[16px] font-medium leading-none -tracking-[0.72px] text-[#FFF]">
              Jun 2024
            </span>
          </p>
          <button className="px-7 2xl:px-[56px] py-3 2xl:py-4 bg-[#FFF] text-[#333] text-[18px] font-semibold -tracking-[0.54px]  absolute left-[50%] -translate-x-1/2 lg:-translate-x-0 lg:left-[67px] 2xl:left-[76px] bottom-10 lg:bottom-[130px] 2xl:bottom-[105px] rounded-full">
            Join Now
          </button>
        </div>
        <div className="mt-[42px] lg:mt-20 2xl:mt-[104px] flex flex-col lg:grid lg:grid-cols-[40%,50%] 2xl:grid-cols-[30%,55%] 2xl:items-center lg:justify-between">
          <div className="flex flex-col lg:gap-[15px]" data-aos="fade-up">
            <span className="text-base lg:text-[24px] 2xl:text-[32px] -tracking-[0.48px] 2xl:-tracking-[0.96px] leading-[32px] text-[#545454]">
              &#47;&#47; Farmers by Heart
            </span>
            <span className="text-base lg:text-[24px] 2xl:text-[32px] font-medium leading-[32px] -tracking-[0.48px] 2xl:-tracking-[0.96px] text-[#333] pl-[81px] 2xl:pl-[109px]">
              Stewards by Choise.
            </span>
          </div>
          <p
            className="text-[24px] leading-[28px] -tracking-[0.72px] text-[#545454] lg:text-right mt-6 lg:mt-0 "
            data-aos="fade-up"
          >
            In the ever-evoling landscape of agriculture, sustainable farming
            practice have become a cornerstone for ensuring long-term
            environmental health and the vitality of our framing communities
          </p>
        </div>
      </section>
      <section className="mt-20 lg:mt-[100px] 2xl:mt-[210px] ">
        <div className="container">
          <Section title="Our Stories" />
          <div
            className="lg:mt-20 mt-[182px] lg:flex justify-end hidden"
            data-aos="fade-up"
          >
            <p className="text-[48px] lg:text-[32px] lg:-tracking-[0.96px] -tracking-[1.44px] leading-[64px] text-[#545454] text-right w-[70%]">
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
          <div className="2xl:grid 2xl:grid-cols-[35%,65%] mt-[66px] lg:mt-[120px] 2xl:mt-[140px]">
            <div className="relative 2xl:block hidden">
              <ul
                className="flex flex-col gap-8 absolute top-24 left-0"
                data-aos="fade-up"
              >
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  &#47;&#47; All
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  &#47;&#47; New
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  &#47;&#47; Tranding
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  &#47;&#47; Organic Farming
                </li>
                <li className="text-[32px] -tracking-[0.96px]  leading-[32px] text-[#545454]">
                  &#47;&#47; Vertical Farming
                </li>
              </ul>
              <div
                className="flex flex-col text-right absolute bottom-0 left-0"
                data-aos="fade-up"
              >
                <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
                  &#47;&#47; Nourishing the Land
                </span>
                <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
                  Cultivating Communities
                </span>
              </div>
            </div>
            <div className="" data-aos="fade-up">
              <div className="flex lg:flex-row flex-col gap-[57px] lg:gap-6">
                <div>
                  <div className="relative w-full h-[302px]">
                    <NextImg
                      src="/assets/image/Rectangle 163.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[24px] lg:text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-7 2xl:mt-[44px] mb-3">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-base lg:text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-base lg:text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-8 lg:mt-[136px]">
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
                  <p className="text-[24px] lg:text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-7 2xl:mt-[44px] mb-3">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[16px] lg:text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-base lg:text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-8 2xl:mt-[53px]">
                    Learn More
                  </button>
                </div>
              </div>
              <div
                className="flex lg:flex-row flex-col gap-[57px] lg:gap-6 mt-[62px] lg:mt-[140px]"
                data-aos="fade-up"
              >
                <div>
                  <div className="relative w-full h-[302px]">
                    <NextImg
                      src="/assets/image/Rectangle 161.png"
                      alt="Village-agriculture"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-[24px] lg:text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-7 2xl:mt-[44px] mb-3">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[16px] lg:text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-base lg:text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-8 lg:mt-[136px]">
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
                  <p className="text-[24px] lg:text-[32px] -tracking-[0.96px] font-medium leading-[44px] text-[#545454] mt-7 2xl:mt-[44px] mb-3">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="text-[16px] lg:text-[24px] -tracking-[0.72px]  leading-[32px] text-[#545454] font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                  <button className="underline text-base lg:text-[24px] -tracking-[0.72px] font-semibold leading-[32px] text-[#545454] mt-8 2xl:mt-[53px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 2xl:mt-[117px]">
        <div className="container">
          <Section title="Sustainability" />
          <div
            className="mt-[50px] lg:mt-[100px] 2xl:mt-[180px] flex justify-end"
            data-aos="fade-up"
          >
            <p className="text-2xl lg:text-[32px] 2xl:text-[48px] -tracking-[1.44px] leading-[180%] 2xl:leading-[64px] text-[#545454] text-left lg:text-right w-full lg:w-[85%]">
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
          <div
            className="2xl:flex items-center justify-between mt-[50px] hidden"
            data-aos="fade-up"
          >
            <p className="text-[24px] -tracking-[0.72px]  leading-[64px] text-[#545454] font-light">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <button className="text-2xl -tracking-[0.72px] font-semibold text-[#FFF] px-16 py-4 bg-[#545454] rounded-full h-20">
              All Benefits
            </button>
          </div>
          <div
            className="2xl:flex flex-col text-right justify-end mt-[91px] hidden"
            data-aos="fade-up"
          >
            <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
              &#47;&#47; Sustainable Arigculture,
            </span>
            <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
              Shared Values.
            </span>
          </div>
          <div className="flex flex-col 2xl:grid grid-cols-3 gap-8 2xl:gap-6 2xl:mt-0 mt-[50px]">
            <div
              className="p-7 rounded-lg lg:bg-[#545454] bg-[#333] lg:hover:bg-[#333] transition duration-300 cursor-pointer lg:h-[350px] w-auto lg:w-[410px]"
              data-aos="fade-up"
            >
              <div className="flex justify-between lg:items-stretch items-center ">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  01
                </span>
                <h4 className="text-[26px] font-bold leading-[26px] -tracking-[0.78px] text-[#FFF] place-content-end">
                  Quality Assurance
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
              <div className="mt-11 lg:mt-[100px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  standard of quality
                </span>
                <p className="text-base lg:text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  Our products and service meet the highest standards of
                  quality. ensuring a reliable and consistent experience for our
                  customers.
                </p>
              </div>
            </div>
            <div
              className="p-7 rounded-lg lg:bg-[#545454] bg-[#333] lg:hover:bg-[#333] transition duration-300 cursor-pointer 2xl:mt-[83px] lg:h-[350px] w-auto lg:w-[410px] lg:mx-auto"
              data-aos="fade-up"
            >
              <div className="flex justify-between lg:items-stretch items-center">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
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
              <div className="mt-11 lg:mt-[100px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  Friendly Farming
                </span>
                <p className="text-base lg:text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  We are committed to sustainable and eco-friendly farming
                  practice, aiming to contribute to healthier planet and more
                  resilient agriculture industry.
                </p>
              </div>
            </div>
            <div
              className="p-7 rounded-lg lg:bg-[#545454] bg-[#333] lg:hover:bg-[#333] transition duration-300 cursor-pointer 2xl:mt-[211px] lg:h-[350px] w-auto lg:w-[410px] place-self-end"
              data-aos="fade-up"
            >
              <div className="flex justify-between lg:items-stretch items-center">
                <span className="text-[20px] font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
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
              <div className="mt-11 lg:mt-[100px] flex flex-col gap-[6px]">
                <span className="text-sm leading-[26px] -tracking-[0.42px] text-[#FFF]">
                  Agronomist
                </span>
                <p className="text-base lg:text-xl font-light leading-[26px] -tracking-[0.6px] text-[#FFF]">
                  Benefit from the expertise of our seasoned agronomist and
                  specialists who are dedicated to supporting your farming
                  success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="2xl:flex flex-col text-right float-start hidden"
            data-aos="fade-up"
          >
            <span className="text-[32px] -tracking-[0.96px] leading-[32px] text-[#545454]">
              &#47;&#47; Cultivating Dreams,
            </span>
            <span className="text-[32px] font-medium leading-[32px] -tracking-[0.96px] text-[#545454]">
              Showing Success.
            </span>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center 2xl:mt-0 mt-[50px] lg:mt-[120px]">
            <div className="flex flex-col 2xl:hidden" data-aos="fade-up">
              <span className="text-base lg:text-[24px] 2xl:text-[32px] -tracking-[0.48px] 2xl:-tracking-[0.96px] leading-[32px] text-[#545454] ml-5">
                &#47;&#47; Nourishing the Land
              </span>
              <span className="text-base lg:text-[24px] 2xl:text-[32px] font-medium leading-[32px] -tracking-[0.48px] 2xl:-tracking-[0.96px] text-[#545454]">
                Cultivating Communities
              </span>
            </div>
            <button className="px-7 lg:py-0 py-3 text-sm lg:h-10 bg-[#545454] text-[#FFF] font-semibold -tracking-[0.54px] rounded-full 2xl:hidden block mt-[47px] lg:mt-0 lg:mx-0 mx-auto">
              All Benefits
            </button>
          </div>
        </div>
      </section>
      <section
        className="mt-[84px] 2xl:mt-[250px] mb-[68px] 2xl:mb-[200px] container"
        data-aos="fade-up"
      >
        <div className="relative">
          <div className="relative w-full h-[553px] 2xl:h-[512px] lg:h-[929px]">
            <NextImg
              src="/assets/image/Rectangle 160.png"
              alt="Village-agriculture"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(23,23,23,0.50)] h-full rounded-lg"></div>
          <h2 className="text-[32px] lg:text-[64px] font-medium leading-[64px] -tracking-[1.92px] text-[#FFF] absolute top-1/2 lg:top-[38%] -translate-y-1/2 2xl:-translate-y-0 2xl:top-[109px] left-1/2 -translate-x-1/2 lg:w-[80%] 2xl:w-[50%] w-[90%] text-center">
            Join the Agricultural Revolution
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[100px] lg:bottom-[360px] 2xl:bottom-[127px] lg:w-[410px] w-[90%] ">
            <form className="relative">
              <input
                type="text"
                className="px-8 py-2 bg-[#FFF] text-[#545454] lg:text-[#333] text-sm 2xl:text-[18px] font-semibold -tracking-[0.54px] leading-[48px] rounded-full w-full 2xl:w-[410px] placeholder:text-sm 2xl:placeholder:text-[18px] placeholder:font-semibold placeholder:-tracking-[0.54px] placeholder:text-[#545454] lg:placeholder:text-[#333] focus:outline-none"
                placeholder="Your email address"
              />
              <button
                className="px-8 2xl:py-2 bg-[#404040] text-[#FFF] text-sm 2xl:text-[18px] font-semibold -tracking-[0.54px] rounded-full absolute right-2 top-2 bottom-2"
                type="submit"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
