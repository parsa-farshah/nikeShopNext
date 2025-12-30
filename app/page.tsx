import Footer from "./compenents/Footer";
import Header from "./compenents/Header";
import Main from "./compenents/Main";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`h-fit ${oxanium.className}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
