import "./bookCard.css";

const BookCard = ({ books, className }) => {
  return (
    <div className="section__grid">
      {books.map((book) => (
        <div key={book.volumeInfo.id} className={className}>
          <img
            className="Card__image"
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <p>{book.volumeInfo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
