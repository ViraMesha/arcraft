import { BiSolidPaperPlane } from "react-icons/bi";
import { motion } from "framer-motion";

import { subscribeData } from "@/utils/data/subscribeData";

import Title from "../ui/Title";

const Subscribe = ({ className }: SectionProps) => {
  const {
    heading: { title, subTitle, description },
    form: { placeholder },
  } = subscribeData;
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="w-8/12 flex items-center">
            <div className="text-center w-screen max-w-md mx-auto mb-10">
              {subTitle && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-white"
                >
                  {subTitle}
                </motion.span>
              )}
              {title && <Title className="text-white">{title}</Title>}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto justify-center">
          <motion.form
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center"
          >
            <input
              className="appearance-none bg-white py-4 px-7 w-auto lg:w-screen !pr-16 max-w-md shadow-md rounded-full outline outline-none"
              placeholder={placeholder}
              required
              type="email"
            />
            <button
              type="submit"
              className="appearance-none absolute top-1 right-1 bg-[#eb2576] text-white shadow-md w-12 h-12 rounded-full flex items-center justify-center group"
            >
              <BiSolidPaperPlane className=" transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </motion.form>
          {description && (
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="w-auto max-w-md mx-auto mt-10 text-center text-white text-opacity-60"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
