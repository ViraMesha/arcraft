import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { Project } from "@/.contentlayer/generated/types";

type ProjectsItemsProps = {
  currentItems: Project[];
};

const ProjectsItems = ({ currentItems }: ProjectsItemsProps) => {
  return (
    <>
      {currentItems &&
        currentItems.map((project, index) => {
          const delay = index * 0.05;
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden w-full lg:w-6/12 p-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Link
                href={project.url}
                className="overflow-hidden block relative"
              >
                <Image
                  src={project.image}
                  alt="Project"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[400px] max-w-full transition group-hover:scale-[1.05]"
                />
              </Link>
              <div className="py-8 px-2">
                <span className="block mb-1 text-gray-500">{project.role}</span>
                <h3 className="mb-4">
                  <Link href={project.url} className="text-2xl leading-none">
                    {project.title}
                  </Link>
                </h3>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default ProjectsItems;
