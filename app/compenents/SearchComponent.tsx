"use client";
import useUserStore from "../store";

function SearchComponent({ placeholder }: { placeholder?: string }) {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder={placeholder}
        className={`w-full px-5 outline-0 focus:border-b focus:border-b-amber-600 caret-white text-sm text-black dark:text-white border-b border-b-black dark:border-b-white placeholder:text-[#4F4B46] dark:placeholder:text-[#d1d1d1ee] pb-3 placeholder:text-sm
        `}
      />
    </div>
  );
}

export default SearchComponent;
