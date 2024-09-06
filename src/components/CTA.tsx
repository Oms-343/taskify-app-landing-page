"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

import emojiStar from "@/public/images/emojistar.png";
import helixImage from "@/public/images/helix2.png";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      className="text-cente overflow-x-clip bg-black py-[72px] text-white md:py-24"
      ref={containerRef}
    >
      <div className="container relative max-w-xl">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt="helix-image"
            className="absolute left-[calc(100%+36px)] top-6 hidden md:block"
          />
        </motion.div>

        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStar}
            alt="emoji-star-image"
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden md:block"
          />
        </motion.div>

        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Get instant access
        </h2>
        <p className="mt-5 text-center text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 md:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF] md:flex-1"
          />
          <button className="h-12 rounded-lg bg-white font-medium text-black md:px-5">
            Get access
          </button>
        </form>
      </div>
    </section>
  );
}
