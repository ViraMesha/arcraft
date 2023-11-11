import Projects from "@/components/Projects/Projects";
import Hero from "@/components/ui/Hero";
export default function page() {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
      <Projects className="pt-0 pb-52" itemsPerPage={4} />
    </>
  );
}
