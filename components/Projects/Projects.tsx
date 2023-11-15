"use client";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { Project } from "contentlayer/generated";

import { allProjects } from "@/.contentlayer/generated";

import { sortByDateDescending } from "../../helpers/sortByDateDescending";

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

  const items = sortByDateDescending(allProjects);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate) {
      // @ts-ignore
      ref.current?.scrollIntoView({ top: -50, behavior: "smooth" });
      setClickPaginate(false);
    }
  }, [clickPaginate, itemOffset, items, itemsPerPage]);

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
          <ReactPaginate
            nextLabel="Next"
            previousLabel="Previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
