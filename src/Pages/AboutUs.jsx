import logo from "../assets/it-logo.png";

export default function AboutUs() {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-[#aee1ff] to-[#FCFCFC] flex items-center justify-center p-8">
      <div className="max-w-[80vw] lg:max-w-[60vw] w-full">
        <h1 className="text-6xl md:text-7xl font-bold text-white m-0 p-0 -ml-10">
          Who are we
        </h1>
        <div className="bg-gradient-to-r from-[#00BCFF] to-[#007FFF] rounded-md p-4 shadow-[0px_0px_60px_grey]">
          <div className="mx-auto mb-6 sm:mb-8 flex justify-center">
            <img
              src={logo}
              alt="Testimonial Image"
              className="w-full h-auto object-cover max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto rounded-lg"
            />
          </div>
          <p className="w-[90%] lg:w-[70%] xl:w-[60%] m-auto text-center text-white text-sm md:text-base lg:text-lg">
            We are a team of highly skilled professionals dedicated to providing
            innovative and reliable technology solutions to businesses of all
            sizes. With years of experience in the industry, we have developed a
            deep understanding of the unique challenges faced by our clients and
            are committed to delivering customized solutions tailored to their
            specific needs.
          </p>
          <div className="space-y-4 sm:space-y-6 text-white mt-8 text-justify text-base lg:text-lg p-8">
            <section>
              <h2 className="font-bold mb-2 text-lg md:text-xl underline text-center ">
                OUR STRENGTH
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                Our range of services includes IT consulting, software
                development, cybersecurity, cloud solutions, and data analytics.
                We specialize in delivering cutting-edge technology solutions.
                IT Help Desk/Service Desk and process automation. Our technical
                expertise and industry knowledge position us as a leader for any
                organization seeking innovative IT solutions.
              </p>
            </section>
            <section>
              <h2 className="font-bold mb-2 text-lg md:text-xl underline text-center ">
                OUR COMMITMENT
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                At our IT District, we pride ourselves on our technical
                expertise. Our mission is to deliver unmatched IT solutions
                tailored to our clients&apos; unique needs. We work closely with
                our clients to understand their needs and develop solutions that
                exceed their expectations. Our team is passionate about
                leveraging technology to drive business growth and innovation in
                an increasingly digital world.
              </p>
            </section>
            <section>
              <h2 className="font-bold mb-2 text-lg md:text-xl underline text-center ">
                OUR STRENGTH
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                Our range of services includes IT consulting, software
                development, cybersecurity, cloud solutions, and data analytics.
                We specialize in delivering cutting-edge technology solutions.
                IT Help Desk/Service Desk and process automation. Our technical
                expertise and industry knowledge position us as a leader for any
                organization seeking innovative IT solutions to help our clients
                to achieve their business objectives.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
