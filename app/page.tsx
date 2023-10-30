import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
    </>
  );
}
