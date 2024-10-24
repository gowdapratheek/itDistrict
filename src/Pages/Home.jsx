import { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import Have from "./Have";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <video
        className="w-full h-[85vh] object-cover object-center"
        src="/1.mp4"
        autoPlay
        muted
        onEnded=""
      />
      <div
        className="relative h-[85vh] w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        {/*<div className="absolute inset-0 z-0 bg-black opacity-45"></div>*/}

        <div className="relative z-10 flex flex-col items-center h-[85vh] px-4 text-center top-[70%]">
          <div className="flex  lg:w-1/3 w-full justify-around">
            <a
              href="#services"
              className="cursor-pointer border border-[#00BCFF] w-[45%] text-sm lg:text-base py-2 bg-gradient-to-r from-[#00BCFF] to-[#007FFF] rounded-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white"
            >
              IT ASSESSMENT
            </a>
            <a
              href="tel:+1(587) 956-7985"
              className="cursor-pointer w-[45%] text-sm lg:text-base py-2 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] border border-[#00BCFF] bg-transparent hover:text-white rounded-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Have />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <AboutUs />
      </div>
    </>
  );
}

export default Home;
