"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AllProdocts() {
  const [item, setItem] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [arrLoading] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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
    <div className="flex flex-wrap gap-0.5 pt-40 bg-white dark:bg-black relative">
      {/* loading */}
      {loading ? (
        <div className="w-full flex flex-wrap gap-0.5">
          {/* loading */}

          {arrLoading.map((val, i) => {
            return (
              <div key={i} className="w-[49%] md:w-[16.5%] h-[280px] relative">
                <Skeleton className="w-full h-full bg-gray-200" />
                <div className="w-[80%] h-20 bg-gray-300 absolute bottom-10 rounded-4xl left-1/2 -translate-x-1/2"></div>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* products */}
      {loading === false &&
        item.length > 0 &&
        item.map((val: any, i: number) => {
          return (
            <div className="w-[49%] md:w-[16.5%] h-[280px]">
              <Link href={val.id} className="w-fit h-fit">
                <div className=" w-full h-full group relative cursor-pointer">
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
              </Link>
            </div>
          );
        })}

      {loading === false ? (
        <div className="w-1/2 md:w-[16.5%] h-[280px] group relative bg-[#e8e9e4] hover:bg-[#bebebe] duration-300 flex justify-center items-center text-black cursor-pointer">
          View All
        </div>
      ) : null}
    </div>
  );
}

export default AllProdocts;
