import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SearchBar from "./searchBar";

const renderSearchBar = () => {
  render(<SearchBar />);
};

describe("SearchBar Test", () => {
  test("SearchBar should render with relevant content", () => {
    renderSearchBar();
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    const content = screen.getByPlaceholderText("Search for a Book");
    expect(content).toBeInTheDocument();
  });
});
