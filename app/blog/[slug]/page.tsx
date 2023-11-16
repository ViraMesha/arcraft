import { allPosts } from "@/.contentlayer/generated";

import BlogContent from "./BlogContent";

export function generateStaticParams() {
  const posts = allPosts;
  return posts.map((post) => ({ slug: post.url }));
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === "blog/" + slug
  );

  return { title: post?.title };
};

export default function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === "blog/" + slug
  );
  return <>{post && <BlogContent post={post} />}</>;
}
