"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function AllProdocts() {
  const [item, setItem] = useState<any[]>([]);
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
    dataFetch("https://69559c6eb9b81bad7af13855.mockapi.io/data");
  }, []);
  return (
    <div className="flex flex-wrap gap-0.5 py-40">
      {item.length > 0 &&
        item[0].data[0].products.map((val: any, i: number) => {
          return (
            <div className="w-[49%] md:w-[16.5%] h-[280px] group relative cursor-pointer">
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
            </div>
          );
        })}
      {item.length > 0 &&
        item[0].data[1].products.map((val: any, i: number) => {
          return (
            <div className="w-[49%] md:w-[16.5%] group h-[280px] relative cursor-pointer">
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
            </div>
          );
        })}
      {item.length > 0 &&
        item[0].data[2].products.map((val: any, i: number) => {
          return (
            <div className="w-[49%] md:w-[16.5%] h-[280px] group relative cursor-pointer">
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
            </div>
          );
        })}
      <div className="w-1/2 md:w-[16.5%] h-[280px] group relative bg-[#e8e9e4] hover:bg-[#bebebe] duration-300 flex justify-center items-center text-black cursor-pointer">
        View All
      </div>
    </div>
  );
}

export default AllProdocts;
