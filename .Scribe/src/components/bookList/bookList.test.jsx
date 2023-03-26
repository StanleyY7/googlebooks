import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BookList from "./BookList";

const renderBookList = (books) => {
  render(<BookList books={books} />);
};

const books = [
  {
    id: 1,
    volumeInfo: {
      title: "Test Book",
      authors: "Test Author",
      description: "This is a description for a test book",
      pageCount: 100,
      publishedDate: "22/11/2022",
    },
  },
];

describe("BookList test", () => {
  test("Should render with relevant content", () => {
    renderBookList(books);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);

    const titles = screen.getAllByText(`Test Book`);
    expect(titles.length).toBe(2);

    const description = screen.getByText(
      `Description: This is a description for a test book`
    );
    expect(description).toBeInTheDocument();

    const datePublished = screen.getByText("Date Published: 22/11/2022");
    const pages = screen.getByText("Pages: 100");
    const preview = screen.getByText("Preview");

    expect(datePublished).toBeInTheDocument();
    expect(pages).toBeInTheDocument();
    expect(preview).toBeInTheDocument();
  });
});
