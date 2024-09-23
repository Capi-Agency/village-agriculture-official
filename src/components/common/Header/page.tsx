import NextImg from "../next-img";

export default function Header() {
  return (
    <header className="w-full 2xl:w-[1062px] h-[87px] mx-auto 2xl:mt-16">
      <div className="w-full h-full bg-white 2xl:drop-shadow-xl px-8 2xl:rounded-2xl">
      <div className="flex h-full items-center justify-between">

        <div className="hidden 2xl:block relative w-[275px] h-[36px] cursor-pointer">
          <NextImg
            src="/assets/icon/HorizontalLogo.svg"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>

        <div className="block 2xl:hidden relative w-[183px] h-[24px] cursor-pointer">
          <NextImg
            src="/assets/icon/HorizontalLogo.svg"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="relative hidden 2xl:inline-block min-w-[50px]">
            <select className="appearance-none block w-full rounded-md h-[50px] pl-5 pr-5 text-[#000] font-semibold leading-[36px] text-sm focus:outline-none bg-transparent cursor-pointer">
              <option value="1" className="cursor-pointer">Eng</option>
              <option value="2" className="cursor-pointer">Vie</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <svg
                className="w-[18px] h-[18px] text-[#000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10l5 5 5-5"
                />
              </svg>
            </div>
          </div>

          <div className="relative h-[27px] w-[27px] cursor-pointer">
            <NextImg
              src="/assets/icon/density_medium.svg"
              alt="Header"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}
