"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import Link from "next/link";
import {
  MotionDiv,
  slideUpWithFade,
  SlideUpWithFadeWhenVisible,
  StaggerChildrensWhenVisible,
} from "@/utils/framerMotionHelpers";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 animate-slideUpAndFade py-16 md:py-20 lg:py-28">
      <div className="container flex flex-col items-center justify-center text-center">
        <SectionTitle
          title="Ready to Build the Future of Your Business?"
          paragraph="Partner with WebHouz for custom software development that drives innovation and growth. Let’s start a conversation today and bring your ideas to life."
          center
          mb="44px"
        />
        <SlideUpWithFadeWhenVisible>
          <Link
            target="_blank"
            href="https://wa.me/+60133239856"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            🔥 Get Started
          </Link>
        </SlideUpWithFadeWhenVisible>
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> */}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
