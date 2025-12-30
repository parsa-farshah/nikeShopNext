"use client";
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

interface Color {
  name: string;
  slug: string;
  images: {
    card: { default: string; hover: string };
    gallery: string[];
  };
  sizes: { size: number; available: boolean }[];
}

interface Product {
  id: string;
  model: string;
  price: number;
  salePrice: number;
  saveAmount: number;
  rating: number;
  reviews: number;
  shortDescription: string;
  description: string;
  colors: Color[];
  badges: string[];
  extra: {
    fit: string[];
    shipping: string;
  };
}

interface Category {
  products: Product[];
}

function BestSellers() {
  const [item, setItem] = useState<Category[]>([]);

  async function dataFetch(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);

      let data = await res.json();
      data = data.categories;
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataFetch(
      "https://raw.githubusercontent.com/parsa-farshah/olivercabell/main/oliver.json"
    );
  }, []);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {/* arrow left */}
        <button className="custom-prev w-[40px] h-[40px] md:w-[60px] md:h-[60px]  absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black flex justify-center items-center cursor-pointer">
          <Image width={30} height={30} src={arrowLeft} alt="arrow left" />
        </button>
        {/* arrow right */}
        <button className="custom-next w-[40px] h-[40px] md:w-[60px] md:h-[60px] absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black flex justify-center items-center cursor-pointer">
          <Image width={30} height={30} src={arrowRight} alt="arrow right" />
        </button>
        {item[0]?.products.map((val, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[559px] relative group overflow-hidden">
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
              <div className="w-full px-[5%] absolute bottom-10 left-0 flex justify-between items-center">
                {/* left side */}
                <div className="flex flex-col">
                  <span className="font-bold">{val.id}</span>
                  <span className="font-semibold">{val.colors[0].name}</span>
                </div>
                {/* right side */}
                <div className="flex gap-2">
                  <del>${val.price}</del>
                  <span>${val.salePrice}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSellers;
