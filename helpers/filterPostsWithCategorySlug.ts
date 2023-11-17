import { Post } from "@/.contentlayer/generated";

export function filterPostsWithCategorySlug(posts: Post[], slug: string) {
  return posts.filter((post) =>
    post.categories.some(
      (category) =>
        category.title
          .toLocaleLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "") === slug
    )
  );
}
