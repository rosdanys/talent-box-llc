"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])
  return (
    <html suppressHydrationWarning lang="en"  className="dark" style={{'colorScheme': 'dark'}}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     
      <head /> */}

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`} >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import { useEffect } from "react";

