"use client";
import Image from "next/image";
import useUserStore from "../store";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { useEffect } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";

function page() {
  const { basket } = useUserStore();
  const totalItem = basket.reduce(
    (sum, item) => sum + Number(item.salePrice * item.count),
    0
  );
  const deleteItem = useUserStore((state) => state.deleteItem);
  const increaseBtn = useUserStore((state) => state.increaseBtn);
  const decrease = useUserStore((state) => state.decrease);

  useEffect(() => {}, [basket]);

  return (
    <div>
      <div className="w-full bg-white dark:bg-black pb-40 flex flex-wrap justify-between ">
        <Header />
        <div className="w-[65%] h-fit  px-10 ">
          {basket &&
            basket.map((val, i) => {
              return (
                <div
                  className="w-full h-full border-t border-t-black dark:border-t-white pt-8"
                  key={i}
                >
                  <div className="cursor-pointer w-full h-full">
                    <div className="w-full h-[200px] flex items-center justify-between">
                      {/* image */}
                      <div className="w-[150px] h-[200px] relative group overflow-hidden">
                        {/* default image */}
                        <Image
                          src={val.colors[0].images.card.default}
                          alt={val.model}
                          fill
                          className="object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
                        />
                        {/* hover image */}
                        <Image
                          src={val.colors[0].images.card.hover}
                          alt={val.model}
                          fill
                          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </div>
                      {/* title and sale price */}
                      <div className=" h-full flex items-center justify-center flex-col gap-y-4">
                        <h3>{val.title}</h3>
                        <h5 className="font-black">${val.salePrice}</h5>
                      </div>
                      {/* add delete and count */}
                      <div className="flex gap-2 items-center px-4 py-2 border border-black dark:border-white rounded-sm">
                        <MinusIcon onClick={() => decrease(val.id)} />
                        <span className="font-semibold text-lg">
                          {val.count}
                        </span>
                        <PlusIcon onClick={() => increaseBtn(val.id)} />
                      </div>
                      {/* price all */}
                      <div>
                        <span className="text-lg font-bold">${val.salePrice * val.count}</span>
                      </div>
                      {/* delete */}
                      <TrashIcon
                        className="w-8 h-8"
                        onClick={() => {
                          deleteItem(val.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* total */}
        <div className="w-full md:w-[30%]  px-4 p-9">
          <h5 className="mb-6">Order Summary</h5>
          <div className="py-5  border-t border-t-black dark:border-t-white border-b border-b-black dark:border-b-white flex justify-between">
            <div className="px-7 w-full flex justify-between">
              <span className="text-4xl font-bold">Total</span>{" "}
              <span className="text-4xl font-bold">${totalItem}</span>
            </div>
          </div>
          {/* checkout btn */}
          <button className="border border-black dark:border-white w-full h-14 cursor-pointer mt-6 hover:bg-[#ebebeb] dark:hover:bg-[#1a1a1a] duration-300 font-semibold">
            Check Out
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
