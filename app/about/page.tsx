import AboutHero from "@/components/About/AboutHero";
import Story from "@/components/About/Story";
import Why from "@/components/About/Why";
import Testimonials from "@/components/Home/Testimonials";

export default function About() {
  return (
    <>
      <AboutHero className="pt-52 pb-24" />
      <Story className="" />
      <Why className="pt-52 pb-0" />
      <Testimonials className="pt-10 lg:pt-44 pb-10 lg:bg-32" />
    </>
  );
}
