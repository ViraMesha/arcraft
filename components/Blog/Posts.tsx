"use client";
import { useEffect, useRef, useState } from "react";

import { allPosts, Post } from "@/.contentlayer/generated";
import { filterPostsWithCategorySlug } from "@/helpers/filterPostsWithCategorySlug";
import { sortByDateDescending } from "@/helpers/sortByDateDescending";

import Pagination from "../ui/Pagination";

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
      items = filterPostsWithCategorySlug(allPosts, params.slug);
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (items) {
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }

    if (clickPaginate) {
      ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      setClickPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clickPaginate, ref]);

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
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Posts;
