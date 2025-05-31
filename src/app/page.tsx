import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Announcements from "./components/Announcements";
import Footer from "./components/Footer";
import TicketSale from "./components/TicketSale";
import Schedule from "./components/Schedule";
import ShowcaseSlider from "./components/Showcase&Slider";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Announcements />
      <ShowcaseSlider />
      <TicketSale />
      <Schedule />
      <Footer />
    
    </div>
  );
}
