import React from "react";
import { BiArch, BiHardHat, BiSolidUser } from "react-icons/bi";
export const whyData = {
  heading: {
    title: "Blueprinting Tomorrow's Landscapes Today",
    subTitle: "Why us",
  },
  whyUsItems: [
    {
      icon: React.createElement(BiHardHat),
      title: "Unparalleled Expertise",
      description:
        "With over 27 years of experience in the industry, our team of architects and designers brings a wealth of knowledge to every project.",
    },
    {
      icon: React.createElement(BiArch),
      title: "Innovative Design",
      description:
        "Our portfolio showcases award-winning designs that have earned accolades for their uniqueness and functionality.",
    },
    {
      icon: React.createElement(BiSolidUser),
      title: "Client-Centered Approach",
      description:
        "We believe in collaboration. Your vision and goals are at the forefront of our design process.",
    },
  ],
} as const;
