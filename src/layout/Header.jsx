import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header
      style={{ backgroundColor: bgColor, color: textColor }}
      className="header"
    >
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Contact Manager",
  bgColor: "rgb(90, 35, 241)",
  textColor: "rgb(214, 214, 214)",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
