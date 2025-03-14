"use client";
import {
  MotionDiv,
  slideDownWithFade,
  slideUpWithFade,
  staggerChildrens,
  StaggerChildrens,
  StaggerChildrensWhenVisible,
} from "@/utils/framerMotionHelpers";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  skipAnimation = false,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  skipAnimation?: boolean;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <MotionDiv
          initial={!skipAnimation && "hidden"}
          whileInView={!skipAnimation && "show"}
          viewport={{ once: true }}
          variants={!skipAnimation && staggerChildrens}
        >
          <MotionDiv variants={slideDownWithFade}>
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              {title}
            </h2>
          </MotionDiv>
          <MotionDiv variants={slideUpWithFade}>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              {paragraph}
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </>
  );
};

export default SectionTitle;
