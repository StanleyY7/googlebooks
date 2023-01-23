import "./header.css";
import DisplayBooks from "../displayBooks/displayBooks";

const Header = ({
  isSearchStarted,
  books,
  setBooks,
  searchTerm,
  setisSearchStarted,
  setSearchTerm,
  searchBooks,
}) => {
  return (
    <header>
      {isSearchStarted && books.length > 0 && (
        <DisplayBooks
          setisSearchStarted={setisSearchStarted}
          books={books}
          setBooks={setBooks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchStarted={isSearchStarted}
          searchBooks={searchBooks}
        />
      )}
    </header>
  );
};

export default Header;
