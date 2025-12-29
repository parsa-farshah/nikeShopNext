import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FooterMobileAccordion() {
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
          Support
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
          Company
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul>
            {company.map((val, i) => {
              return (
                <div className="py-3" key={i}>
                  <li className="w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300  cursor-pointer">
                    {val}
                  </li>
                </div>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
          Legal
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul>
            {legal.map((val, i) => {
              return (
                <div className="py-3" key={i}>
                  <li className="w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300  cursor-pointer">
                    {val}
                  </li>
                </div>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-sm text-[#4F4B46] dark:text-[#d1d1d1ee]">
          Social
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul>
            {social.map((val, i) => {
              return (
                <div className="py-3" key={i}>
                  <li className="w-fit text-sm font-bold hover:border-b hover:border-b-black dark:hover:border-b-white duration-300  cursor-pointer">
                    {val}
                  </li>
                </div>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FooterMobileAccordion;
