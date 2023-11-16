"use client";
import Image from "next/image";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";

import { Post } from "@/.contentlayer/generated";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "@/components/Blog/BlogCard";
import StyledLink from "@/components/ui/StyledLink";
import { slugify } from "@/helpers/slugify";
import { sortByDateDescending } from "@/helpers/sortByDateDescending";

type BlogContentProps = {
  post: Post;
};

const BlogContent = ({ post }: BlogContentProps) => {
  const posts = sortByDateDescending(allPosts);
  const { title, author, image, date } = post;

  let MDXContent;

  if (!posts) return null;

  if (!post) {
    console.log("Post not found");
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 lg:py-44 wrapper"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16  max-w-4xl mx-auto">
          <h1 className="text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium ">
            {title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3">
              <span>{format(parseISO(date), "LLL d, yyyy")}</span>
              <span>&#8226;</span>
              <span>{author}</span>
            </span>

            <span className="mx-3">&#8226;</span>

            {post.categories.map((category, index) => (
              <Link
                href={`blog/categories/${slugify(category.title)}`}
                key={category.title}
                className="font-medium"
              >
                {category.title}
                {index < post.categories.length - 1 ? "," : ""}
              </Link>
            ))}
          </p>
        </div>
        <div className="mb-16">
          <Image
            src={image}
            alt={title}
            width={1065}
            height={644}
            className="object-cover object-top"
          />
        </div>
        <article className="prose mx-auto max-w-2xl">
          {MDXContent && <MDXContent />}
        </article>
      </div>
      <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
        <h2 className="text-2xl text-gray-700 mb-10">More Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts
            .filter((el) => el.title !== title)
            .map((item, i: number) => {
              if (i > 2) return null;
              return <BlogCard key={i} index={i} post={item} />;
            })}
        </div>
        <div className="flex justify-center mt-10">
          <StyledLink href="/blog">View all blog posts</StyledLink>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogContent;
