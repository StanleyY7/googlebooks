import "./scribe.css";
const ScribeLogo = ({ setDisplay, display, className }) => {
  return (
    <div onClick={() => setDisplay(!display)}>
      <h1 className={`header__text--yellow-background + ${className}`}>
        .Scribe
      </h1>
    </div>
  );
};

export default ScribeLogo;
