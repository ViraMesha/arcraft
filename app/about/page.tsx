import { Metadata } from "next";

import Story from "@/components/About/Story";
import Team from "@/components/About/Team";
import Why from "@/components/About/Why";
import Testimonials from "@/components/Home/Testimonials";
import AboutHero from "@/components/ui/Hero";

import Subscribe from "./../../components/ui/Subscribe";

export const metadata: Metadata = {
  title: "Arcraft | About",
};

export default function About() {
  return (
    <>
      <AboutHero className="pt-52 pb-24" />
      <Story className="" />
      <Why className="pt-52 pb-0" />
      <Testimonials className="pt-10 lg:pt-44 pb-10 lg:bg-32" />
      <Team className="py-10 lg:py-32" />
      <Subscribe className="bg-blue-600 py-10 lg:py-32" />
    </>
  );
}
