import Button from "./Button.jsx";
import "./styles/Home.css";
import Marquee from "./Marquee.jsx";

export default function Home() {
  return (
    <section id="home" className="flex flex-col h-screen justify-center xl:text-9xl">
      {/* Main Content */}
      <div className="flex items-center justify-evenly flex-grow">
        <div id="homeTextBox">
          <p id="homeTextUpper" className="mb-2 text-xl w-fit p-2 font-mono">
            NEW <span id="homeTextUpperRed font-mono">COLLECTION</span>
          </p>
          <h1 id="homeTextMain" className="text-7xl inline-block mr-6 mb-6">THE</h1>
          <span className="text-7xl bg-red-700 text-white px-3">WEATHER</span>
          <h1 className="text-7xl">STYLE</h1>
          <Button />
        </div>
        <div id="homeTextImage">
          <img src="/img/3_men_standing_pic.png" alt="3 mens standing" className="w-[50vw] -mb-12" />
        </div>
      </div>

      {/* Marquee at Bottom */}
      <div className="w-full">
        <Marquee />
      </div>
    </section>
  );
}

