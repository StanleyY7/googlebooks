import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import DisplayBooks from "./displayBooks";

const renderDisplayBooks = () => {
  render(<DisplayBooks />);
};

describe("DisplayBooks Test", () => {
  test("Should render with relevant content", () => {
    renderDisplayBooks();
    const logo = screen.getByText(".Scribe");
    expect(logo).toBeInTheDocument();
    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });
});
