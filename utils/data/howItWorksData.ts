import React from "react";
import {
  BiBulb,
  BiHardHat,
  BiLayer,
  BiNote,
  BiOutline,
  BiPaintRoll,
} from "react-icons/bi";

export const howItWorksData = {
  heading: {
    title: "Where imagination intersects with architectural soundness",
    subtitle: "How it functions",
    description:
      "At arcraft, our commitment is to craft environments that go beyond simple buildings, infusing each design with narratives and experiences.",
    steps: [
      {
        number: "01",
        icon: React.createElement(BiHardHat),
        title: "Project Initiation",
        description:
          "At arcraft, our commitment is to craft environments that go beyond simple buildings, infusing each design with narratives and experiences.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
      {
        number: "02",
        icon: React.createElement(BiPaintRoll),
        title: "Conceptual Design",
        description:
          "At arcraft, our commitment is to craft environments that go beyond simple buildings, infusing each design with narratives and experiences.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
      {
        number: "03",
        icon: React.createElement(BiNote),
        title: "Construction Documents",
        description:
          "At arcraft, our commitment is to craft environments that go beyond simple buildings, infusing each design with narratives and experiences.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
    ],
    features: [
      {
        icon: React.createElement(BiHardHat),
        title: "Design Development",
        description:
          "We embark on our journey with a spark of creativity and a dedication to transforming aspirations into real spaces. From inception to realization, we harmonize a symphony of design.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
      {
        icon: React.createElement(BiBulb),
        title: "Construction Administration",
        description:
          "We embark on our journey with a spark of creativity and a dedication to transforming aspirations into real spaces. From inception to realization, we harmonize a symphony of design.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
      {
        icon: React.createElement(BiOutline),
        title: "Post-Occupancy evaluation",
        description:
          "We embark on our journey with a spark of creativity and a dedication to transforming aspirations into real spaces. From inception to realization, we harmonize a symphony of design.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
      {
        icon: React.createElement(BiLayer),
        title: "Schematic Design",
        description:
          "We embark on our journey with a spark of creativity and a dedication to transforming aspirations into real spaces. From inception to realization, we harmonize a symphony of design.",
        btn: {
          href: "#",
          label: "Learn More",
        },
      },
    ],
  },
} as const;
