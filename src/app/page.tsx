"use client";
import { useState } from "react";
import { FaStar, FaBars } from "react-icons/fa";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Footer } from "../components/Footer/Footer";
import CardProducts from "../components/ExamenVista/CardProducts";
import { Carousel } from "../components/Carousel/Carousel";
import { InfoReserva } from "../components/InfoRserva/InfoReserva";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Home() {
  // AOS.init();
  return (
    <main className="bg-white">
      <HeroSection />
      <InfoReserva />
      <CardProducts />
      <Footer />
    </main>
  );
}
