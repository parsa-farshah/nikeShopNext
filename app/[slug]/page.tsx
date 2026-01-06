"use client";
import { useParams } from "next/navigation";
import Footer from "../compenents/Footer";
import Header from "../compenents/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrowLeft from "../../public/arrowLeft.svg";
import arrowRight from "../../public/arrowRight.svg";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ClickAddToBasket from "./ClickAddToBasket";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  ArrowLeft,
  CheckCircle2Icon,
  PopcornIcon,
  XCircleIcon,
} from "lucide-react";
import useUserStore from "../store";

function Page({ params }: { params: any }) {
  let temp = useParams();
  const _id = temp.slug;
  // const [alert, setAlert] = useState(false);
  const [item, setItem] = useState<any>("");
  const [loading, setLoading] = useState(true);

  async function dataFetch(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);

      let data = await res.json();
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataFetch("https://69559c6eb9b81bad7af13855.mockapi.io/data/" + _id);
  }, []);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div>
      <Header />
      {/* slider and text */}
      <div className="w-full flex flex-wrap flex-col-reverse  md:flex-row bg-white dark:bg-black">
        {/* products detail */}
        <div className="w-full md:w-[40%] h-fit px-[2%]  py-[4%] md:pt-[10%]">
          {/* home link */}
          <div className="flex gap-2">
            <Link href={"./"}>Home</Link>
            <h2>{">"}</h2>
            <Link href={"#"}>{item.id}</Link>
          </div>

          <h6 className="text-[#c94925] font-semibold w-full mt-4">Sale</h6>
          {/* model and price */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">
              {loading ? (
                <Skeleton className="w-20 h-4 bg-gray-300" />
              ) : (
                item.title
              )}{" "}
            </h4>
            <div className="flex flex-col items-end">
              <div className="flex gap-2">
                <del className="text-[#b8b8b8da] text-lg">
                  {loading ? (
                    <Skeleton className="w-20 h-4 bg-gray-300" />
                  ) : (
                    `$${item.price}`
                  )}
                </del>
                <span className="text-xl font-bold">
                  {loading ? (
                    <Skeleton className="w-20 h-4 bg-gray-300" />
                  ) : (
                    `$${item.salePrice}`
                  )}
                </span>
              </div>
              <span className="text-[#e95229] text-xs mt-2 font-semibold">
                Save{" "}
                {loading ? (
                  <Skeleton className="w-20 h-4 bg-gray-300" />
                ) : (
                  `$${item.saveAmount}`
                )}
              </span>
            </div>
          </div>
          {/* stars and text */}
          <div className="mt-3 flex gap-2 items-center">
            {/* star */}
            <div className="flex gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            {/* text */}
            <span className="flex items-center">
              (
              {loading ? (
                <Skeleton className="w-20 h-4 bg-gray-300" />
              ) : (
                `${item.reviews}`
              )}
              )
            </span>
          </div>

          {/* description short */}
          <p className="mt-9 mb-2 font-semibold text-sm">
            {loading ? (
              <div className="flex flex-col gap-y-1">
                <Skeleton className="w-f-full h-4 bg-gray-300" />
                <Skeleton className="w-f-full h-4 bg-gray-300" />
              </div>
            ) : (
              item.shortDescription
            )}
          </p>

          {/* fit */}
          <div className="mt-8">
            <h5>Fit</h5>
            {loading ? (
              <div className="flex flex-col gap-y-1">
                <Skeleton className="w-f-full h-6 bg-gray-300" />
              </div>
            ) : null}
            {/* radio group */}
            <RadioGroup defaultValue="comfortable" className="mt-4 flex">
              {item &&
                item.extra.fit.map((val: string, i: string) => {
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <RadioGroupItem
                        value={i}
                        id={"r" + i}
                        className="border border-black dark:border-white"
                      />
                      <label htmlFor={"r" + i} className="text-sm">
                        {val}
                      </label>
                    </div>
                  );
                })}
            </RadioGroup>
          </div>

          {/* add to cart */}
          <ClickAddToBasket item={item} />

          {/* got to basket page */}
          <Link
            className="font-semibold w-fit mt-4 flex bg-gray-200 border border-black dark:border-white py-2 px-4"
            href={"./basket"}
          >
            Basket Page
          </Link>
        </div>

        {/* slider */}
        <div className="w-full md:w-[60%] bg-[#e8e9e4]  flex shrink-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop={true}
            speed={600}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full overflow-visible"
          >
            {/* arrow left */}
            <button className="custom-prev w-[40px] h-[40px] md:w-[60px] md:h-[60px]  absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black flex justify-center items-center cursor-pointer border border-white">
              <Image width={30} height={30} src={arrowLeft} alt="arrow left" />
            </button>
            {/* arrow right */}
            <button className="custom-next w-[40px] h-[40px] md:w-[60px] md:h-[60px] absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black flex justify-center items-center cursor-pointer border border-white">
              <Image
                width={30}
                height={30}
                src={arrowRight}
                alt="arrow right"
              />
            </button>
            {loading ? (
              /////////////////////// loading working
              <div className="flex gap-1 w-full">
                <SwiperSlide>
                  <div className="relative">
                    <Skeleton className="w-full h-[559px] bg-gray-300" />
                    {/* sale badge */}
                    <div className="w-16 h-8 absolute left-4 top-4 z-10 bg-gray-300 rounded-4xl font-bold"></div>
                    {/* image*/}
                    <div className="w-[80%] h-[30%] absolute left-[50%] -translate-x-1/2 bottom-[25%] z-10 bg-gray-300 rounded-4xl font-bold"></div>
                    {/* bottom image */}
                    <div className="w-full px-[5%] absolute bottom-10 left-0 flex justify-between items-center">
                      {/* left side */}
                      <div className="flex flex-col gap-y-1">
                        <div className="w-[96px] h-[21px] bg-gray-300 rounded-4xl"></div>
                        <div className="w-[46px] h-[17px] bg-gray-300 rounded-4xl"></div>
                      </div>
                      {/* right side */}
                      <div className="flex gap-2">
                        <div className="w-[60px] h-[15px] bg-gray-300 rounded-4xl"></div>
                        <div className="w-[36px] h-[15px] bg-gray-300 rounded-4xl"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ) : null}

            {loading === false &&
              item.colors[0].images.gallery.map((val: any, i: number) => (
                <SwiperSlide key={i} className="w-full md:!w-[800px] shrink-0">
                  <div className="w-full flex shrink-0  h-[559px] md:h-[640px] relative overflow-hidden">
                    {/* default image */}
                    <Image
                      src={val}
                      alt={item.model}
                      fill
                      className="object-cover duration-300 "
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* description */}
      <div className="bg-white dark:bg-black px-[5%] md:px-[10%] pt-8 md:pt-20">
        <p className="text-2xl md:text-4xl">
          {" "}
          {loading ? (
            <div className="flex flex-col gap-y-1">
              <Skeleton className="w-f-full h-16 bg-gray-300" />
              <Skeleton className="w-f-full h-16 bg-gray-300" />
              <Skeleton className="w-f-full h-16 bg-gray-300" />
            </div>
          ) : (
            item.description
          )}{" "}
        </p>
        {/* need help */}
        <h5 className="pb-1 border-b border-b-black dark:border-b-white w-fit mt-6 md:mt-10 hover:border-b-orange-600  dark:hover:border-b-orange-600 cursor-pointer duration-300">
          Need sizing help?
        </h5>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
