import { useState } from "react";
import "./searchBar.css";
import search from "../../assets/search.png";

const SearchBar = ({
  iconClassOverride,
  className,
  setBooks,
  setisSearchStarted,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const doSearch = () => {
    if (searchTerm) {
      setisSearchStarted(true);
      const searchBooks = async (searchTerm) => {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`
        );
        const data = await response.json();
        console.log(data.items);
        setBooks(data.items);
      };
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
