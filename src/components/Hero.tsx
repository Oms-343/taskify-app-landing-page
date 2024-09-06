"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import ArrowRight from "@/public/icons/arrow-w.svg";
import cursorImage from "@/public/images/cursor.png";
import messageImage from "@/public/images/message.png";

export default function Hero() {
  return (
    <section className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] text-white md:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] md:top-[calc(100%-120px)] md:h-[768px] md:w-[1536px] lg:h-[1200px] lg:w-[2400px]"></div>
      <div className="container relative">
        <p className="flex items-center justify-center">
          <a className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowRight />
            </span>
          </a>
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1 className="mx-auto inline-flex text-center text-6xl font-bold tracking-tighter md:text-9xl">
              One Task
              <br />
              at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden md:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt="cursor-image"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false" // to undo ghost  default drag
              />
            </motion.div>

            <motion.div
              className="absolute left-[498px] top-[56px] hidden md:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt="message-image"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[456px] text-center text-xl">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-white px-5 py-3 font-medium text-black">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
}
