import "./header.css";
import search from "../../assets/search.png";
import { useState } from "react";
import DisplayBooks from "../displayBooks/displayBooks";
import ScribeLogo from "../scribeLogo/scribe";
import SearchBar from "../searchBar/searchBar";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchStarted, setisSearchStarted] = useState(false);
  const [books, setBooks] = useState([]);

  const searchBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`
    );
    const data = await response.json();
    setBooks(data.items);
  };

  return (
    <header>
      {isSearchStarted && books.length > 0 && (
        <DisplayBooks
          setisSearchStarted={setisSearchStarted}
          books={books}
          setBooks={setBooks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchStarted={isSearchStarted}
          searchBooks={searchBooks}
        />
      )}

      <div
        className={`header__content-wrapper ${
          isSearchStarted ? "hide" : "display"
        }`}
      >
        <ScribeLogo />

        <SearchBar
          className=".header__input-wrapper "
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchStarted={isSearchStarted}
          setisSearchStarted={setisSearchStarted}
          searchBooks={searchBooks}
        />
      </div>
    </header>
  );
};

export default Header;
