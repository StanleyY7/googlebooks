import "./header.css";
import search from "../../assets/search.png";
import { useState } from "react";
import DisplayBooks from "../displayBooks/displayBooks";
import ScribeLogo from "../scribeLogo/scribe";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchStarted, setisSearchStarted] = useState(false);
  const searchBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
  };

  const doSearch = () => {
    setisSearchStarted(true);
    searchBooks(searchTerm);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      doSearch();
    }
  };

  return (
    <header>
      {isSearchStarted && (
        <DisplayBooks setisSearchStarted={setisSearchStarted} />
      )}

      <div
        className={`header__content-wrapper ${
          isSearchStarted ? "hide" : "display"
        }`}
      >
        <ScribeLogo />
        <div className="header__input-wrapper">
          <input
            type="text"
            placeholder="Search for a Book"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleEnter}
          />
          <img className="icon" src={search} onClick={doSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
