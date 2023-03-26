import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ScribeLogo from "./scribe";

const renderScribeLogo = () => {
  render(<ScribeLogo />);
};

describe("ScribeLogo Test", () => {
  test("ScribeLogo should render with relevant content", () => {
    renderScribeLogo();
    const logo = screen.getByText(".Scribe");
    expect(logo).toBeInTheDocument();
  });
});
