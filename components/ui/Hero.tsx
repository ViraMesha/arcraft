"use client";
import { motion } from "framer-motion";

import { aboutHeroContent } from "@/utils/data/aboutHeroContent";

import Subtitle from "./Subtitle/Subtitle";

type HeroProps = {
  className: string;
  title?: string;
  subTitle?: string;
};

const Hero = ({
  className,
  title = aboutHeroContent.heading.title,
  subTitle = aboutHeroContent.heading.subtitle,
}: HeroProps) => {
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
          <div className="text-center lg:max-w-4xl mx-auto">
            {subTitle && <Subtitle>{subTitle}</Subtitle>}
            {title && (
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl"
              >
                {title}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
