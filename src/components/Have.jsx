import { DollarSign, Calendar, Monitor, ThumbsUp } from "lucide-react";

const Have = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-[90vw] p-4 bg-[#d9d9d9] my-4 lg:h-[50vh]">
      <div className="lg:w-[95%] lg:h-[95%] bg-white shadow-lg border p-4 lg:flex lg:flex-row">
        {/* Grid section for icons */}
        <div className="grid grid-cols-2 mb-6 lg:w-[47.5%]">
          <div className="flex items-center justify-center p-4 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] bg-[length:200%_100%] transition-all duration-500 ease-in-out px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-[position:right_center] hover:text-white cursor-pointer">
            <DollarSign className="w-14 h-20 lg:h-32 lg:w-20 " />
          </div>
          <div className="flex items-center justify-center bg-gray-200 p-4 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] bg-[length:200%_100%] transition-all duration-500 ease-in-out px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-[position:right_center] hover:text-white cursor-pointer">
            <Calendar className="w-14 h-20 lg:h-32 lg:w-20  " />
          </div>
          <div className="flex items-center justify-center bg-gray-200 p-4 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] bg-[length:200%_100%] transition-all duration-500 ease-in-out px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-[position:right_center] hover:text-white cursor-pointer">
            <Monitor className="w-14 h-20 lg:h-32 lg:w-20 " />
          </div>
          <div className="flex items-center justify-center p-4 hover:bg-gradient-to-r from-[#00BCFF] to-[#007FFF] bg-[length:200%_100%] transition-all duration-500 ease-in-out px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-[position:right_center] hover:text-white cursor-pointer">
            <ThumbsUp className="w-14 h-20 lg:h-32 lg:w-20 " />
          </div>
        </div>

        {/* Text section */}
        <div className="text-center lg:w-[47.5%] flex flex-col m-auto justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            HAVE YOU EVER SAID
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            I need to save money
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            sit nec facilisis non, leo, ex amet, eget ac gravida sit elit.
            convallis. ex. placerat Nullam Praesent lobortis, eget Donec quam
            vel porta enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Have;
