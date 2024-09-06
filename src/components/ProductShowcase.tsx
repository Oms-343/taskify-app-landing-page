"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import appScreen from "@/public/images/app-screen.png";
import { useRef } from "react";

export default function ProductShowcase() {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="from black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] text-white md:py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Intuitive interface
        </h2>
        <p className="max mx-auto mt-5 max-w-[576px] text-center text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="product-dashboard"
            className="mx-auto mt-14 w-full"
            ref={imageRef}
          />
        </motion.div>
      </div>
    </section>
  );
}
