import { useState } from "react";

import "./App.module.css";
import styles from "./App.module.scss";
import ScribeLogo from "../src/components/scribeLogo/scribe";
import SearchBar from "../src/components/searchBar/searchBar";
import Header from "../src/components/header/header";

const App = () => {
  const searchClass = styles.inputWrapper;
  const fillerClass = styles.filler;

  const [isSearchStarted, setisSearchStarted] = useState(false);
  const [books, setBooks] = useState([]);
  return (
    <section>
      {isSearchStarted && books.length > 0 && (
        <Header
          setisSearchStarted={setisSearchStarted}
          books={books}
          setBooks={setBooks}
        />
      )}

      <div
        className={`header__content-wrapper ${
          isSearchStarted ? "hide" : "display"
        }`}
      >
        <ScribeLogo />

        <SearchBar
          className={searchClass}
          setBooks={setBooks}
          setisSearchStarted={setisSearchStarted}
        />
      </div>
      <div
        className={`${fillerClass} ${isSearchStarted ? "hide" : "display"}`}
      ></div>
    </section>
  );
};

export default App;
