"use client";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import RecentBlog from "@/components/Home/RecentBlogs";
import Subscribe from "@/components/Home/Subscribe";
import Testimonial from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <HowItWorks className="py-16 !pt-32 lg:py-32" />
      <Testimonial className="py-16 lg:py-32" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-blue-600" />
    </>
  );
}
