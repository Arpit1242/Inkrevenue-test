import React from "react";
import AnimatedButton from "../../HelpComponent/AnimatedButton";
import ScrollAnimateText from "../../HelpComponent/ScrollAnimateText";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <>
      {/* Top vertical blue line */}
      <div className="flex items-center relative" style={{
    backgroundColor: "var(--bg-main)",
    color: "var(--text-color)"
  }}> 
        <div className="mx-auto h-40 w-[0.5px] bg-blue-900 relative left-47 hidden lg:block"></div>
      </div>

      {/* Main Grid */} 
    <div  style={{
    backgroundColor: "var(--bg-main)",
    color: "var(--text-color)"
  }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4   w-[85%] max-w-[1440px] mx-auto overflow-hidden items-stretch">
        {/* Left Image */}
        <div className="flex items-center justify-center h-full">
          <img
            src="/img/who-2.7ce11a8c.png"
            alt="Who We Are"
            className="w-full h-auto max-w-full object-contain md:w-[80%] md:h-auto lg:w-full lg:h-full lg:object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="pt-5 flex flex-col justify-start h-full">
          <div className="flex flex-col justify-start h-full px-4 lg:px-12">
            <ScrollAnimateText>
              <div className=" font-semibold leading-10 mt-4 lg:mt-0 text-xl lg:text-2xl xl:text-3xl text-blue-800">
                WHO WE ARE?
              </div>
              <div className=" font-bold leading-[1.3] mt-2 text-lg lg:text-4xl xl:text-3xl break-words max-w-full">
                <span className="text-blue-500">Ink</span>Revenue is a leading
                digital advertising company, an in-house publisher and an ad
                network, ensuring your brand visibility, brand awareness, ad
                revenue generation via digital branding with the help of
                targeted advertising, programmatic advertising and display
                advertising.
              </div>
            </ScrollAnimateText>

            {/* Description and Button */}
            <div className="flex justify-end mt-6 grow">
              <div className="flex w-full lg:w-[75%] flex-col lg:flex-row">
                <div className="mx-auto h-100 w-0.5 bg-blue-900 mt-10 hidden lg:block"></div>
                <div className=" p-4 lg:p-5 lg:pt-20 text-base lg:text-xl xl:text-2xl font-bold min-w-0">
                  <ScrollAnimateText>
                    <div className="lg:text-3xl font-bold mb-5 text-blue-800">Vision</div> 
                    <div className="lg:text-2xl ">
                      Inkrevenue leads digital advertising by maximizing
                      ad-revenue with advanced technology and exceptional
                      support.
                    </div>
                  </ScrollAnimateText>

                  {/* Responsive Button */}
                  <div className="mt-10 text-sm lg:text-base xl:text-lg">
                    <AnimatedButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhoWeAre;
