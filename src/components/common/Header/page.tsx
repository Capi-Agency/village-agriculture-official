import NextImg from "../next-img";

interface HeaderProps {
  toggleMenu: () => void;
}
export default function Header({ toggleMenu }: HeaderProps) {
  return (
    <header className="container">
      <div className="w-full 2xl:w-[85%] lg:h-[87px] mx-auto lg:mt-16 mt-8">
        <div className="w-full h-full bg-white lg:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.06),_0px_16px_44px_0px_rgba(0,0,0,0.11)] lg:px-8 lg:rounded-2xl">
          <div className="flex h-full items-center justify-between">
            <div className="hidden 2xl:block relative w-[275px] h-[36px] cursor-pointer">
              <NextImg
                src="/assets/icon/HorizontalLogo.svg"
                alt="LogoHeader"
                objectFit="cover"
              />
            </div>

            <div className="block 2xl:hidden relative w-[183px] h-[24px] cursor-pointer">
              <NextImg
                src="/assets/icon/HorizontalLogo.svg"
                alt="Header"
                objectFit="cover"
              />
            </div>

            <div className="flex items-center gap-10">
              <div className="relative hidden lg:inline-block min-w-[50px]">
                <select className="appearance-none block w-full rounded-md h-[50px] pl-5 pr-5 text-[#000] font-semibold leading-[36px] text-sm focus:outline-none bg-transparent cursor-pointer">
                  <option value="1" className="cursor-pointer">
                    Eng
                  </option>
                  <option value="2" className="cursor-pointer">
                    Vie
                  </option>
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

              <button
                className="relative lg:h-[27px] lg:w-[27px] w-5 h-5"
                onClick={toggleMenu}
              >
                <NextImg
                  src="/assets/icon/density_medium.svg"
                  alt="MenuIcon"
                  objectFit="cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
