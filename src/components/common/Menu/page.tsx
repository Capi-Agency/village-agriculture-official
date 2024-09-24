"use client";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import NextImg from "../next-img";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full container relative scrollbar-hide overflow-y-scroll">
        {activeTab == "tab1" && (
          <div className="absolute top-0 right-0">
            <div className="relative w-[491px] h-[1342px] bg-center">
              <NextImg
                src="/assets/image/bg-menu1.jpg"
                alt="bg-menu1"
                objectFit="cover"
              />
            </div>
          </div>
        )}
        {activeTab == "tab2" && (
          <div className="absolute top-0 right-0">
            <div className="relative w-[491px] h-[1342px] bg-center">
              <NextImg
                src="/assets/image/bg-menu2.png"
                alt="bg-menu1"
                objectFit="cover"
              />
            </div>
          </div>
        )}
        {activeTab == "tab3" && (
          <div className="absolute top-0 right-0">
            <div className="relative w-[491px] h-[1342px] bg-center">
              <NextImg
                src="/assets/image/bg-menu3.png"
                alt="bg-menu1"
                objectFit="cover"
              />
            </div>
          </div>
        )}
        {activeTab == "tab4" && (
          <div className="absolute top-0 right-0">
            <div className="relative w-[491px] h-[1342px] bg-center">
              <NextImg
                src="/assets/image/bg-menu4.png"
                alt="bg-menu1"
                objectFit="cover"
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mt-16">
          <div className="relative w-[367px] h-[48px] cursor-pointer">
            <NextImg
              src="/assets/icon/HorizontalLogo.svg"
              alt="BannerHeader"
              objectFit="cover"
            />
          </div>
          <button onClick={onClose}>
            <div className="relative w-[72px] h-[72px]">
              <NextImg
                src={
                  activeTab == ""
                    ? "/assets/icon/close_black.svg"
                    : "/assets/icon/close.svg"
                }
                alt="Village-agriculture"
                objectFit="cover"
              />
            </div>
          </button>
        </div>
        {/* line */}
        <div className="absolute top-0 left-1/3 bg-[#898989] w-[1px] h-[1342px] -translate-x-1/3"></div>
        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="grid grid-cols-[30%,70%] mt-10 gap-5"
        >
          <Tabs.List className="flex flex-col justify-self-start gap-4">
            <Tabs.Trigger
              value="tab1"
              className={`tab cursor-pointer text-[32px] font-medium leading-[84px] -tracking-[0.96px] text-start ${
                activeTab === "tab1" ? "text-[#000000]" : "text-[#898989]"
              }`}
            >
              About Us
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className={`tab cursor-pointer text-[32px] font-medium leading-[84px] -tracking-[0.96px] text-start ${
                activeTab === "tab2" ? "text-[#000000]" : "text-[#898989]"
              }`}
            >
              What We Do
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              className={`tab cursor-pointer text-[32px] font-medium leading-[84px] -tracking-[0.96px] text-start ${
                activeTab === "tab3" ? "text-[#000000]" : "text-[#898989]"
              }`}
            >
              Our Brands
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab4"
              className={`tab cursor-pointer text-[32px] font-medium leading-[84px] -tracking-[0.96px] text-start ${
                activeTab === "tab4" ? "text-[#000000]" : "text-[#898989]"
              }`}
            >
              Our Impact
            </Tabs.Trigger>
          </Tabs.List>
          <div className="p-6">
            {/* no active */}
            <Tabs.Content
              value=""
              className="tab-content flex flex-col justify-between"
            >
              <div className="grid grid-cols-2 gap-6 border-b border-[#545454] pb-11 mb-20 w-[80%] place-self-end">
                <div className="flex flex-col justify-between">
                  <span className="text-[#000] text-base font-medium -tracking-[0.48px] leading-[24px] mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                  <span className="text-[#000] text-base font-bold -tracking-[0.48px] leading-[24px]">
                    2 May 2024
                  </span>
                </div>
                <div className="relative w-full h-[203px] bg-center">
                  <NextImg
                    src="/assets/image/Rectangle 176.png"
                    alt="Village-agriculture"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 border-b border-[#545454] pb-11 mb-20 w-[80%] place-self-end">
                <div className="flex flex-col justify-between">
                  <span className="text-[#000] text-base font-medium -tracking-[0.48px] leading-[24px] mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                  <span className="text-[#000] text-base font-bold -tracking-[0.48px] leading-[24px]">
                    2 May 2024
                  </span>
                </div>
                <div className="relative w-full h-[203px] bg-center">
                  <NextImg
                    src="/assets/image/Rectangle 177.png"
                    alt="Village-agriculture"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 border-b border-[#545454] pb-11 mb-20 w-[80%] place-self-end">
                <div className="flex flex-col justify-between">
                  <span className="text-[#000] text-base font-medium -tracking-[0.48px] leading-[24px] mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                  <span className="text-[#000] text-base font-bold -tracking-[0.48px] leading-[24px]">
                    2 May 2024
                  </span>
                </div>
                <div className="relative w-full h-[203px] bg-center">
                  <NextImg
                    src="/assets/image/Rectangle 178.png"
                    alt="Village-agriculture"
                    objectFit="cover"
                  />
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab1"
              className="tab-content flex flex-col justify-between"
            >
              <ul className="flex flex-col gap-8">
                <li className="text-[#000] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Who We Are
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Story
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Vision & Our Mission
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Dream & Our Belief
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Name
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Amazing Food Factory
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Why Employee Owned
                </li>
              </ul>
              <div className="flex flex-col gap-6 pt-[500px]">
                <span className="text-[#000] text-2xl font-bold -tracking-[0.72px] leading-[24px]">
                  Who We Are
                </span>
                <p className="text-[#000] text-base font-light -tracking-[0.48px] leading-[32px] w-[345px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab2"
              className="tab-content flex flex-col justify-between"
            >
              <ul className="flex flex-col gap-8">
                <li className="text-[#000] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Operation
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Products
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Our Food Factory
                </li>
              </ul>
              <div className="flex flex-col gap-6 pt-[700px]">
                <span className="text-[#000] text-2xl font-bold -tracking-[0.72px] leading-[24px]">
                  What We Do
                </span>
                <p className="text-[#000] text-base font-light -tracking-[0.48px] leading-[32px] w-[345px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Tabs.Content>
            <Tabs.Content value="tab3" className="tab-content">
              <div className="flex flex-col gap-6 mt-[850px]">
                <span className="text-[#000] text-2xl font-bold -tracking-[0.72px] leading-[24px]">
                  Our Brands
                </span>
                <p className="text-[#000] text-base font-light -tracking-[0.48px] leading-[32px] w-[345px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab4"
              className="tab-content flex flex-col justify-between"
            >
              <ul className="flex flex-col gap-8">
                <li className="text-[#000] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Tree Planting Project
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Education Projects
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  Community Engagment
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  House of Food Campus - Project
                </li>
                <li className="text-[#898989] text-2xl font-medium -tracking-[0.72px] leading-[24px] cursor-pointer">
                  VA Wealth Fund
                </li>
              </ul>
              <div className="flex flex-col gap-6 pt-[600px]">
                <span className="text-[#000] text-2xl font-bold -tracking-[0.72px] leading-[24px]">
                  Our Impact
                </span>
                <p className="text-[#000] text-base font-light -tracking-[0.48px] leading-[32px] w-[345px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Menu;
