import { useState } from "react";
import { Heart, Smile, Cpu, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const [selected, setSelected] = useState("care");

  const content = {
    care: {
      title: "WE CARE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white",
      icon: <Heart className="w-16 h-16" />,
    },
    dependable: {
      title: "DEPENDABLE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white",
      icon: <Smile className="w-16 h-16" />,
    },
    passion: {
      title: "PASSION",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white", // Hover effect for Passion
      icon: <Cpu className="w-16 h-16" />,
    },
    service: {
      title: "SERVICE",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white", // Hover effect for Service
      icon: <Wrench className="w-16 h-16" />,
    },
  };

  return (
    <div className="w-full bg-gray-100 py-8 px-4 lg:px-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </div>

      {/* Icon and Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(content).map((key) => (
          <div
            key={key}
            onClick={() => setSelected(key)}
            className={`p-6 rounded-lg transition-all cursor-pointer hover:shadow-lg 
              ${selected === key ? content[key].color : "bg-gray-200"}
              ${content[key].hoverColor} 
              flex flex-col items-center justify-center`}
          >
            {content[key].icon}
            <h3 className="text-lg font-bold mt-4">{content[key].title}</h3>

            <p
              className={`text-center mt-2 text-sm transition-all  ${
                selected === key ? "block" : "hidden lg:block group-hover:block"
              }`}
            >
              {content[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
