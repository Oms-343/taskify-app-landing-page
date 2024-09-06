"use client";
import EcosystemIcon from "@/public/icons/ecosystem.svg";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      if (!borderRef.current) return;
      const borderRect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    }
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="relative rounded-xl border border-white/30 px-5 py-10 text-center">
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          maskImage,
        }}
        ref={borderRef}
      ></motion.div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
        <EcosystemIcon />
      </div>
      <h3 className="mb-2 mt-6 font-bold">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Everything You need
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-1 md:flex-row">
          {features.map((feature, i) => (
            <Feature
              key={i}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
