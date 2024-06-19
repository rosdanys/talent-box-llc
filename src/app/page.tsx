import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BankingHome from "@/components/BankingHome";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CultureHome from "@/components/CultureHome";
import DataAnalyticsHome from "@/components/DataAnalyticsHome";
import DiversityHome from "@/components/DiversityHome";
import ExecutiveHome from "@/components/ExecutiveHome";
import Features from "@/components/Features";
import HealthCareHome from "@/components/HealthCareHome";
import Hero from "@/components/Hero";
import LeaderShipHome from "@/components/LeaderShipHome";
import PharmaManufacturingHome from "@/components/PharmaManufacturingHome";
import Pricing from "@/components/Pricing";
import RpoHome from "@/components/RpoHome";
import SimpleOutSourcingHome from "@/components/SimpleOutSourcingHome";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Home | Talent Box",
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
      <SimpleOutSourcingHome/>
      <RpoHome/>
      <ExecutiveHome/>
      <HealthCareHome/>
      <BankingHome/>
      <PharmaManufacturingHome/>
      <DataAnalyticsHome/>
      <Contact />
    </>
  );
}
