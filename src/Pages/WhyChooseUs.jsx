import { useState } from "react";
import { Heart, Smile, Cpu, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const [selected, setSelected] = useState("care");

  const content = {
    care: {
      title: "WE CARE",
      description:
        "We care for our customer’s business as we do ours, hence our attitude towards providing every solution has been validated and implemented with care and perfection.",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white",
      icon: <Heart className="w-16 h-16" />,
    },
    dependable: {
      title: "DEPENDABLE",
      description:
        "we pride ourselves on our technical expertise hence our ability to respond and provide services that can be trusted at any given time. ",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white",
      icon: <Smile className="w-16 h-16" />,
    },
    passion: {
      title: "PASSION",
      description:
        "Our passion to learn cutting-edge technologies and willingness to provide best support/solutions for our problems. ",
      color: "bg-gray-200 text-black",
      hoverColor:
        "hover:bg-gradient-to-r hover:from-[#00BCFF] hover:to-[#007FFF] hover:text-white", // Hover effect for Passion
      icon: <Cpu className="w-16 h-16" />,
    },
    service: {
      title: "SERVICE",
      description:
        "The IT District offers top-tier Managed IT Services and IT Support, delivered by skilled, certified technicians utilizing cutting-edge technologies and proven processes.",
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
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          We are a team of highly skilled professionals dedicated to providing
          innovative and reliable technology solutions to businesses of all
          sizes. With years of experience in the industry, we have developed a
          deep understanding of the unique challenges faced by our clients and
          are committed to delivering customized solutions tailored to their
          specific needs.
        </p>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          Our clients are one of the major energy and utilities companies in
          western Canada, Major hotels and a chain of restaurants across Canada.
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
