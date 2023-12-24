import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Logo from "./Logo";

describe("Logo component", () => {
  it("renders the logo with the correct text and styles", () => {
    render(<Logo />); // Arrange

    // Ensure that the text "acraft" is present
    const acraftText = screen.getByText("acraft");
    expect(acraftText).toBeInTheDocument();

    // Ensure that the text "." is present with the correct styles
    const dotText = screen.getByText(".");
    expect(dotText).toBeInTheDocument();
    expect(dotText).toHaveClass("text-blue-600");

    // Ensure that the link is present and has the correct href
    const linkElement = screen.getByRole("link", { name: /acraft ./i });
    expect(linkElement).toHaveAttribute("href", "/");

    // Ensure that the link has the correct text styles
    expect(linkElement).toHaveClass("text-[22px] text-gray-700 font-bold");
  });
});
