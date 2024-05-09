import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CultureHome from "@/components/CultureHome";
import DiversityHome from "@/components/DiversityHome";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LeaderShipHome from "@/components/LeaderShipHome";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Home | Talent Box LLC",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Video /> */}
      {/* 
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog /> */}
      <CultureHome />
      <DiversityHome />
      <LeaderShipHome />
      <Contact />
    </>
  );
}
