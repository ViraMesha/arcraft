"use client";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { format, parseISO } from "date-fns";

import { allPosts, Post } from "@/.contentlayer/generated";
import { sortByDateDescending } from "@/helpers/sortByDateDescending";

import PostsItems from "./PostsItems";

type PostsProps = {
  className: string;
  itemsPerPage: number;
  archive?: boolean;
  params?: any;
};

const Posts = ({
  className,
  itemsPerPage,
  archive = false,
  params,
}: PostsProps) => {
  const [currentItems, setCurrentItems] = useState<Post[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  let items: Post[] | null = null;

  if (!archive) {
    items = sortByDateDescending(allPosts);
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories.some(
          (category) =>
            category.title
              .toLocaleLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/^-+|-+$/g, "") === params?.slug
        )
      );
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (items) {
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }

    if (clickPaginate) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 3000);
      setClickPaginate(false);
    }
  }, [clickPaginate, itemOffset, items, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    if (items) {
      const newOffset: number = (event.selected * itemsPerPage) % items.length;
      setClickPaginate(true);
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      {items && items.length > 0 && (
        <section className={`${className}`} ref={ref}>
          <div className="wrapper">
            <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentItems && <PostsItems currentItems={currentItems} />}
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
      )}
    </>
  );
};

export default Posts;
