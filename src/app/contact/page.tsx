import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | WebHouz",
  description:
    "Get in touch with WebHouz! We're here to answer your questions, discuss your project needs, and provide expert web development solutions. Contact us today via phone, email, or our online form.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us! We're here to answer your questions, discuss your project needs, and provide expert web development solutions. Contact us today via phone, email, or our online form."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
