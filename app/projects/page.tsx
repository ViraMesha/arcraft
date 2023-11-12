import CTA from "@/components/Projects/CTA";
import Projects from "@/components/Projects/Projects";
import Hero from "@/components/ui/Hero";
export default function page() {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
      <Projects className="pt-0 pb-52" itemsPerPage={4} />
      <CTA
        className="py-32 bg-blue-600"
        label="Get in touch"
        link="contact/"
        title="Do you have a project in mind?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At pariatur nemo dignissimos corrupti necessitatibus eligendi omnis quia praesentium et ducimus!"
      />
    </>
  );
}
