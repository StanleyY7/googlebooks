import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.module.css";
import styles from "./App.module.scss";
import ScribeLogo from "../src/components/scribeLogo/scribe";
import SearchBar from "../src/components/searchBar/searchBar";
import Header from "../src/components/header/header";

function App() {
  const searchClass = styles.inputWrapper;

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchStarted, setisSearchStarted] = useState(false);
  const [books, setBooks] = useState([]);

  const searchBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`
    );
    const data = await response.json();
    console.log(data.items);
    setBooks(data.items);
  };
  return (
    <section>
      <Header
        isSearchStarted={isSearchStarted}
        books={books}
        setBooks={setBooks}
        searchTerm={searchTerm}
        setisSearchStarted={setisSearchStarted}
        setSearchTerm={setSearchTerm}
        searchBooks={searchBooks}
      />
      <div
        className={`header__content-wrapper ${
          isSearchStarted ? "hide" : "display"
        }`}
      >
        <ScribeLogo />

        <SearchBar
          className={searchClass}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchStarted={isSearchStarted}
          setisSearchStarted={setisSearchStarted}
          searchBooks={searchBooks}
        />
      </div>
    </section>
  );
}

export default App;
