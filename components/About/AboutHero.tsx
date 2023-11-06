"use client";
import { motion } from "framer-motion";

import { aboutHeroData } from "@/utils/data/aboutHeroData";

import Subtitle from "../ui/Subtitle";

type AboutHeroProps = {
  className: string;
  title?: string;
  subTitle?: string;
};

const AboutHero = ({
  className,
  title = aboutHeroData.heading.title,
  subTitle = aboutHeroData.heading.subtitle,
}: AboutHeroProps) => {
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

export default AboutHero;
