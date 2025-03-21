"use client";
import { SlideUpWithFadeWhenVisible } from "@/utils/framerMotionHelpers";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What We Do"
            paragraph="Our team specializes in a full range of web solutions, from initial design to final launch and beyond. Here's how we can help your business"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SlideUpWithFadeWhenVisible key={feature.id}>
                <SingleFeature feature={feature} />
              </SlideUpWithFadeWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
