"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import dotsImg from "@/public/images/home/hero/dots.svg";
import heroImg from "@/public/images/home/hero/img.jpg";
import { heroContent } from "@/utils/data/heroContent";

import StyledLink from "../ui/StyledLink";
import Subtitle from "../ui/Subtitle/Subtitle";

const Hero = ({ className }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const {
    title,
    subtitle,
    description,
    link: { href, label },
  } = heroContent.intro;

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="wrapper">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
          <div className="lg:w-4/12 z-[3] relative">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}

            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
              >
                {title}
              </motion.h1>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-black/80 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16"
              >
                {description}
              </motion.p>
            )}

            {label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <StyledLink href={href}>{label}</StyledLink>
              </motion.p>
            )}
          </div>

          <div className="lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="z-[2] relative bg-cover bg-center"
              style={{ y: imgScroll1 }}
            >
              <Image
                src={heroImg}
                alt="Hero img"
                className=" max-h-[800px]"
                width={828}
                height={685}
                priority
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
            >
              <Image
                src={dotsImg}
                alt="dots decoration"
                className="w-64"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
