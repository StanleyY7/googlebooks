import { useState } from "react";
import "./searchBar.css";
import search from "../../assets/search.png";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  isSearchStarted,
  setisSearchStarted,
  searchBooks,
  className,
}) => {
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
    <div className="header__input-wrapper">
      <input
        className={`${className}`}
        type="text"
        placeholder="Search for a Book"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleEnter}
      />
      <img className="icon" src={search} onClick={doSearch} />
    </div>
  );
};
export default SearchBar;
