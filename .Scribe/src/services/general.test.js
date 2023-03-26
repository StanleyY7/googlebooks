import { doSearch } from "./general";
import "@testing-library/jest-dom";

const setBooks = jest.fn();
const setisSearchStarted = jest.fn().mockResolvedValue(true);
const searchTerm = "fiction";

describe("doSearch Test", () => {
  it("should do a search and return the relevant data", () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        items: [
          { id: "1", title: "Book 1" },
          { id: "2", title: "Book 2" },
        ],
      }),
    });

    doSearch(searchTerm, setBooks, setisSearchStarted);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`;
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
