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
      const searchBooks = async (searchTerm) => {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39`
        );
        const data = await response.json();
        console.log(data.items);
        if (data.items) {
          setisSearchStarted(true);
          setBooks(data.items);
        } else if (!data.items || data.items === 0) {
          alert("No results found");
        }
      };
      searchBooks(searchTerm);
    } else {
      alert("Please enter something to search for");
    }
  };

  const handleEnter = (event) => {
    doSearch();
    event.preventDefault();
  };
  return (
    <div className="header__input-wrapper">
      <div>
        <form className="searchbar-wrapper" onSubmit={handleEnter}>
          <input
            className={`${className}`}
            type="text"
            placeholder="Search for a Book"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            className={`icon ${iconClassOverride}`}
            src={search}
            onClick={doSearch}
          />
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
