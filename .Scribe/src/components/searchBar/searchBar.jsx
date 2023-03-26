import { useState } from "react";
import React from "react";
import "./searchBar.scss";
import search from "../../assets/search.png";

import { doSearch } from "../../services/general";

const SearchBar = ({
  iconClassOverride,
  className,
  setBooks,
  setisSearchStarted,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      doSearch(searchTerm, setBooks, setisSearchStarted);
    }
  };

  return (
    <div className="header__input-wrapper">
      <div className="searchbar-wrapper">
        <input
          className={`${className}`}
          type="text"
          placeholder="Search for a Book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleEnter}
        />
        <img
          className={`icon ${iconClassOverride}`}
          src={search}
          onClick={() => {
            doSearch(searchTerm, setBooks, setisSearchStarted);
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
