import Header from "../compenents/Header";
import { Oxanium } from "next/font/google";
import { useTheme } from "next-themes";
import LogIn from "../compenents/LogIn";
import Footer from "../compenents/Footer";

const oxanium = Oxanium({
  subsets: ["latin"],
});

function page() {
  return (
    <>
      <Header />
      <LogIn />
      <Footer />
    </>
  );
}

export default page;
