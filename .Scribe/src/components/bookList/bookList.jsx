import "./bookList.scss";
import BookCard from "./bookCard/bookCard";
import React from "react";
const BookList = ({ books, className }) => {
  return (
    <div className="wrapper">
      <div className="section__grid">
        {books &&
          books.map((book) => (
            <BookCard key={book.id} book={book} className={className} />
          ))}
      </div>
    </div>
  );
};

export default BookList;
