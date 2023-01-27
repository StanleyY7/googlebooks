import { useState } from "react";
import "./searchBar.css";
import search from "../../assets/search.png";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  isSearchStarted,
  setisSearchStarted,
  searchBooks,
  inputClassOverride,
  iconClassOverride,
  className,
}) => {
  const doSearch = () => {
    if (searchTerm) {
      setisSearchStarted(true);
      searchBooks(searchTerm);
    } else {
      alert("Please enter something to search for");
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      doSearch();
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
          onClick={doSearch}
        />
      </div>
    </div>
  );
};
export default SearchBar;
