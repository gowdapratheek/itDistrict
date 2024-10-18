import { DollarSign, Calendar, Monitor, ThumbsUp } from "lucide-react";
import { useState } from "react";

const Have = () => {
  const [selected, setSelected] = useState("dollar");

  const content = {
    dollar: {
      title: "HAVE YOU EVER SAID",
      heading: "I need to save money",
      text: "Our IT Professional services are much pocket friendly, and we can customize are services as per the demand.",
    },
    calendar: {
      title: "HAVE YOU EVER SAID",
      heading: "I need to save time",
      text: "Our professionals are smart enough to understand your business objective and can provide solutions within faster timelines that will save not only time but also cost. ",
    },
    monitor: {
      title: "HAVE YOU EVER SAID",
      heading: "I need Simplicity",
      text: "Our process and approach towards a problem will be simplified by using cutting-edge tools and processes which can reduce the complexity and yield good results.",
    },
    thumbsUp: {
      title: "HAVE YOU EVER SAID",
      heading: "I need reliable service",
      text: "In our 20 years of experience in the IT Industry, we have been more trusted and reliable vendors and partners to our customers in their every step of their IT goals. ",
    },
  };

  return (
    <div className="flex flex-col items-center mx-auto w-[90vw] p-4 bg-[#d9d9d9] my-4">
      <div className="w-full h-full bg-white shadow-lg border p-4 lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-2 gap-0 lg:w-1/2">
          <div
            onClick={() => setSelected("dollar")}
            className={`flex items-center justify-center p-4 transition-all duration-200 ease-in-out  cursor-pointer bg-gray-200 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] ${
              selected === "dollar"
                ? "bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white"
                : ""
            }`}
          >
            <DollarSign className="w-14 h-20 lg:h-32 lg:w-20" />
          </div>
          <div
            onClick={() => setSelected("calendar")}
            className={`flex items-center justify-center p-4 transition-all duration-200 ease-in-out  cursor-pointer  hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] ${
              selected === "calendar"
                ? "bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white"
                : ""
            }`}
          >
            <Calendar className="w-14 h-20 lg:h-32 lg:w-20" />
          </div>
          <div
            onClick={() => setSelected("monitor")}
            className={`flex items-center justify-center p-4 transition-all duration-200 ease-in-out  cursor-pointer  hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] ${
              selected === "monitor"
                ? "bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white"
                : ""
            }`}
          >
            <Monitor className="w-14 h-20 lg:h-32 lg:w-20" />
          </div>
          <div
            onClick={() => setSelected("thumbsUp")}
            className={`flex items-center justify-center p-4 transition-all duration-200 ease-in-out  cursor-pointer bg-gray-200 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] ${
              selected === "thumbsUp"
                ? "bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white"
                : ""
            }`}
          >
            <ThumbsUp className="w-14 h-20 lg:h-32 lg:w-20" />
          </div>
        </div>

        {/* Text section */}
        <div className="text-center lg:w-1/2 flex flex-col justify-center mt-6 lg:mt-0 lg:px-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            {content[selected].title}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {content[selected].heading}
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            {content[selected].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Have;
