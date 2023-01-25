import { useState } from "react";

const BookCard = ({ book, className }) => {
  const [displayDesc, setDisplayDesc] = useState(false);
  const checkDisplayDesc = displayDesc ? "hide" : "show";

  const setDisplayDescTrue = () => {
    setDisplayDesc(true);
  };

  const setDisplayDescFalse = () => {
    setDisplayDesc(false);
  };

  return (
    <>
      <div
        key={book.etag}
        className={className}
        onMouseOver={setDisplayDescTrue}
        onMouseLeave={setDisplayDescFalse}
      >
        <img
          className={`card__image ${checkDisplayDesc}`}
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <p className={`${checkDisplayDesc}`}>{book.volumeInfo.title}</p>
        <p className={`${checkDisplayDesc}`}>
          {book.volumeInfo.authors
            ? `By ${book.volumeInfo.authors[0]}`
            : "No Author"}
        </p>
        <p className={`card__description ${displayDesc ? "show" : "hide"}`}>
          Description: {book.volumeInfo.description}
        </p>
      </div>
    </>
  );
};

export default BookCard;
