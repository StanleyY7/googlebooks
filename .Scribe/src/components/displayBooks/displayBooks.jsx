import ScribeLogo from "../scribeLogo/scribe";
import "./displayBooks.css";
import { useState, useEffect } from "react";
import SearchBar from "../searchBar/searchBar";
import BookCard from "../bookCard/bookCard";

const DisplayBooks = ({ setisSearchStarted }) => {
  const [display, setDisplay] = useState(true);

  const HideBooks = () => {
    setDisplay(false);
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
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>

      <div className="section__grid-container-top">
        <h1 className="section__ScribeLogo" onClick={HideBooks}>
          .Scribe
        </h1>
      </div>

      <div className="section__SearchBar">
        <SearchBar className="override" />
      </div>
    </section>
  );
};
export default DisplayBooks;
