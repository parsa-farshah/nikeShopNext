import React from "react";
import SearchComponent from "./SearchComponent";
import FooterMobileAccordion from "./FooterMobileAccordion";
import Image from "next/image";

function Footer() {
  const support = ["Shipping & FAQs", "Contact", "HSA/FSA", "Blog", "Sitemap"];
  const company = [
    "About",
    "Stores",
    "Ambassadors & Creators",
    "Wholesale Inquiries",
  ];
  const legal = [
    "Ethical Manufacturing",
    "Privacy Policy",
    "Terms of Service",
    "Accessibility",
  ];

  const social = ["Instagram", "Facebook"];
  return (
    <div className="pt-[160px] px-4 md:px-8 pb-8 bg-white dark:bg-black">
      <div className="w-full flex flex-col md:flex-row justify-between">
        {/*------------------------------- Newsletter -------------------------*/}
        <div className="w-full md:w-[24%] flex flex-col gap-y-5 ">
          <h2 className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
            Newsletter
          </h2>
          <p className="font-bold">
            Sign up now to get early access to exclusive launches and events.
          </p>
          <div className="w-full relative">
            <SearchComponent placeholder={"Email address"} />
            <span className="text-sm font-bold absolute top-0 right-0 cursor-pointer px-2 bg-white dark:bg-black">
              Subscribe
            </span>
          </div>
        </div>
        {/*------------------------------- end Newsletter -------------------------*/}
        <div className="w-[70%] md:flex flex-col md:flex-row  md:justify-between hidden">
          <div className="w-[24%]">
            <h2 className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
              Support
            </h2>
            <ul>
              {support.map((val, i) => {
                return (
                  <div className="py-3" key={i}>
                    <li className="w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300  cursor-pointer">
                      {val}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[24%]">
            <h2 className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
              Company
            </h2>
            <ul>
              {company.map((val, i) => {
                return (
                  <div className="py-3" key={i}>
                    <li className=" w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300 cursor-pointer">
                      {val}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[24%]">
            <h2 className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
              Legal
            </h2>
            <ul>
              {legal.map((val, i) => {
                return (
                  <div className="py-3" key={i}>
                    <li className=" w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300 cursor-pointer">
                      {val}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[24%]">
            <h2 className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
              Social
            </h2>
            <ul>
              {social.map((val, i) => {
                return (
                  <div className="py-3" key={i}>
                    <li className=" w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300  cursor-pointer">
                      {val}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {/* footer accordion mobile size */}
        <div className="flex md:hidden mt-10">
          <FooterMobileAccordion />
        </div>
      </div>
      {/* logo */}
      <div className="relative w-full h-[133px] mt-10">
        <Image className="w-full h-fit" fill src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
