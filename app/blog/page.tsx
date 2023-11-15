import { Metadata } from "next";

import Posts from "@/components/Blog/Posts";
import Hero from "@/components/ui/Hero";

import Subscribe from "./../../components/ui/Subscribe";

export const metadata: Metadata = {
  title: "Arcraft | Blog",
};

export default function Blog() {
  return (
    <>
      <Hero
        className="pt-52 pb-24"
        title="Recent Updates"
        subTitle="Our Blog"
      />
      <Posts className="pt-0 pb-52" itemsPerPage={6} />
      <Subscribe className="py-16 pt-64 lg:py-32 bg-blue-600" />
    </>
  );
}
