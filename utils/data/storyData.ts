import post1 from "../../public/images/about/posts/post-1-min.jpg";
import post2 from "../../public/images/about/posts/post-2-min.jpg";
import post3 from "../../public/images/about/posts/post-3-min.jpg";
import signatureImg from "../../public/images/about/signature.svg";
import team1 from "../../public/images/about/team/team-1.jpg";
import team2 from "../../public/images/about/team/team-2.jpg";
import team3 from "../../public/images/about/team/team-3.jpg";
import team4 from "../../public/images/about/team/team-4.jpg";
import team5 from "../../public/images/about/team/team-5.jpg";
import team6 from "../../public/images/about/team/team-6.jpg";

export const storyData = {
  column1: {
    imgs: [
      {
        img: team5,
        alt: "Team brainstorming",
        with: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-96",
      },
      {
        img: team1,
        alt: "Woman making a plan",
        with: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-96",
      },
    ],
  },
  column2: {
    imgs: [
      {
        img: team2,
        alt: "Team meeting",
        with: 1188,
        height: 1413,
        tailwindClass: "h-48 lg:h-64",
      },
      {
        img: post2,
        alt: "White curvy building",
        with: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-64",
      },
      {
        img: team4,
        alt: "White curvy building",
        with: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-96",
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: post1,
        alt: "Building",
        with: 1188,
        height: 1413,
        tailwindClass: "h-48 lg:h-64",
      },
      {
        img: team3,
        alt: "Man writing a plan",
        with: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-64",
      },
    ],
  },
  storyText: {
    heading: "Crafting Spaces, Shaping Dreams",
    text1:
      "Envisioned by a group of passionate architects, our story is one of perseverance and boundless creativity. We started as a small team with big dreams, driven by the belief that architecture holds the power to shape lives and communities. Through years of dedication and unwavering commitment, we have evolved into a dynamic force, seamlessly blending aesthetics with functionality to create spaces that inspire and endure.",
    text2:
      "Our journey has been defined by our relentless pursuit of excellence and our eagerness to embrace new challenges. From the early projects that ignited our spark to the iconic structures that now stand as testaments to our vision, every step of our journey is etched with a passion for innovation. Today, we stand on the shoulders of our accomplishments, guided by the same spirit that set us on this path – to shape a world that celebrates the harmony of design, environment, and human experience.",
    signature: signatureImg,
    name: "Bill Smith",
    role: "CEO and Co-Founder",
  },
};
