import Button from "./Button.jsx";
import "./styles/Home.css";
import Marquee from "./Marquee.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="flex flex-col h-screen justify-center">
      {/* Main Content */}
      <div className="flex items-center justify-evenly flex-grow relative bottom-0">
        <div data-aos="fade-right">
          <div id="homeTextBox" className=" text-white absolute p-4 rounded-md shadow-md shadow-black">
            <p className="text-sm mb-4">NEW COLLECTION</p>
            <h2 className="text-4xl mb-4">WEAR YOUR STORY,</h2>
            <h2 className="text-4xl mb-2">OWN YOUR STYLE</h2>
            <a href="#items">
              <button className="border border-white rounded-sm mt-2 p-2 hover:bg-white hover:text-black transition duration-300">Explore Collection</button>
            </a>
          </div>
          <img src="/img/man-sitting.png" alt="man sitting" className="-mb-48 -ml-16" />
        </div>
        <div id="homeTextImage" data-aos="fade-left">
          <div className="homeCircle shadow-xl shadow-black">
          </div>
          <img src="/img/3_men_standing_pic.png" alt="3 mens standing" className="homeMainImage w-[50vw] -mb-12 z-10" />
        </div>
      </div>

      {/* Marquee at Bottom */}
      <div className="w-full">
        <Marquee />
      </div>
    </section>
  );
}

