import "./header.scss";
import DisplayBooks from "../displayBooks/displayBooks";

const Header = ({ setisSearchStarted, books, setBooks }) => {
  return (
    <header className="test">
      <DisplayBooks
        setisSearchStarted={setisSearchStarted}
        books={books}
        setBooks={setBooks}
      />
    </header>
  );
};

export default Header;
