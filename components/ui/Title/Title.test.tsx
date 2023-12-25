import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Title from "./Title";

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    ...jest.requireActual("framer-motion").motion,
    h2: "h2",
    useAnimation: () => ({
      start: jest.fn(),
    }),
  },
}));

describe("Title component", () => {
  it("renders children with motion properties", () => {
    const childrenText = "This is a title text.";
    render(<Title delay={0.5}>{childrenText}</Title>);

    // Ensure that the title text is rendered
    const titleElement = screen.getByText(childrenText);
    expect(titleElement).toBeInTheDocument();
  });
});
