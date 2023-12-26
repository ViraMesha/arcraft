"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { howItWorksContent } from "@/utils/data/howItWorksContent";

import Description from "../ui/Description/Description";
import Subtitle from "../ui/Subtitle/Subtitle";
import Title from "../ui/Title/Title";

const HowItWorks = ({ className }: SectionProps) => {
  const {
    heading: { title, subtitle, description, steps, features },
  } = howItWorksContent;

  return (
    <>
      <section className={`${className}`}>
        <div className="wrapper">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-8/12 lg:flex items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {title && <Title>{title}</Title>}
              </div>

              <div className="lg:w-5/12 self-end">
                {description && <Description>{description}</Description>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto">
            {steps.map(
              (
                { number, icon, title, description, btn: { href, label } },
                i
              ) => {
                const delay = i * 0.2;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.1 } }}
                    key={title}
                    className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#eb2576] hover:shadow-2xl"
                  >
                    <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0">
                      {number}
                    </span>
                    <div className="absolute top-10 right-10">
                      <span className="text-3xl text-blue-600 transition group-hover:text-white">
                        {icon}
                      </span>
                    </div>
                    <div className="relative z-40 flex gap-3 items-start">
                      <div className="font-semibold transition group-hover:text-white group-hover:text-opacity-50">
                        {number}
                      </div>

                      <div>
                        <h3 className="text-[20px] mb-4 transition group-hover:text-white">
                          {title}
                        </h3>
                        <p className="leading-relaxed text-[15px] text-gray-500 mb-7 transition group-hover:text-white">
                          {description}
                        </p>
                        <p>
                          <Link
                            href={href}
                            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600 transition group-hover:border-b-white group-hover:text-white"
                          >
                            {label}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="pt-72 lg:pt-60 pb-32 bg-blue-600">
        <div className="wrapper">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {features.map(
                  ({ icon, title, description, btn: { href, label } }, i) => {
                    const delay = i * 0.2;
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { delay, duration: 0.5 },
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, transition: { duration: 0.1 } }}
                        key={title}
                        className="relative z-40 flex gap-3 items-start"
                      >
                        <div>
                          <span className="text-3xl text-white">{icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg mb-4 text-white">{title}</h3>
                          <p className="leading-relaxed text-[15px] text-white text-opacity-75 mb-7">
                            {description}
                          </p>
                          <p>
                            <Link
                              href={href}
                              className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block text-white border-white border-opacity-25 transition hover:border-opacity-100"
                            >
                              {label}
                            </Link>
                          </p>
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
