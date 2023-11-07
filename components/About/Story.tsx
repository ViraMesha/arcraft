"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { storyData } from "@/utils/data/storyData";

const Story = ({ className }: SectionProps) => {
  const {
    column1: { imgs },
    column2: { imgs: imgs2 },
    column3: { imgs: imgs3 },
    storyText: { heading, text1, text2, signature, name, role },
  } = storyData;
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="md:flex w-full md:w-10/12 mx-auto md:gap-7">
          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
            {imgs.map((img, index) => {
              const delay = index * 0.5;
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Image
                    src={img.img}
                    alt={img.alt}
                    width={img.with}
                    height={img.height}
                    className={`${
                      img.tailwindClass && img.tailwindClass
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="md:w-4/12 space-y-7 mb-7 md:mb-0">
            {imgs2.map((img, index) => {
              const delay = index * 0.5;
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Image
                    src={img.img}
                    alt={img.alt}
                    width={img.with}
                    height={img.height}
                    className={`${
                      img.tailwindClass && img.tailwindClass
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
            {imgs3.map((img, index) => {
              const delay = index * 0.5;
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Image
                    src={img.img}
                    alt={img.alt}
                    width={img.with}
                    height={img.height}
                    className={`${
                      img.tailwindClass && img.tailwindClass
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto"
        >
          {heading && (
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-5">
              {heading}
            </h2>
          )}
          {text1 && (
            <p className="leading-relaxed text-gray-500 mb-7">{text1}</p>
          )}
          {text2 && (
            <p className="leading-relaxed text-gray-500 mb-10">{text2}</p>
          )}

          <p>
            <Image
              src={signature}
              alt={`${name}'s signature`}
              width={338}
              height={113}
              className="w-48 block mb-2"
            />
            <strong className="block mb-2 text-gray-800 font-medium">
              {name}
            </strong>
            <span className="text-gray-400">{role}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
