import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project } from "@/.contentlayer/generated";

type PostCardProps = {
  index: number;
  project: Project;
};

const PostCard = ({ index, project }: PostCardProps) => {
  const delay = index * 0.05;
  const { title, role, image, url } = project;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.3 },
        }}
        viewport={{ once: true }}
        className={`relative overflow-hidden`}
      >
        <Link href={url} className="block overflow-hidden group">
          <Image
            src={image}
            alt={title}
            width={1064}
            height={644}
            className="object-cover object-center h-[400px] max-w-full transition group-hover:scale-[1.2]"
          />
        </Link>
        <div className="py-8 px-2">
          <span className="block mb-1 text-gray-500">{role}</span>
          <h3 className="mb-4">
            <Link href={url} className="text-2xl leading-none">
              {title}
            </Link>
          </h3>
        </div>
      </motion.div>
    </>
  );
};

export default PostCard;
