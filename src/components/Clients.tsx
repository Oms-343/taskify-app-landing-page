"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import acmeImg from "@/public/images/acme.png";
import quantamImg from "@/public/images/quantum.png";
import echoImg from "@/public/images/echo.png";
import celestialImg from "@/public/images/celestial.png";
import pulseImg from "@/public/images/pulse.png";
import apexImg from "@/public/images/apex.png";

const images = [acmeImg, quantamImg, echoImg, celestialImg, pulseImg, apexImg];

export default function CompaniesList() {
  return (
    <div className="bg-black py-[72px] text-white">
      <div className="container">
        <h2 className="text-center text-xl text-white/70">
          Trusted by {`world's`} most innovative teams
        </h2>

        <div className="relative mt-9 flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:content-['']">
          <motion.div
            className="flex flex-none gap-16 pr-16"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {images.map((imgSrc, i) => (
              <React.Fragment key={i}>
                <Image
                  src={imgSrc}
                  alt="client-image"
                  className="h-8 w-auto flex-none"
                />
              </React.Fragment>
            ))}

            {images.map((imgSrc, i) => (
              <React.Fragment key={i}>
                <Image
                  src={imgSrc}
                  alt="client-image"
                  className="h-8 w-auto flex-none"
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
