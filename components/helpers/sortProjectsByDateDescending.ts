import { compareDesc } from "date-fns";

import { allProjects } from "@/.contentlayer/generated";

export const sortProjectsByDateDescending = () => {
  return allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
};
