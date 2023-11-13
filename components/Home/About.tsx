"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import dotsImg from "@/public/images/home/hero/dots.svg";
import { aboutContent } from "@/utils/data/aboutContent";

import StyledLink from "../ui/StyledLink";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const About = ({ className }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  const {
    heading: { title, subTitle },
    content: { img, title: contentTitle, description },
    btn: { href, label },
  } = aboutContent;

  return (
    <section className={`${className}`} ref={ref}>
      <div className="wrapper">
        <div className="text-center lg:max-w-lg mx-auto mb-20 lg:mb-22 relative z-[5]">
          {subTitle && <Subtitle>{subTitle}</Subtitle>}

          {title && <Title>{title}</Title>}
        </div>

        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div
                className="z-[2] relative"
                style={{
                  y: imgScroll1,
                }}
              >
                <Image
                  src={img}
                  alt="About"
                  className="object-cover !w-full !h-[550px] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  quality={100}
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll2 }}
                className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
              >
                <Image
                  src={dotsImg}
                  alt="Dots"
                  width={200}
                  height={200}
                  className="w-64"
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {contentTitle}
              </motion.h3>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-500"
              >
                {description}
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className=""
              >
                <StyledLink href={href}>{label}</StyledLink>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
