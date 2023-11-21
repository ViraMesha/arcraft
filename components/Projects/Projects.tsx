"use client";
import { useEffect, useRef, useState } from "react";
import { Project } from "contentlayer/generated";

import { allProjects } from "@/.contentlayer/generated";

import { sortByDateDescending } from "../../helpers/sortByDateDescending";
import Pagination from "../ui/Pagination";

import ProjectsItems from "./ProjectsItems";

type ProjectsProps = {
  className: string;
  itemsPerPage: number;
};

const Projects = ({ className, itemsPerPage }: ProjectsProps) => {
  const [currentItems, setCurrentItems] = useState<Project[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const items = sortByDateDescending(allProjects);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate) {
      ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      setClickPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clickPaginate, ref]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset: number = (event.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <section className={`${className}`} ref={ref}>
      <div className="wrapper">
        <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
          {currentItems && <ProjectsItems currentItems={currentItems} />}
        </div>
        <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
