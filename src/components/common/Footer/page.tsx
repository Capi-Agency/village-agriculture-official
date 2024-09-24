import Link from "next/link";
import React, { Fragment } from "react";
import NextImg from "../next-img";

export default function Footer() {
  const linksData = [
    [
      {
        label: "About",
        href: "",
      },
      {
        label: "Services",
        href: "",
      },
      {
        label: "Our profile",
        href: "",
      },
      {
        label: "Blogs",
        href: "",
      },
      {
        label: "Benefits",
        href: "",
      },
    ],
    [
      {
        label: "About",
        href: "",
      },
      {
        label: "Services",
        href: "",
      },
      {
        label: "Our profile",
        href: "",
      },
      {
        label: "Blogs",
        href: "",
      },
      {
        label: "Benefits",
        href: "",
      },
    ],
    [
      {
        label: "Fanpage",
        href: "",
      },
      {
        label: "Instagram",
        href: "",
      },
      {
        label: "Twitter",
        href: "",
      },
    ],
    [
      {
        label: "Contact",
        href: "",
      },
      {
        label: "VillageAgriculture.com",
        href: "",
      },
      {
        label: "Food, Beverage & FMCG",
        href: "",
      },
    ],
  ];

  return (
    <Fragment>
      {/* begin:: main footer */}
      <div className="container" data-aos="fade-up">
        <div className="w-full min-h-[300px] flex 2xl:flex-row flex-col gap-10 mb-10">
          <div className="md:w-[50%] w-full flex flex-col justify-between gap-12 2xl:gap-20">
            {/* begin:: logo */}
            <div className="relative w-[250px] 2xl:w-[498px] h-[92px] 2xl:h-[184px] cursor-pointer 2xl:mx-0 mx-auto ">
              <NextImg
                src="/assets/image/logo-ft.png"
                alt="Logo-Footer"
                objectFit="cover"
              />
            </div>
            {/* end:: logo */}

            {/* begin:: quote */}
            <p className="text-[32px] 2xl:text-[48px] text-[#121212] leading-[64px] font-medium">
              <span className="text-[#545454] font-normal">Reach</span> Out{" "}
              <br />
              with Villageagriculture
            </p>
            {/* end:: quote */}
          </div>
          <div className="md:w-[50%] w-full flex flex-col justify-between 2xl:mt-20 mt-0">
            {/* begin:: links */}
            <div className="w-full 2xl:flex 2xl:justify-between grid grid-cols-2 gap-6">
              {linksData.map((linkGroup, index) => {
                return (
                  <div key={index}>
                    {linkGroup.map((linkObject, idx) => (
                      <div key={idx}>
                        <Link
                          className="font-normal text-lg text-[#121212]"
                          href={linkObject.href}
                        >
                          {linkObject.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            {/* end:: links */}

            {/* begin:: social & lang */}
            <div className="w-full flex 2xl:flex-row flex-col justify-between 2xl:mt-0 mt-10 gap-6">
              <div className="flex gap-5 items-center">
                <div className="relative w-10 h-10">
                  <NextImg
                    src="/assets/image/footer_socical_1.png"
                    alt="social_media"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="relative w-10 h-10">
                  <NextImg
                    src="/assets/image/footer_socical_2.png"
                    alt="social_media"
                    objectFit="cover"
                    className=""
                  />
                </div>

                <div className="relative w-10 h-10">
                  <NextImg
                    src="/assets/image/footer_socical_3.png"
                    alt="social_media"
                    objectFit="cover"
                    className=""
                  />
                </div>

                <div className="relative w-10 h-10">
                  <NextImg
                    src="/assets/image/footer_socical_4.png"
                    alt="social_media"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>

              {/* <div className="p-2 w-48 bg-[#333] rounded-lg flex justify-between items-center">
                <p className="text-white font-semibold text-lg">English</p>
                <Image
                  src={"/assets/image/footer_lang.png"}
                  alt="lang"
                  width={24}
                  height={24}
                />
              </div> */}
              <select
                name=""
                id=""
                className="pl-10 w-48 bg-[#333] font-semibold rounded-lg flex justify-between items-center text-white 2xl:py-0 py-1"
              >
                <option value="">English - En</option>
                <option value="">Vietnamese</option>
              </select>
            </div>
            {/* end:: social & lang */}
          </div>
        </div>
      </div>
      {/* end:: main footer */}

      {/*begin:: copyright */}
      <div className="bg-[#333] 2xl:py-12">
        <div className="container flex 2xl:flex-row flex-col justify-between 2xl:gap-0 gap-10 2xl:p-0 p-6">
          <p className="font-normal text-white text-base inline-block">
            © Copyright 2024 villageagriculture. All Right Reserved
          </p>
          <div className="font-normal text-white text-sm uppercase flex gap-32">
            <p className="inline-block 2xl:pr-32 md:pr-2">Terms of use</p>
            <p className="inline-block">Privacy policy</p>
          </div>
        </div>
      </div>
      {/*end:: copyright */}
    </Fragment>
  );
}
