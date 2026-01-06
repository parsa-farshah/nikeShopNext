"use client";
import { useState } from "react";
import useUserStore from "../store";

function ClickAddToBasket({ item }: { item: any }) {
  const addItem = item;
  const updateBasket = useUserStore((state) => state.updateBasket);


  return (
    <div
      onClick={() => updateBasket(addItem)}
      className="w-full h-16 flex justify-center items-center border border-black dark:border-white mt-10 font-semibold cursor-pointer bg-white dark:bg-black hover:bg-[#ebebeb] dark:hover:bg-[#1a1a1a] duration-300"
    >
      Add to cart
    </div>
  );
}

export default ClickAddToBasket;
