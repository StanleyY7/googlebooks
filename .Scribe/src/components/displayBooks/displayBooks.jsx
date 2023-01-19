import ScribeLogo from "../scribeLogo/scribe";
import "./displayBooks.css";

const DisplayBooks = (props) => {
  return (
    <section className="section__grid-container">
      <div className="section__grid">
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
      </div>

      <div className="section__grid-container-top">
        <h1 className="section__ScribeLogo">.Scribe</h1>
      </div>
    </section>
  );
};

export default DisplayBooks;
