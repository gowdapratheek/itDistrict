import { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import Have from "./Have";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";

const images = [
  "/landing-page.jpg",
  "/it-logo.png",
  "/fav.png",
  "/testimonails-img.png",
  "/testimonails-img.png",
];

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
      <div
        className="relative h-[85vh] w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-45"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
          <h1 className="text-[2rem] lg:text-[3rem] font-bold text-[#00BCFF]">
            Professional IT Services
          </h1>
          <p className="text-center lg:w-[50%] w-full lg:text-base text-sm text-white">
            We empower your business with expert Managed IT Services, The IT
            District offers top-tier Managed IT Services and IT Support,
            delivered by skilled, certified technicians utilizing cutting-edge
            technologies and proven processes. We guarantee 24x7 uptime or
            servers, network devices, infrastructure, and business applications,
            ensuring seamless service.
          </p>

          <div className="flex lg:w-1/3 w-full justify-around mt-4">
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
