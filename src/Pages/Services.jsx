import { useState } from "react";
import {
  Server,
  Shield,
  Briefcase,
  Folder,
  Network,
  Cloud,
  Monitor,
  Database,
  Code,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    link: "#managed-it",
  },
  {
    icon: Shield,
    title: "Managed Cybersecurity Services",
    link: "#cybersecurity",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    link: "#professional",
  },
  {
    icon: Folder,
    title: "IT Field Support",
    link: "#it-support",
  },
  {
    icon: Network,
    title: "Co-Managed IT Services",
    link: "#co-managed",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    link: "#cloud",
  },
  {
    icon: Monitor,
    title: "Deskside/End-User Support",
    link: "#deskside",
  },
  {
    icon: Database,
    title: "Data Center Support",
    link: "#data-center",
  },
  {
    icon: Code,
    title: "Web Development",
    link: "#web-development",
  },
];

const ITServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        IT Services & Solutions We Offer to Edmonton Businesses
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-8 px-4 md:px-12">
        {services.map((service, index) => {
          const Icon = service.icon; 

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon */}
              <Icon size={50} />

              {/* Service Title */}
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>

              {/* Mobile: Always show "Learn more" */}
              <a
                href={service.link}
                className="mt-2 text-sm font-medium text-[#ffc700] md:hidden"
              >
                Learn more &gt;
              </a>

              {/* Desktop "Learn more" on hover */}
              {hoveredService === index && (
                <a
                  href={service.link}
                  className="absolute inset-0  items-center justify-center bg-black rounded-lg bg-opacity-50 text-md  text-yellow-400 md:flex hidden font-bold"
                >
                  Learn more &gt;
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ITServicesGrid;
