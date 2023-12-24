import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";

import { recentBlogContent } from "@/utils/data/recentBlogContent";

import Description from "../ui/Description/Description";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

import PostCard from "./PostCard";

const RecentBlogs = ({ className }: SectionProps) => {
  const {
    heading: { title, subTitle, description },
  } = recentBlogContent;

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="lg:flex justify-center mb-24 ">
          <div className="w-full lg:w-8/12 lg:flex items-center">
            <div className="lg:w-7/12">
              {subTitle && <Subtitle delay={0.05}>{subTitle}</Subtitle>}
              {title && <Title delay={0.1}>{title}</Title>}
            </div>

            <div className="lg:w-5/12 self-end">
              {description && (
                <Description delay={0.15} y={20}>
                  {description}
                </Description>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto">
          {posts.slice(0, 3).map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
