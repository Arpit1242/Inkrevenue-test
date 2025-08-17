// components/HomeContent.js (or app/home/HomeContent.js)

import ClientSlider from "./ClientSlider";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import AdvertiserBranchTree from "./BranchTree";
import PublisherBranchTree from "./PublisherBranchTree";
import TestimonialCarousel from "./TestimonialCarousel";
import Faqs from "./Faqs";
import Services from "./Services";
const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre/>
      <AdvertiserBranchTree/>
      <PublisherBranchTree />
      <Services />
      <ClientSlider />
      <TestimonialCarousel />
      <Faqs />
    </>
  );
};

export default HomeContent;