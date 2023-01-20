import { useState } from "react";
import search from "../../assets/search.png";

const SearchBar = ({ className }) => {
  const [booksData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchStarted, setisSearchStarted] = useState(false);

  const searchBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    setBooksData(data.items);
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
