"use client";

import Image from "next/image";
import Link from "next/link";
import { RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { motion } from "framer-motion";

import { teamContent } from "@/utils/data/teamContent";

import Description from "../ui/Description/Description";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Team = ({ className }: SectionProps) => {
  const {
    heading: { title, subTitle, description },
    team,
  } = teamContent;
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="lg:flex justify-center mb-20 lg:mb-36">
          <div className="w-full lg:w-8/12 lg:flex gap-7 items-center">
            <div className="lg:w-7/12 mb-5 lg:mb-0">
              {subTitle && <Subtitle>{subTitle}</Subtitle>}
              {title && <Title>{title}</Title>}
            </div>
            <div className="lg:w-5/12 self-end">
              {description && <Description>{description}</Description>}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-10/12 mx-auto">
          {team.map(({ image, name, role, twitter, linkedin }, i) => {
            const delay = i * 0.2;
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay,
                  duration: 0.3,
                }}
                viewport={{ once: true }}
                key={name}
                className="bg-white overflow-hidden"
              >
                <Link href="#">
                  <Image
                    src={image}
                    alt="A member of the team"
                    width={400}
                    height={400}
                    className="object-cover object-top w-full max-h-72 max-w-full"
                  />
                </Link>
                <div className="p-8">
                  <h3 className="mb-0.5">{name}</h3>
                  <p className="text-gray-500 mb-4 uppercase text-[12px] tracking-[1px]">
                    {role}
                  </p>
                  <div className="mt-5 flex space-x-5 items-center">
                    {twitter && (
                      <Link
                        href={twitter}
                        className="transition hover:opacity-30"
                      >
                        <RxTwitterLogo className="text-lg" />
                      </Link>
                    )}
                    {linkedin && (
                      <Link
                        href={linkedin}
                        className="transition hover:opacity-30"
                      >
                        <RxLinkedinLogo className="text-lg" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
