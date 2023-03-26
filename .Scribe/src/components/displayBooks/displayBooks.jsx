import { useState, useEffect } from "react";

import "./displayBooks.scss";

import React from "react";
import ScribeLogo from "../scribeLogo/scribe";
import SearchBar from "../searchBar/searchBar";
import BookList from "../bookList/bookList";
import { HideBooks } from "../../services/general";

const DisplayBooks = ({ setisSearchStarted, books, setBooks }) => {
  const [display, setDisplay] = useState(true);

  let iconClassOverride = "icon--override";

  useEffect(() => {
    if (!display) {
      setisSearchStarted(false);
    }
  }, [display]);

  return (
    <section className="displayBooks__body">
      <section
        className={`section__content-container ${!display ? "hide" : "show"}`}
      >
        <div className="section__content-container-top">
          <div className="alignment-wrapper-left">
            <ScribeLogo
              className="section__ScribeLogo"
              onClick={() => HideBooks(display, setDisplay)}
              setDisplay={setDisplay}
              display={display}
            />
          </div>
          <div className="section__SearchBar">
            <div className="alignment-wrapper-right">
              <SearchBar
                className="section__SearchBar--override"
                iconClassOverride={iconClassOverride}
                setisSearchStarted={setisSearchStarted}
                setBooks={setBooks}
              />
            </div>
          </div>
        </div>

        <div className="grid-wrapper">
          <div className="section__grid">
            <BookList books={books} className="card" />
          </div>
        </div>
      </section>
    </section>
  );
};
export default DisplayBooks;
