import Image from "next/image";
import bgMobile from "../../public/bgmobile.jpg";
import bgDesktop from "../../public/desktop.png";
import Link from "next/link";
import BestSellers from "./BestSellers";

function Main() {
  return (
    <div>
      {/* header */}
      <div className="w-full h-[90vh] relative">
        <Image
          className="md:hidden"
          fill
          src={bgMobile}
          objectFit="cover"
          alt="background mobile"
        />
        <Image
          className="hidden md:block"
          fill
          src={bgDesktop}
          objectFit="cover"
          alt="background mobile"
        />
        <div className="absolute bottom-[10%] left-10 text-white">
          <h2 className="text-2xl md:text-[36px] mb-4 font-bold">
            Holiday Sale
          </h2>
          <p className="text-sm mb-14">Our Best Prices Of The Year</p>
          <div className="flex gap-5">
            <Link
              href={"#"}
              className="border-b text-sm border-b-white hover:border-b-amber-600 duration-300"
            >
              Shop Men
            </Link>
            <Link
              href={"#"}
              className="border-b text-sm border-b-white hover:border-b-amber-600 duration-300"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </div>
      {/* best sellers */}
      <div className="w-full h-fit pt-20 bg-white dark:bg-black">
        <div className="px-8 pb-4 flex flex-col md:flex-row md:justify-between">
          <h2 className="font-bold">Best Sellers</h2>
          <div className="flex gap-5">
            <Link
              href={"#"}
              className="border-b text-sm font-semibold border-b-black dark:border-b-white dark:hover:border-b-amber-600 hover:border-b-amber-600 duration-300"
            >
              Shop Men
            </Link>
            <Link
              href={"#"}
              className="border-b text-sm border-b-black font-semibold dark:border-b-white dark:hover:border-b-amber-600 hover:border-b-amber-600 duration-300"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </div>
      {/* data */}
      <div className="w-full flex">
        <BestSellers />
      </div>
    </div>
  );
}

export default Main;
