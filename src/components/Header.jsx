import { Button } from "@/components/ui/button";

function openNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("hidden");
}

function Header() {
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 h-fit">
        {/* Top Bar */}
        <div className="bg-[#dcdcdc] w-full">
          <ul className="flex items-center text-[.8rem] justify-between p-[0.35rem] md:justify-end space-x-4 lg:space-x-8">
            <li>
              <a>IT Assessment</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>+1(123)-567-899</a>
            </li>
            <li>
              <a>info@example.com</a>
            </li>
          </ul>
        </div>

        {/* Main Header */}
        <div className="bg-[#f1f1f1] w-full h-[12vh] flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <a href="" className="cursor-pointer">
            <img src="/it-logo.png" alt="Logo" className="h-[2rem]" />
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className="space-y-1.5 lg:hidden md:hidden" onClick={openNav}>
            <span
              className="block h-[0.15rem] w-6"
              style={{ backgroundColor: "#00BCFF" }}
            ></span>
            <span
              className="block h-[0.15rem] w-6"
              style={{ backgroundColor: "#00BCFF" }}
            ></span>
            <span
              className="block h-[0.15rem] w-6"
              style={{ backgroundColor: "#00BCFF" }}
            ></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:text-md">
            <ul
              className="flex space-x-8 text-md font-bold"
              style={{ color: "#00BCFF" }}
            >
              <li>
                <a href="" className="cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="cursor-pointer">
                  Industries
                </a>
              </li>
              <li>
                <a href="" className="cursor-pointer">
                  Areas we serve
                </a>
              </li>
              <li>
                <a href="" className="cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
            <Button
              href=""
              className="cursor-pointer bg-gradient-to-r from-[#00BCFF] to-[#007FFF]"
            >
              Client Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="bg-[#f1f1f1] stickky top-[12vh] right-0 w-[60vw] md:w-[40vw] h-[100vh] flex-col space-y-4 text-lg font-bold pl-8 pt-6 z-50 hidden md:hidden mt-6"
          id="nav"
        >
          <ul className="space-y-4" style={{ color: "#00BCFF" }}>
            <li>
              <a href="" className="cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer">
                Industries
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer">
                Areas we serve
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
          <Button
            href=""
            className="cursor-pointer mt-4 bg-gradient-to-r from-[#00BCFF] to-[#007FFF]"
          >
            Client Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
