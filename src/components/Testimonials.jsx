import { useState, useEffect } from "react";
import test from "../assets/testimonails-img.png";

const Testimonials = () => {
  const testimonials = [
    {
      title: "OUTSTANDING PROVIDER",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Allan Wesis",
      company: "Datto, Inc.",
    },
    {
      title: "GO ABOVE AND BEYOND",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Jared Zamaow",
      company: "NABI",
    },
    {
      title: "Exceptional",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Silvia Danchuk",
      company: "BDG Ltd",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Switch testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="max-w-7xl mx-auto p-8 lg:p-16">
      <div className="bg-white shadow-[0px_0px_30px_grey] p-6 lg:p-12 flex flex-col lg:flex-row items-center text-center lg:text-left relative my-8 ">
        {/* Image (responsive scaling for large screens) */}
        <div className="hidden md:block relative w-full md:w-1/3 mb-8 lg:mb-0">
          <img
            src={test} // replace with the actual image path
            alt="Testimonial Image"
            className="w-full h-auto object-cover rounded-full lg:max-w-[400px] lg:max-h-[400px] mx-auto"
          />
        </div>

        {/* Testimonial Content */}
        <div className="lg:w-2/3 lg:pl-12">
          <h2
            className="text-2xl lg:text-4xl font-semibold mb-4"
            aria-live="polite"
          >
            {testimonials[currentIndex].title}
          </h2>
          <p
            className="text-gray-600 text-lg lg:text-xl mb-6"
            aria-live="polite"
          >
            {testimonials[currentIndex].text}
          </p>
          <p className="font-semibold text-lg lg:text-xl">
            - {testimonials[currentIndex].author} |{" "}
            {testimonials[currentIndex].company}
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-[-40px] lg:bottom-[-60px] flex justify-center w-full space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
