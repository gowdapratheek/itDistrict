import logo from "../assets/it-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#D9D9D9] to-[#FFFFFF] py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-10 md:space-y-0">
          <div className="flex flex-col md:w-[40vw] md:mr-4 md:items-start space-y-6">
            <div className="">
              <a href="/" className="cursor-pointer">
                <img src={logo} alt="IT Company Logo" className="h-20" />
              </a>
            </div>
            <div className="text-left space-y-1">
              <p>Address line1</p>
              <p>Address line2</p>
              <p>Canada</p>
            </div>
            <button className="bg-yellow-400 text-black py-2 px-8 rounded-md font-semibold  bg-[length:200%_100%] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]">
              Request a service
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 text-black w-full md:w-auto md:space-y-0 gap-8">
            <div>
              <h3 className="font-bold mb-3">About us</h3>
              <hr className="w-full md:w-[10vw] mb-4" />
              <ul className="space-y-2">
                <li className="cursor-pointer hover:underline ">
                  Testimonials
                </li>
                <li className="cursor-pointer hover:underline ">
                  FAQ
                </li>
                <li className="cursor-pointer hover:underline  ">
                  Events
                </li>
                <li className="cursor-pointer hover:underline  ">
                  Careers
                </li>
                <li className="cursor-pointer hover:underline  ">
                  Blog
                </li>
                <li className="cursor-pointer hover:underline ">
                  Contact us
                </li>
                <li className="cursor-pointer hover:underline  ">
                  Get A Quote
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">LOCATIONS</h3>
              <hr className="w-full md:w-[10vw] mb-4" />
              <ul className="space-y-2">
                <li className="cursor-pointer hover:underline ">
                  Beaumont
                </li>
                <li className="cursor-pointer hover:underline ">
                  Calgary
                </li>
                <li className="cursor-pointer hover:underline ">
                  Fort Saskatchewan
                </li>
                <li className="cursor-pointer hover:underline ">
                  Leduc
                </li>
                <li className="cursor-pointer hover:underline ">
                  Red Deer
                </li>
                <li className="cursor-pointer hover:underline ">
                  Sherwood Park
                </li>
                <li className="cursor-pointer hover:underline ">
                  Spruce Grove
                </li>
                <li className="cursor-pointer hover:underline ">
                  St. Albert
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <h3 className="font-bold mb-4 text-center">SERVICES</h3>
              <hr className="w-full mb-4" />
              <div className="grid grid-cols-2 gap-x-8">
                <div className="space-y-4">
                  <p className="font-semibold border-b border-white pb-2">
                    All Services
                  </p>
                  <p>Cloud Services</p>
                  <p>Storage Management</p>
                  <p>Microsoft 365</p>
                  <p className="border-b border-white pb-2"></p>
                  <p>Cyber Security Services</p>
                  <p>System Security and Access</p>
                </div>
                <div className="space-y-4">
                  <p>Managed IT Services</p>
                  <p>Co-Managed IT Services</p>
                  <p>Around the clock monitoring</p>
                  <p>Backup and Data Recovery Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
