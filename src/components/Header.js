import PropTypes from "prop-types";
import Button from "./Button.js";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Klick");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add"></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//Prop Types
// Header.propTypes = {
//     title: PropTypes.string,
// }

//CSS Styling
// const headingStyle = {
//     color:'red'
// }

export default Header;
