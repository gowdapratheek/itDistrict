import { Button } from "../components/ui/button";

function Home() {
  return (
    <>
      <div className="relative h-[85vh] w-full  bg-[url('./assets/landing-page.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 z-0 bg-black opacity-45"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full  px-4 text-center ">
          <h1 className="text-[2rem] lg:text-[3rem] font-bold text-[#00BCFF]">
            Professional IT Services
          </h1>
          <p className="text-center lg:w-[50%] w-full lg:text-base text-sm text-white">
            dui turpis dui. maximus sapien viverra Nunc Vestibulum elit. vitae
            eget fringilla commodo consectetur libero, Ut elit. sollicitudin.
            eget ultrices Quisqu ac non sollicitudin. Nam gravida sodales. porta
            felis, ex. at nisl. elit. libero, at lacus, ex. diam Ut placerat.
            vitae consectetur ex elit amet, facilisis non.
          </p>

          <div className="flex lg:w-1/3 w-full justify-around mt-4">
            <Button
              href=""
              className="cursor-pointer border border-[#00BCFF] w-[45%] text-sm lg:text-base py-2 bg-gradient-to-r from-[#00BCFF] to-[#007FFF] rounded-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
            >
              IT ASSESSMENT
            </Button>
            <Button
              href=""
              className="cursor-pointer w-[45%] text-sm lg:text-base py-2 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] border border-[#00BCFF] bg-transparent  hover:text-white rounded-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
