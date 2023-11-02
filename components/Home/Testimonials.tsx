"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { testimonialData } from "@/utils/data/testimonialData";

import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

import "swiper/css";

const Testimonials = ({ className }: SectionProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState<boolean | undefined>(false);
  const [isStart, setIsStart] = useState<boolean | undefined>(true);

  const sliderRef = useRef<SwiperRef>(null);

  const {
    heading: { title, subTitle },
    testimonials,
  } = testimonialData;

  useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsStart(sliderRef.current?.swiper.isBeginning);
  });

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 flex items-center">
            <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
              {subTitle && <Subtitle>{subTitle}</Subtitle>}
              {title && <Title>{title}</Title>}
            </div>
          </div>
        </div>

        <div className="lg:flex justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 lg:flex items-center"
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
              className="z-50 py-32 mb-7 relative flex items-center"
            >
              {testimonials.map(({ name, img, titleRole, quote }, index) => (
                <SwiperSlide className="w-full" key={name}>
                  <div className="md:flex overflow-y-visible mt-10 items-stretch bg-white">
                    <div className="md:w-4/12">
                      <Image
                        src={img}
                        alt={name}
                        width={379}
                        height={320}
                        className="object-cover object-center !h-full !w-full"
                      />
                    </div>

                    <div className="md:w-8/12 p-7 md:p-16 flex items-center">
                      <div>
                        <blockquote className="text-lg mb-7">
                          <span className="text-[200px] leading-[0] relative text-blue-600 block">
                            &ldquo;
                          </span>
                          {quote}
                        </blockquote>
                        <div className="flex space-x-3 text-sm">
                          <strong>{name}</strong>
                          <span>&mdash;</span>
                          <span>{titleRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isStart
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-blue-600 text-white"
              } relative top-0 group transition w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-primary transition
                group-hover:text-white ${
                  isStart
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>

            <div
              onClick={nextHandler}
              className={`${
                isEnd
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-blue-600 text-white"
              } relative top-0 group transition w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-primary transition
                group-hover:text-white ${
                  isEnd
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
