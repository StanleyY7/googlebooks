import "./bookCard.css";
import { useState } from "react";

const BookCard = ({ books, className }) => {
  const [displayDesc, setDisplayDesc] = useState(false);

  const doSomething = () => {
    setDisplayDesc(true);
  };

  const doOpposite = () => {
    setDisplayDesc(false);
  };

  return (
    <div className="section__grid">
      {books.map((book) => (
        <div
          key={book.volumeInfo.id}
          className={className}
          onMouseOver={doSomething}
          onMouseLeave={doOpposite}
        >
          <img
            className={`card__image ${displayDesc ? "hide" : "show"}`}
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <p className={`${displayDesc ? "hide" : "show"}`}>
            {book.volumeInfo.title}
          </p>
          <p className={`${displayDesc ? "hide" : "show"}`}>
            {book.volumeInfo.authors
              ? `By ${book.volumeInfo.authors[0]}`
              : "No Author"}
          </p>
          <p className={`card__description ${displayDesc ? "show" : "hide"}`}>
            Description: {book.volumeInfo.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
