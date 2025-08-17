import ThemeToggle from "@/Components/ThemeToggle";
import HeroText from "../../SubComponent/HeroText";
import GlobeBackground from "./GlobeBackground";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <GlobeBackground />
      <div className="relative z-10 container mx-auto h-full flex items-center justify-center px-4 md:px-8">
        <div className=" relative w-full md:w-1/2 lg:-left-[350px] lg:top-[20px]">
          <HeroText />
        </div>
        {/* Optionally add content for right column on desktop */}
      </div>
    </div>
  );
};

export default HeroSection;
