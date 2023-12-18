import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Copyright from "./Copyright";

describe("Copyright Component", () => {
  it("renders copyright information with links", () => {
    render(<Copyright />); // Arrange

    // Check if the copyright text is present
    const copyrightText = screen.getByText(/2023/); // Act
    expect(copyrightText).toBeInTheDocument();

    // Check if the link to 'arcraft' is present
    const arcraftLink = screen.getByRole("link", { name: /arcraft/i });
    expect(arcraftLink).toHaveAttribute("href", "/");

    // Check if the heart icon is rendered
    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toBeInTheDocument();

    // Check if the link to the author's LinkedIn profile is present
    const linkedInLink = screen.getByRole("link", { name: /Vira Mesha/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/vira-mesha/"
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer nofollow");
  });
});
