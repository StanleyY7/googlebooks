import "./header.scss";
import DisplayBooks from "../displayBooks/displayBooks";
import React from "react";

const Header = ({ setisSearchStarted, books, setBooks }) => {
  return (
    <header>
      <DisplayBooks
        setisSearchStarted={setisSearchStarted}
        books={books}
        setBooks={setBooks}
      />
    </header>
  );
};

export default Header;
