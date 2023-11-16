import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";

import type { Post } from "@/.contentlayer/generated";

import StyledLink from "../ui/StyledLink";

type BlogCardProps = {
  index: number;
  post: Post;
};

const BlogCard = ({ index, post }: BlogCardProps) => {
  const delay = index * 0.05;
  const { title, image, url, date, author } = post;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={`bg-white relative overflow-hidden`}
      >
        <Link href={url} className="relative block overflow-hidden group">
          <Image
            src={image}
            alt={title}
            width={1064}
            height={644}
            className="object-cover object-center h-[400px] max-w-full transition group-hover:scale-[1.05]"
          />
        </Link>
        <div className="p-8">
          <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
            {format(parseISO(date), "LLL d, yyyy")} &#8226; {author}
          </p>
          <h3 className="mb-4">
            <Link href={url} className="text-xl leading-none">
              {title}
            </Link>
          </h3>
          <p>
            <StyledLink href={url}>Read more</StyledLink>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogCard;
