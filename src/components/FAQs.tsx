"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import PlusIcon from "@/public/icons/plus.svg";
import MinusIcon from "@/public/icons/minus.svg";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

function AccordianItem({
  question,
  answer,
  key,
}: {
  question: string;
  answer: string;
  key: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      key={key}
      className="border-b border-white/30 py-7"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p className="flex items-center">
        <span className="text-md flex-1 font-bold">{question}</span>
        {isOpen ? (
          <MinusIcon className="cursor-pointer" />
        ) : (
          <PlusIcon className="cursor-pointer" />
        )}
      </p>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] text-white md:py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto mt-12 max-w-[648px]">
          {items.map((item, i) => (
            <AccordianItem
              question={item.question}
              answer={item.answer}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
