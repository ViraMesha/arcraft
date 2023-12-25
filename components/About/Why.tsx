"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { whyContent } from "@/utils/data/whyContent";

import team2Img from "../../public/images/about/team/team-2.jpg";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title/Title";

const Why = ({ className }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const {
    heading: { title, subTitle },
    whyUsItems,
  } = whyContent;

  return (
    <section ref={ref} className={`${className}`}>
      <div className="wrapper">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-32">
          {subTitle && <Subtitle>{subTitle}</Subtitle>}
          {title && <Title>{title}</Title>}
        </div>

        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-start">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll }}
              >
                <Image
                  src={team2Img}
                  alt="Team working on a project"
                  className="object-cover w-full h-[500px] lg:max-w-2xl object-center"
                  width={400}
                  height={300}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              <motion.ul
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="list-none"
              >
                {whyUsItems.map(({ title, icon, description }, i) => (
                  <li key={title} className="flex space-x-4 items-start mb-7">
                    <span className="text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-[#eb2576] z-20 text-white">
                      {icon}
                    </span>
                    <div>
                      <h3 className="text-gray-800 text-base mb-2">{title}</h3>
                      <p className="text-gray-500">{description}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
