import ScribeLogo from "../scribeLogo/scribe";
import "./displayBooks.css";
import { useState, useEffect } from "react";
import SearchBar from "../searchBar/searchBar";
import BookList from "../bookList/BookList";

const DisplayBooks = ({
  books,
  setisSearchStarted,
  searchTerm,
  setSearchTerm,
  isSearchStarted,
  searchBooks,
}) => {
  const [display, setDisplay] = useState(true);

  const HideBooks = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    if (!display) {
      setisSearchStarted(false);
    }
  }, [display]);

  return (
    <section
      className={`section__grid-container ${!display ? "hide" : "show"}`}
    >
      <div className="section__grid">
        <BookList books={books} className="card" />
      </div>

      <div className="section__grid-container-top">
        <ScribeLogo
          className="section__ScribeLogo"
          onClick={HideBooks}
          setDisplay={setDisplay}
          display={display}
        />
      </div>

      <div className="section__SearchBar">
        <SearchBar
          className="section__SearchBar--override"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchStarted={isSearchStarted}
          setisSearchStarted={setisSearchStarted}
          searchBooks={searchBooks}
        />
      </div>
    </section>
  );
};
export default DisplayBooks;
