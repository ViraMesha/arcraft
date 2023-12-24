import { motion } from "framer-motion";

type DescriptionProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

const Description = ({ children, delay = 0.6, y = 10 }: DescriptionProps) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className=" text-gray-500"
    >
      {children}
    </motion.p>
  );
};

export default Description;
