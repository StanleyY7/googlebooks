import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";
import React from "react";

const renderHeader = () => {
  render(<Header />);
};

describe("Header Test", () => {
  test("It should render the header with the relevant content", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    const logo = screen.getByRole("heading");
    expect(logo).toBeInTheDocument();
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
  });
});
