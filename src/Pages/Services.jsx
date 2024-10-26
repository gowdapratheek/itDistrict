import { Link } from "react-router-dom";

import { useState, useRef, useCallback } from "react";
import {
  Server,
  Shield,
  Smartphone,
  Tv,
  Network,
  Cloud,
  Monitor,
  Database,
  Code,
  X,
} from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({
    top: 50, // Scroll to the top of the page
    behavior: "smooth", // Enable smooth scrolling
  });
};
const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    link: "#managed-it",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Server size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Managed IT Services</h3>
        <ul className="text-white list-disc pl-5">
          <li>System Installation and Configuration</li>
          <li>Backup and Storage</li>
          <li>Office Moves or New Office Setup</li>
          <li>Network Configuration and Wi-Fi Configuration.</li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Managed Cybersecurity Services",
    link: "#cybersecurity",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Shield size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">
          Managed Cybersecurity Services
        </h3>
        <p className="mx-[20%]">
          Cyber-attacks is an intentional effort to steal, expose, alter,
          disable or destroy anything that is vital to an organization and they
          continue to grow. Our Cybersecurity solution can safeguard your
          organization from cyber-attacks, Our Cybersecurity services offer a
          comprehensive protection against a wide range of cyber threats that
          can disrupt operations and compromise data. The IT District will
          Empower your business with our expert Cybersecurity solutions to
          shield your data and network
        </p>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Smartphone,
    title: "App Development",
    link: "#professional",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Smartphone size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">App Development</h3>
        <ul className="text-white list-disc pl-5">
          <li>
            Offer services to develop apps for multiple platforms like iOS,
            Android, or cross-platform frameworks such as React Native and
            Flutter.
          </li>
          <li>
            Focus on delivering a seamless and intuitive user experience (UX)
            and user interface (UI) that enhances customer satisfaction.
          </li>
          <li>
            Offer ongoing app maintenance, updates, bug fixes, and technical
            support post-launch to ensure smooth operations.
          </li>
          <li>
            Offer tailor-made apps to meet the specific needs of different
            businesses, industries, and user requirements.
          </li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Tv,
    title: "Digital Marketing",
    link: "#it-support",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Tv size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Digital Marketing</h3>
        <ul className="text-white list-disc pl-5">
          <li>
            Offer services to develop apps for multiple platforms like iOS,
            Android, or cross-platform frameworks such as React Native and
            Flutter.
          </li>
          <li>
            Focus on delivering a seamless and intuitive user experience (UX)
            and user interface (UI) that enhances customer satisfaction.
          </li>
          <li>
            Offer ongoing app maintenance, updates, bug fixes, and technical
            support post-launch to ensure smooth operations.
          </li>
          <li>
            Offer tailor-made apps to meet the specific needs of different
            businesses, industries, and user requirements.
          </li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Network,
    title: "Co-Managed IT Services",
    link: "#co-managed",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Network size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Co-Managed IT Services</h3>
        <p className="text-white mt-4">
          Details about Co-Managed IT Services...
        </p>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    link: "#cloud",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Cloud size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">CLOUD SERVICES</h3>
        <ul className="text-white list-disc pl-5">
          <li>On-premise to Cloud migrations</li>
          <li>Office 365 Implementation</li>
          <li>SharePoint Online</li>
          <li>Azure Consulting, Implementation & Support</li>
          <li>AWS Consulting, Implementation & Support</li>
          <li>3rd Party Cloud Solutions</li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Monitor,
    title: "Deskside/End-User Support",
    link: "#deskside",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Monitor size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Deskside/End-User Support</h3>
        <ul className="text-white list-disc pl-5">
          <li>IT Asset Move</li>
          <li>IT Support and Maintenance</li>
          <li>Network & Cabling</li>
          <li>Printing & Imaging support</li>
          <li>Service Desk</li>
          <li>IT Hands & Feet support</li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Database,
    title: "Data Center Support",
    link: "#data-center",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Database size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Data Center Support</h3>
        <ul className="text-white list-disc pl-5">
          <li>DC Migration</li>
          <li>Remote install & Management</li>
          <li>Server automation solutions</li>
          <li>Patch Management</li>
          <li>DC Design & Architecture</li>
          <li>Disaster Recovery Solutions</li>
          <li>Backup and Restore Solutions</li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
  {
    icon: Code,
    title: "Web Development",
    link: "#web-development",
    details: (
      <div className="text-left flex flex-col items-center space-y-5">
        <Code size={100} className="mb-4" />
        <h3 className="text-yellow-400 text-xl">Web Development</h3>
        <ul className="text-white list-disc pl-5">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>RESTful APIs</li>
          <li>JWT Authentication</li>
          <li>State Management (Context API)</li>
          <li>Responsive Design (Tailwind CSS)</li>
          <li>Version Control (Git, Hostinger)</li>
        </ul>
        <Link
          to="/form"
          onClick={scrollToTop}
          className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
        >
          Request a service
        </Link>
      </div>
    ),
  },
];

const ITServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null); // Set null to indicate no service is selected
  const detailsRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleBackClick = useCallback(() => {
    setSelectedService(null); // Reset to null when navigating back
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }, [scrollPosition]);

  const handleServiceClick = (index) => {
    setScrollPosition(window.pageYOffset);
    setSelectedService(index); // Use index directly
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        window.scrollBy(0, -50);
      }
    }, 300);
  };

  return (
    <div
      id="services"
      className="bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white py-10 min-h-screen"
    >
      <h2 className="text-2xl font-bold text-center mb-8 p-4">
        IT Services & Solutions We Offer to Edmonton Businesses
      </h2>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        {selectedService === null ? ( // Check for null here
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12 transition-all duration-500 ease-in-out w-full">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={`service-${index}`}
                  className="flex flex-col items-center justify-center p-6 lg:py-14 text-center rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleServiceClick(index)} // Use index directly
                >
                  <Icon size={50} className="text-white" />
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <a
                    href={service.link}
                    className="mt-2 text-md text-yellow-400 font-bold"
                  >
                    Learn more &gt;
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            ref={detailsRef}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-lg w-[80%] min-h-[450px] mx-auto transition-transform duration-500 ease-in-out flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500"
              onClick={handleBackClick}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center justify-center min-h-full">
              {/* <h3 className="text-yellow-400 text-xl">
                {services[selectedService].title}
              </h3> */}
              {services[selectedService].details}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ITServicesGrid;
