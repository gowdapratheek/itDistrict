import { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import Have from "./Have";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";

const images = [
  { img: "/1.jpg", title: "Professional IT services" },
  { img: "/2.jpg", title: "Cybersecurity" },
  { img: "/3.jpg", title: "Digital marketing" },
  { img: "/4.jpg", title: "Android development" },
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    let interval;
    if (videoEnded) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Carousel interval time
    }
    return () => clearInterval(interval);
  }, [videoEnded]);

  return (
    <>
      <div className="carousel-container overflow-hidden relative w-full h-[85vh]">
        <div
          className={`absolute w-full h-full transition-transform duration-1000 ${
            videoEnded ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <video
            className="w-full h-full object-contain md:object-cover"
            src="/1.mp4"
            autoPlay
            muted
            onEnded={() => setVideoEnded(true)}
          />
        </div>

        {/* Carousel Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-1000 ${
              videoEnded && currentImageIndex === index
                ? "translate-x-0"
                : currentImageIndex > index
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{
              backgroundImage: `url(${image.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-45"></div>

            {/* Carousel Content */}
            <div className="relative z-10 flex flex-col items-center h-[85vh] px-4 text-center top-[50%]">
              <h1 className="text-[2rem] lg:text-[4rem] font-bold text-white mb-20">
                {image.title}
              </h1>
              <div className="flex lg:w-1/3 w-full justify-around">
                <a
                  href="/services"
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
        ))}

        {/* Dots for navigation */}
        {videoEnded ? (
          <div className="absolute bottom-[5px] lg:bottom-[10px] flex justify-center w-full space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-between">
        <Have />
        <WhyChooseUs />
        <Services />
        <AboutUs />
      </div>
    </>
  );
}

export default Home;
