import { allPosts } from "@/.contentlayer/generated";
import Posts from "@/components/Blog/Posts";
import Hero from "@/components/ui/Hero";
import Subscribe from "@/components/ui/Subscribe";
import { filterPostsWithCategorySlug } from "@/helpers/filterPostsWithCategorySlug";

export default function page({ params }: { params: { slug: string } }) {
  const newTitle = params?.slug.replace("-", "");
  let itemsTotal = 0;
  let items = null;

  if (params?.slug) {
    items = filterPostsWithCategorySlug(allPosts, params.slug);
    itemsTotal = items.length;
  }

  return (
    <>
      <Hero
        className="pt-32 pb-24 capitalize"
        title={`${newTitle} (${itemsTotal})`}
        subTitle="Category"
      />
      <Posts className="pt-0 pb-52" archive params={params} itemsPerPage={6} />
      <Subscribe className="py-16 pt-64 lg:py-32 bg-blue-600" />
    </>
  );
}
