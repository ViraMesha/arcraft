"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";

import { Post } from "@/.contentlayer/generated";

import StyledLink from "../ui/StyledLink";

type PostsItemsProps = {
  currentItems: Post[];
};

const PostsItems = ({ currentItems }: PostsItemsProps) => {
  return (
    <>
      {currentItems &&
        currentItems.map(({ url, image, title, date, author }, index) => {
          const delay = index * 0.05;
          return (
            <motion.div
              key={index}
              className="bg-white relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Link href={url} className="overflow-hidden block relative">
                <Image
                  priority
                  src={image}
                  alt={title}
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[200px] max-w-full transition group-hover:scale-[1.05]"
                />
              </Link>
              <div className="p-8">
                <p className="mb-3 text-gray-500 uppercase text-[12px] tracking-[1px]">
                  {format(parseISO(date), "LLL d, yyyy")} &#8226; {author}
                </p>
                <h3 className="mb-4">
                  <Link href={url} className="text-lg leading-none">
                    {title}
                  </Link>
                </h3>
                <p>
                  <StyledLink href={url}>Read more</StyledLink>
                </p>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default PostsItems;
