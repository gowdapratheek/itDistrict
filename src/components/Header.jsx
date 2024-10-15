import { Button } from "@/components/ui/button";
import logo from "../assets/it-logo.png";

function openNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("hidden");
}
//To consider the header height for link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 80, // Offset for the fixed header
      behavior: "smooth",
    });
  });
});

function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#dcdcdc] w-full">
        <ul className="flex items-center text-[0.7rem] justify-between p-2 md:justify-end space-x-4 lg:space-x-8">
          <li>
            <a href="/assessment" className="hover:underline">
              IT Assessment
            </a>
          </li>
          <li>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </li>
          <li>
            <a href="tel:+1123567899" className="hover:underline">
              +1(123)-567-899
            </a>
          </li>
          <li>
            <a href="mailto:info@example.com" className="hover:underline">
              info@example.com
            </a>
          </li>
        </ul>
      </div>

      {/* Main Header */}
      <div className="bg-[#f1f1f1] w-full h-16 flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img src={logo} alt="IT Company Logo" className="h-16" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <div
          className="space-y-1.5 lg:hidden cursor-pointer md:hidden"
          onClick={openNav}
          aria-label="Toggle Navigation"
          role="button"
        >
          <span className="block h-0.5 w-6 bg-[#00BCFF]"></span>
          <span className="block h-0.5 w-6 bg-[#00BCFF]"></span>
          <span className="block h-0.5 w-6 bg-[#00BCFF]"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-semibold text-[#00BCFF]">
            <li>
              <a href="#about" className="hover:text-[#007FFF]">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#007FFF]">
                Services
              </a>
            </li>
            <li>
              <a href="/industries" className="hover:text-[#007FFF]">
                Industries
              </a>
            </li>
            <li>
              <a href="/locations" className="hover:text-[#007FFF]">
                Areas We Serve
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#007FFF]">
                Contact Us
              </a>
            </li>
          </ul>
          {/* <Button
            href="/login"
            className="bg-gradient-to-r from-[#00BCFF] to-[#007FFF] bg-[length:200%_100%] transition-all duration-500 ease-in-out text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-[position:right_center]"
          >
            Client Login
          </Button> */}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="nav"
        className="bg-gray-100 absolute  right-0 w-3/5 md:w-2/5 font-semibold h-screen flex-col space-y-6 text-lg text-[#00BCFF] pl-6 pt-6 hidden lg:hidden text-center"
      >
        <ul className="space-y-6">
          <li>
            <a href="/about" className="">
              About Us
            </a>
          </li>
          <hr className="w-[90%] m-0 p-0" />

          <li>
            <a href="/services" className="">
              Services
            </a>
          </li>
          <hr className="w-[90%] m-0 p-0" />
          <li>
            <a href="/industries" className="">
              Industries
            </a>
          </li>
          <hr className="w-[90%] m-0 p-0" />
          <li>
            <a href="/locations" className="">
              Areas We Serve
            </a>
          </li>
          <hr className="w-[90%] m-0 p-0" />
          <li>
            <a href="/contact" className="">
              Contact Us
            </a>
          </li>
          <hr className="w-[90%] m-0 p-0" />
        </ul>
        <Button
          href="/login"
          className="bg-gradient-to-r from-[#00BCFF] to-[#007FFF] text-white px-4 py-2 rounded-md mt-6"
        >
          Client Login
        </Button>
      </nav>
    </header>
  );
}

export default Header;
