import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {
  SlideDownWithFadeWhenVisible,
  SlideUpWithFadeWhenVisible,
} from "@/utils/framerMotionHelpers";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WebHouz",
  description:
    "Discover WebHouz, a trusted leader in web development. Learn about our mission, values, and the dedicated team behind our innovative digital solutions. We're committed to delivering excellence and driving success for our clients.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are passionate about building exceptional digital experiences that drive success for businesses of all sizes. As a leading web development company, we specialize in creating custom websites, web applications, and e-commerce solutions tailored to meet your unique needs."
      />

      <AboutSectionOne skipAnimation />

      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
