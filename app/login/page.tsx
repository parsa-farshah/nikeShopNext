
import Header from "../compenents/Header";
import { Oxanium } from "next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import LogIn from "../compenents/LogIn";

const oxanium = Oxanium({
  subsets: ["latin"],
});

function page() {


  return (
    <>
      <Header />
      <LogIn />
    </>
  );
}

export default page;
