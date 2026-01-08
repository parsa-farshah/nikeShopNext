"use client";
import { MenuIcon, SearchIcon, ShoppingCart, X } from "lucide-react";
import { Oxanium } from "next/font/google";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import useUserStore from "../store";
import Image from "next/image";

const oxanium = Oxanium({
  subsets: ["latin"],
});

function Header() {
  const { basket } = useUserStore();
  const [searchWrapper, setSearchWrapper] = useState(false);
  const { setTheme, theme } = useTheme();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [menuMobile, setMenuMobile] = useState(false);

  async function getFetch(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);

      const dataRes = await res.json();
      setData(dataRes);
    } catch (error) {
      console.log(error);
    }
  }

  const dataSearchReady = data.filter((val: any) => {
    if (search == "") {
      return null;
    }
    return val.id.toLowerCase().includes(search);
  });

  useEffect(() => {
    getFetch("https://69559c6eb9b81bad7af13855.mockapi.io/data");
  }, []);

  const { login, updateUser } = useUserStore();
  return (
    <header
      className={`w-full h-[52px] md:h-[113px] bg-white dark:bg-black px-4 md:px-[50px] flex justify-between items-center ${oxanium.className} `}
    >
      {/* menu mobile */}

      <div
        className={`
          ${
            menuMobile
              ? "w-[102%] fixed top-0 left-0 bg-white dark:bg-black h-screen overflow-y-auto z-20 flex flex-col justify-start px-4 md:px-[50px] pt-7 duration-300"
              : "hidden top-0 right-0 w-full  duration-300"
          }
       `}
      >
        <div className="w-full flex justify-between">
          {/* logo svg */}
          <div className=" w-[119px] h-[21px] md:w-[40%] md:h-[50px] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 680 71"
              fill="none"
            >
              <path
                d="M500.612 29.0454V16.1364H504.475C510.274 16.1364 512.852 18.0727 512.852 22.5909C512.852 27.1091 510.274 29.0454 504.475 29.0454H500.612ZM500.612 54.8636V41.9546H507.7C513.499 41.9546 516.073 43.8909 516.073 48.4092C516.073 52.9272 512.852 54.8636 507.053 54.8636H500.612ZM437.471 43.2454L443.914 23.8818L450.357 43.2454H437.471ZM289.285 32.9182V16.1364H295.084C301.526 16.1364 305.392 18.7182 305.392 24.5273C305.392 29.6909 301.526 32.9182 295.728 32.9182H289.285ZM638.766 69.0636H680V54.8636H656.162V1.29091H638.766V69.0636ZM591.732 69.0636H632.967V54.8636H609.129V1.29091H591.732V69.0636ZM540.189 69.0636H584.644V54.8636H557.586V41.9546H581.424V27.7546H557.586V16.1364H584.644V1.29091H540.189V69.0636ZM483.216 69.0636H509.632C525.739 69.0636 534.116 61.318 534.116 49.7C534.116 41.3091 529.602 36.1454 521.872 33.5636C527.671 30.9818 530.249 26.4636 530.249 19.3636C530.249 9.03636 523.161 1.29091 506.411 1.29091H483.216V69.0636ZM409.767 69.0636H429.095L432.961 57.4456H455.511L459.377 69.0636H478.706L453.578 1.29091H434.894L409.767 69.0636ZM351.136 35.5C351.136 57.4456 366.599 71 387.861 71C394.948 71 402.679 69.7092 407.19 66.482L407.834 47.7636C402.679 52.9272 396.236 54.218 389.794 54.218C378.197 54.218 369.177 47.7636 369.177 35.5C369.177 23.2364 378.197 16.7818 389.794 16.7818C396.236 16.7818 402.679 18.0727 407.834 23.2364L407.19 3.87273C402.679 1.29091 394.948 0 387.861 0C366.599 0 351.136 14.8454 351.136 35.5ZM271.245 69.0636H289.285V45.8273H291.218L309.258 69.0636H330.519L309.902 43.2454C318.278 40.0182 323.432 32.2727 323.432 23.2364C323.432 10.9727 315.056 1.29091 297.661 1.29091H271.245V69.0636ZM219.702 69.0636H264.158V54.8636H237.742V41.9546H261.58V27.7546H237.742V16.1364H264.158V1.29091H219.702V69.0636ZM172.025 69.0636H190.709L215.836 1.29091H197.152L181.689 47.1182L166.226 1.29091H146.897L172.025 69.0636ZM124.992 69.0636H143.032V1.29091H124.992V69.0636ZM77.3146 69.0636H119.193V54.8636H94.7103V1.29091H77.3146V69.0636ZM35.4358 54.218C25.7715 54.218 18.04 46.4727 18.04 35.5C18.04 24.5273 25.7715 16.7818 35.4358 16.7818C45.1001 16.7818 53.4759 24.5273 53.4759 35.5C53.4759 46.4727 45.1001 54.218 35.4358 54.218ZM35.4358 71C55.4087 71 71.5157 55.5092 71.5157 35.5C71.5157 15.4909 55.4087 0 35.4358 0C15.4629 0 0 14.8454 0 35.5C0 56.1544 16.1072 71 35.4358 71Z"
                className="fill-black dark:fill-white"
              />
            </svg>
          </div>
          <X
            className={`cursor-pointer hover:rotate-180 duration-300 bg-white dark:bg-black `}
            onClick={() => {
              setMenuMobile(false);
            }}
          />
        </div>
        <ul className="mt-10 *:text-4xl flex flex-col gap-y-4 *:cursor-pointer">
          <li onClick={() => setMenuMobile(false)}>
            <Link href={"./"}>Home</Link>
          </li>

          <li onClick={() => setMenuMobile(false)}>
            <Link href={"/account"}>Account</Link>
          </li>
          <li onClick={() => setMenuMobile(false)}>
            <Link href={"/basket"}>shop</Link>
          </li>
        </ul>
      </div>

      {/* search wrapper */}

      <div
        className={`
            ${
              searchWrapper
                ? "w-[102%] fixed top-0 left-0 bg-white dark:bg-black h-screen overflow-y-auto z-20 flex flex-col justify-start px-4 md:px-[50px] pt-7 duration-300"
                : "hidden top-0 right-0 w-full  duration-300"
            } 
       `}
      >
        <div className="w-full flex justify-between">
          {/* logo svg */}
          <div className=" w-[119px] h-[21px] md:w-[40%] md:h-[50px] z-10">
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 680 71"
                fill="none"
              >
                <path
                  d="M500.612 29.0454V16.1364H504.475C510.274 16.1364 512.852 18.0727 512.852 22.5909C512.852 27.1091 510.274 29.0454 504.475 29.0454H500.612ZM500.612 54.8636V41.9546H507.7C513.499 41.9546 516.073 43.8909 516.073 48.4092C516.073 52.9272 512.852 54.8636 507.053 54.8636H500.612ZM437.471 43.2454L443.914 23.8818L450.357 43.2454H437.471ZM289.285 32.9182V16.1364H295.084C301.526 16.1364 305.392 18.7182 305.392 24.5273C305.392 29.6909 301.526 32.9182 295.728 32.9182H289.285ZM638.766 69.0636H680V54.8636H656.162V1.29091H638.766V69.0636ZM591.732 69.0636H632.967V54.8636H609.129V1.29091H591.732V69.0636ZM540.189 69.0636H584.644V54.8636H557.586V41.9546H581.424V27.7546H557.586V16.1364H584.644V1.29091H540.189V69.0636ZM483.216 69.0636H509.632C525.739 69.0636 534.116 61.318 534.116 49.7C534.116 41.3091 529.602 36.1454 521.872 33.5636C527.671 30.9818 530.249 26.4636 530.249 19.3636C530.249 9.03636 523.161 1.29091 506.411 1.29091H483.216V69.0636ZM409.767 69.0636H429.095L432.961 57.4456H455.511L459.377 69.0636H478.706L453.578 1.29091H434.894L409.767 69.0636ZM351.136 35.5C351.136 57.4456 366.599 71 387.861 71C394.948 71 402.679 69.7092 407.19 66.482L407.834 47.7636C402.679 52.9272 396.236 54.218 389.794 54.218C378.197 54.218 369.177 47.7636 369.177 35.5C369.177 23.2364 378.197 16.7818 389.794 16.7818C396.236 16.7818 402.679 18.0727 407.834 23.2364L407.19 3.87273C402.679 1.29091 394.948 0 387.861 0C366.599 0 351.136 14.8454 351.136 35.5ZM271.245 69.0636H289.285V45.8273H291.218L309.258 69.0636H330.519L309.902 43.2454C318.278 40.0182 323.432 32.2727 323.432 23.2364C323.432 10.9727 315.056 1.29091 297.661 1.29091H271.245V69.0636ZM219.702 69.0636H264.158V54.8636H237.742V41.9546H261.58V27.7546H237.742V16.1364H264.158V1.29091H219.702V69.0636ZM172.025 69.0636H190.709L215.836 1.29091H197.152L181.689 47.1182L166.226 1.29091H146.897L172.025 69.0636ZM124.992 69.0636H143.032V1.29091H124.992V69.0636ZM77.3146 69.0636H119.193V54.8636H94.7103V1.29091H77.3146V69.0636ZM35.4358 54.218C25.7715 54.218 18.04 46.4727 18.04 35.5C18.04 24.5273 25.7715 16.7818 35.4358 16.7818C45.1001 16.7818 53.4759 24.5273 53.4759 35.5C53.4759 46.4727 45.1001 54.218 35.4358 54.218ZM35.4358 71C55.4087 71 71.5157 55.5092 71.5157 35.5C71.5157 15.4909 55.4087 0 35.4358 0C15.4629 0 0 14.8454 0 35.5C0 56.1544 16.1072 71 35.4358 71Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 680 71"
                fill="none"
              >
                <path
                  d="M500.612 29.0454V16.1364H504.475C510.274 16.1364 512.852 18.0727 512.852 22.5909C512.852 27.1091 510.274 29.0454 504.475 29.0454H500.612ZM500.612 54.8636V41.9546H507.7C513.499 41.9546 516.073 43.8909 516.073 48.4092C516.073 52.9272 512.852 54.8636 507.053 54.8636H500.612ZM437.471 43.2454L443.914 23.8818L450.357 43.2454H437.471ZM289.285 32.9182V16.1364H295.084C301.526 16.1364 305.392 18.7182 305.392 24.5273C305.392 29.6909 301.526 32.9182 295.728 32.9182H289.285ZM638.766 69.0636H680V54.8636H656.162V1.29091H638.766V69.0636ZM591.732 69.0636H632.967V54.8636H609.129V1.29091H591.732V69.0636ZM540.189 69.0636H584.644V54.8636H557.586V41.9546H581.424V27.7546H557.586V16.1364H584.644V1.29091H540.189V69.0636ZM483.216 69.0636H509.632C525.739 69.0636 534.116 61.318 534.116 49.7C534.116 41.3091 529.602 36.1454 521.872 33.5636C527.671 30.9818 530.249 26.4636 530.249 19.3636C530.249 9.03636 523.161 1.29091 506.411 1.29091H483.216V69.0636ZM409.767 69.0636H429.095L432.961 57.4456H455.511L459.377 69.0636H478.706L453.578 1.29091H434.894L409.767 69.0636ZM351.136 35.5C351.136 57.4456 366.599 71 387.861 71C394.948 71 402.679 69.7092 407.19 66.482L407.834 47.7636C402.679 52.9272 396.236 54.218 389.794 54.218C378.197 54.218 369.177 47.7636 369.177 35.5C369.177 23.2364 378.197 16.7818 389.794 16.7818C396.236 16.7818 402.679 18.0727 407.834 23.2364L407.19 3.87273C402.679 1.29091 394.948 0 387.861 0C366.599 0 351.136 14.8454 351.136 35.5ZM271.245 69.0636H289.285V45.8273H291.218L309.258 69.0636H330.519L309.902 43.2454C318.278 40.0182 323.432 32.2727 323.432 23.2364C323.432 10.9727 315.056 1.29091 297.661 1.29091H271.245V69.0636ZM219.702 69.0636H264.158V54.8636H237.742V41.9546H261.58V27.7546H237.742V16.1364H264.158V1.29091H219.702V69.0636ZM172.025 69.0636H190.709L215.836 1.29091H197.152L181.689 47.1182L166.226 1.29091H146.897L172.025 69.0636ZM124.992 69.0636H143.032V1.29091H124.992V69.0636ZM77.3146 69.0636H119.193V54.8636H94.7103V1.29091H77.3146V69.0636ZM35.4358 54.218C25.7715 54.218 18.04 46.4727 18.04 35.5C18.04 24.5273 25.7715 16.7818 35.4358 16.7818C45.1001 16.7818 53.4759 24.5273 53.4759 35.5C53.4759 46.4727 45.1001 54.218 35.4358 54.218ZM35.4358 71C55.4087 71 71.5157 55.5092 71.5157 35.5C71.5157 15.4909 55.4087 0 35.4358 0C15.4629 0 0 14.8454 0 35.5C0 56.1544 16.1072 71 35.4358 71Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <X
            className={`cursor-pointer hover:rotate-180 duration-300 bg-white dark:bg-black`}
            onClick={() => {
              setSearchWrapper(false);
            }}
          />
        </div>
        {/* input search */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className={` mt-10 px-5 outline-0 caret-black text-black text-4xl placeholder:text-black  dark:caret-white dark:text-white  dark:placeholder:text-white`}
        />
        {/* data get search */}
        <div className="w-full h-fit bg-white dark:bg-black pb-40 flex flex-wrap gap-y-5 justify-between mt-10">
          {dataSearchReady &&
            dataSearchReady.map((val: any, i: number) => {
              return (
                <div className="w-full md:w-[45%] h-[450px] relative" key={i}>
                  <Link href={val.id} className="cursor-pointer">
                    <div className="w-full h-[450px] relative group overflow-hidden">
                      {/* default image */}
                      <Image
                        src={val.colors[0].images.card.default}
                        alt={val.model}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      {/* hover image */}
                      <Image
                        src={val.colors[0].images.card.hover}
                        alt={val.model}
                        fill
                        className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      {/* sale badge */}
                      <span className="absolute left-4 top-4 z-10 text-[#c94925] font-bold">
                        Sale
                      </span>
                      {/* bottom image */}
                      <div className="w-full text-black px-[5%] absolute bottom-10 left-0 flex justify-between items-center">
                        {/* left side */}
                        <div className="flex flex-col">
                          <span className="font-bold">{val.id}</span>
                          <span className="font-semibold">
                            {val.colors[0].name}
                          </span>
                        </div>
                        {/* right side */}
                        <div className="flex gap-2">
                          <del>${val.price}</del>
                          <span>${val.salePrice}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      {/* end search wrapper */}

      {/* header */}
      <div className="flex w-[50%] h-full items-center">
        {/* logo svg */}
        <div className=" w-[119px] h-[21px] md:w-[70%] md:h-[50px] z-10">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 680 71"
              fill="none"
            >
              <path
                d="M500.612 29.0454V16.1364H504.475C510.274 16.1364 512.852 18.0727 512.852 22.5909C512.852 27.1091 510.274 29.0454 504.475 29.0454H500.612ZM500.612 54.8636V41.9546H507.7C513.499 41.9546 516.073 43.8909 516.073 48.4092C516.073 52.9272 512.852 54.8636 507.053 54.8636H500.612ZM437.471 43.2454L443.914 23.8818L450.357 43.2454H437.471ZM289.285 32.9182V16.1364H295.084C301.526 16.1364 305.392 18.7182 305.392 24.5273C305.392 29.6909 301.526 32.9182 295.728 32.9182H289.285ZM638.766 69.0636H680V54.8636H656.162V1.29091H638.766V69.0636ZM591.732 69.0636H632.967V54.8636H609.129V1.29091H591.732V69.0636ZM540.189 69.0636H584.644V54.8636H557.586V41.9546H581.424V27.7546H557.586V16.1364H584.644V1.29091H540.189V69.0636ZM483.216 69.0636H509.632C525.739 69.0636 534.116 61.318 534.116 49.7C534.116 41.3091 529.602 36.1454 521.872 33.5636C527.671 30.9818 530.249 26.4636 530.249 19.3636C530.249 9.03636 523.161 1.29091 506.411 1.29091H483.216V69.0636ZM409.767 69.0636H429.095L432.961 57.4456H455.511L459.377 69.0636H478.706L453.578 1.29091H434.894L409.767 69.0636ZM351.136 35.5C351.136 57.4456 366.599 71 387.861 71C394.948 71 402.679 69.7092 407.19 66.482L407.834 47.7636C402.679 52.9272 396.236 54.218 389.794 54.218C378.197 54.218 369.177 47.7636 369.177 35.5C369.177 23.2364 378.197 16.7818 389.794 16.7818C396.236 16.7818 402.679 18.0727 407.834 23.2364L407.19 3.87273C402.679 1.29091 394.948 0 387.861 0C366.599 0 351.136 14.8454 351.136 35.5ZM271.245 69.0636H289.285V45.8273H291.218L309.258 69.0636H330.519L309.902 43.2454C318.278 40.0182 323.432 32.2727 323.432 23.2364C323.432 10.9727 315.056 1.29091 297.661 1.29091H271.245V69.0636ZM219.702 69.0636H264.158V54.8636H237.742V41.9546H261.58V27.7546H237.742V16.1364H264.158V1.29091H219.702V69.0636ZM172.025 69.0636H190.709L215.836 1.29091H197.152L181.689 47.1182L166.226 1.29091H146.897L172.025 69.0636ZM124.992 69.0636H143.032V1.29091H124.992V69.0636ZM77.3146 69.0636H119.193V54.8636H94.7103V1.29091H77.3146V69.0636ZM35.4358 54.218C25.7715 54.218 18.04 46.4727 18.04 35.5C18.04 24.5273 25.7715 16.7818 35.4358 16.7818C45.1001 16.7818 53.4759 24.5273 53.4759 35.5C53.4759 46.4727 45.1001 54.218 35.4358 54.218ZM35.4358 71C55.4087 71 71.5157 55.5092 71.5157 35.5C71.5157 15.4909 55.4087 0 35.4358 0C15.4629 0 0 14.8454 0 35.5C0 56.1544 16.1072 71 35.4358 71Z"
                fill="black"
                className="fill-black dark:fill-white"
              />
            </svg>
          </Link>
        </div>
        {/* logo svg */}
        <div className="hidden md:flex ml-4">
          <h5 className="px-2 cursor-pointer text-sm capitalize hover:border-b hover:border-b-black dark:hover:border-b-white pb-1 duration-300">
            men
          </h5>
          <h5 className="px-2 cursor-pointer text-sm capitalize hover:border-b hover:border-b-black dark:hover:border-b-white pb-1 duration-300">
            Women
          </h5>
        </div>
      </div>

      {/* right side */}

      <div className="flex md:hidden items-center">
        <div>
          <ModeToggle />
        </div>
        <div
          onClick={() => {
            setSearchWrapper(true);
          }}
          className="px-2 cursor-pointer hover:border-b hover:border-b-black pb-1 duration-300"
        >
          <SearchIcon className="w-5 h-5 mr-2 " />
        </div>
        <div className="px-2 cursor-pointer hover:border-b hover:border-b-black pb-1 duration-300">
          <Link href={"./basket"}>
            <ShoppingCart className="w-5 h-5 mr-2 cursor-pointer" />
          </Link>
        </div>
        <div className="px-2 cursor-pointer hover:border-b hover:border-b-black pb-1 duration-300">
          <MenuIcon
            className="w-5 h-5 mr-2 cursor-pointer"
            onClick={() => setMenuMobile(true)}
          />
        </div>
      </div>
      {/* text right side after md display flex */}
      <div className="hidden md:flex items-center">
        <div className="mr-2">
          <ModeToggle />
        </div>
        <span
          onClick={() => {
            setSearchWrapper(true);
          }}
          className="px-2 cursor-pointer text-sm capitalize hover:border-b hover:border-b-black dark:hover:border-b-white duration-300"
        >
          search
        </span>
        {login ? (
          <Link href={"/account"}>
            <span className="px-2 cursor-pointer text-sm capitalize hover:border-b hover:border-b-black dark:hover:border-b-white duration-300">
              Account
            </span>
          </Link>
        ) : (
          <Link href={"/login"}>
            <span className="px-2 cursor-pointer text-sm capitalize hover:border-b hover:border-b-black dark:hover:border-b-white duration-300">
              log in
            </span>
          </Link>
        )}

        <Link
          href={"./basket"}
          className={`px-2 cursor-pointer text-sm capitalize  hover:border-b hover:border-b-black dark:hover:border-b-white duration-300`}
        >
          shop({basket.length})
        </Link>
      </div>
    </header>
  );
}

export default Header;
