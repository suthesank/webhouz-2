"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import {
  MotionDiv,
  slideUpWithFade,
  StaggerChildrensWhenVisible,
} from "@/utils/framerMotionHelpers";

const Pricing = () => {
  // const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="At WebHouz we believe in providing transparent, flexible pricing that aligns with the scope of your project, helping you achieve your goals without breaking the bank. Here's how our tailored pricing works:"
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <StaggerChildrensWhenVisible className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <MotionDiv variants={slideUpWithFade}>
            <PricingBox
              originalPrice="800"
              packageName="Basic"
              price={"399"}
              subtitle="Suitable for startups and new business owners starting the online journey"
            >
              <OfferList text="1 Page Website" status="active" />
              <OfferList text="Personalized Content" status="active" />
              <OfferList text="WebHouz Domain" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Basic SEO Optimisation" status="active" />
              <OfferList text="Custom Domain Setup" status="inactive" />
              <OfferList text="Custom design" status="inactive" />
              <OfferList text="E-Commerce Dashboard" status="inactive" />
            </PricingBox>
          </MotionDiv>
          <MotionDiv variants={slideUpWithFade}>
            <PricingBox
              originalPrice="1,750"
              packageName="👍 Advanced"
              price={"699"}
              subtitle="Suitable for most clients ranging from startups to existing SMEs looking to gain online presence"
            >
              <OfferList text="3-5 Page Website" status="active" />
              <OfferList text="Personalized Content" status="active" />
              <OfferList text="WebHouz Domain" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Advanced SEO Optimisation" status="active" />
              <OfferList text="Custom Domain Setup" status="active" />
              <OfferList text="Custom design" status="active" />
              <OfferList text="E-Commerce Dashboard" status="inactive" />
            </PricingBox>
          </MotionDiv>
          <MotionDiv variants={slideUpWithFade}>
            <PricingBox
              originalPrice="2,200"
              packageName="E-Commerce"
              price={"880"}
              subtitle="Suitable for businesses dabbling into the e-commerce space to boost business"
            >
              <OfferList text="E-Commerce Website" status="active" />
              <OfferList text="Personalized Content" status="active" />
              <OfferList text="WebHouz Domain" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Advanced SEO Optimisation" status="active" />
              <OfferList text="Custom Domain Setup" status="active" />
              <OfferList text="Custom design" status="active" />
              <OfferList text="E-Commerce Dashboard" status="active" />
            </PricingBox>
          </MotionDiv>
        </StaggerChildrensWhenVisible>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
