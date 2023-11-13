import { allProjects } from "contentlayer/generated";

import ProjectContent from "@/components/Projects/Project/ProjectContent";

export function generateStaticParams() {
  const projects = allProjects;
  return projects.map((project) => ({ slug: project.url }));
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + slug
  );

  return { title: project?.title };
};

export default function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + slug
  );
  return <>{project && <ProjectContent project={project} />}</>;
}
