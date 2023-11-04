import React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const Title = ({ children, delay = 0.3, className }: TitleProps) => {
  return (
    <motion.h2
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
      className={`${className ? className : ""} text-2xl lg:text-4-xl`}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
