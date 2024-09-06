import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <ProductShowcase />
    </>
  );
}
