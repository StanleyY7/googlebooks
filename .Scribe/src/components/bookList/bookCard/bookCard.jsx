import "./bookCard.css";
import { useState, useEffect } from "react";

const BookCard = ({ book, className }) => {
  const [displayDesc, setDisplayDesc] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [checkSelected, setCheckSelected] = useState(false);

  const checkDisplayDesc = displayDesc ? "hide" : "show";
  const oppositeCheckDisplayDesc = displayDesc ? "show" : "hide";

  const modalClass = isModalOpen ? "showModal" : "hideModal";

  useEffect(() => {
    setSelectedCard(book);
    setCheckSelected(true);
  }, [book]);

  const closeModal = (event) => {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", closeModal);
    } else {
      document.removeEventListener("keydown", closeModal);
    }
  }, [isModalOpen, closeModal]);

  return (
    <>
      {book && (
        <>
          <div
            key={book.etag}
            className={className}
            onMouseOver={() => setDisplayDesc(true)}
            onMouseLeave={() => setDisplayDesc(false)}
            onClick={() => {
              setIsModalOpen(true);
            }}
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

            <p className={`card__description ${oppositeCheckDisplayDesc}`}>
              Description: {book.volumeInfo.description}
            </p>
          </div>
          <div
            className={`overlay ${isModalOpen ? "show" : "hide"}`}
            onClick={() => {
              setSelectedCard(book);
              setCheckSelected(true);
              setIsModalOpen(false);
            }}
          >
            <div className={modalClass} onKeyDown={closeModal}>
              <div className="card__modal--background">
                <div className="card__modal">
                  <p
                    className="close-button"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                  >
                    X
                  </p>
                  <a
                    href={`http://books.google.com.au/books?id=${book.id}`}
                    target="_blank"
                  >
                    <img
                      className={`card__image`}
                      alt={`${
                        checkSelected ? selectedCard.volumeInfo.title : ""
                      } book`}
                      src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    />
                  </a>
                  <p>{checkSelected ? selectedCard.volumeInfo.title : ""}</p>
                  <p>
                    {checkSelected && book.volumeInfo.authors
                      ? `By ${selectedCard.volumeInfo.authors}`
                      : "No Author"}
                  </p>
                  <p>
                    Date Published:
                    {checkSelected
                      ? ` ${selectedCard.volumeInfo.publishedDate}`
                      : ""}
                  </p>
                  <p>
                    Pages:
                    {checkSelected
                      ? ` ${selectedCard.volumeInfo.pageCount}`
                      : ""}
                  </p>
                  <a
                    href={`http://books.google.com.au/books?id=${book.id}`}
                    target="_blank"
                  >
                    <p className="card__modal-preview">Preview</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookCard;
