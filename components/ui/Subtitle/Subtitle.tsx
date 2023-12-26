import { motion } from "framer-motion";

type SubtitleProps = {
  children: React.ReactNode;
  delay?: number;
};

const Subtitle = ({ children, delay = 0.2 }: SubtitleProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="subtitle"
    >
      {children}
    </motion.span>
  );
};

export default Subtitle;
