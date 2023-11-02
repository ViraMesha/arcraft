import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <HowItWorks className="py-16 !pt-32 lg:py-32" />
    </>
  );
}
