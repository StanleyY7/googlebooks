import "./header.css";
import DisplayBooks from "../displayBooks/displayBooks";

const Header = ({
  books,
  searchTerm,
  setisSearchStarted,
  setSearchTerm,
  doSearch,
}) => {
  return (
    <header>
      <DisplayBooks
        setisSearchStarted={setisSearchStarted}
        books={books}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        doSearch={doSearch}
      />
    </header>
  );
};

export default Header;
