import person1Img from "@/public/images/home/testimonials/person-1-min.jpg";
import person2Img from "@/public/images/home/testimonials/person-2-min.jpg";
import person3Img from "@/public/images/home/testimonials/person-3-min.jpg";

export const testimonialData = {
  heading: {
    title: "Hear what our customers say.",
    subTitle: "Testimonials",
  },
  testimonials: [
    {
      img: person1Img,
      name: "Emma Smith",
      titleRole: "Homeowner",
      quote:
        "Working with arcraft was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations.Working with [Architect's Name] was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations.",
    },
    {
      img: person2Img,
      name: "Olivia Johnson",
      titleRole: "Interior Designer",
      quote:
        "I've had the privilege of partnering with arcraft on several projects. Their ability to combine functionality, aesthetics, and sustainability in their designs is truly remarkable. Their spaces provide the perfect canvas for interior design excellence.",
    },
    {
      img: person3Img,
      name: "Liam Johnson",
      titleRole: "Landscape Architect",
      quote:
        "Collaborating with arcraft on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.",
    },
  ],
} as const;
