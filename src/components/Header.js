import PropTypes from "prop-types";
import Button from "./Button.js";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        ></Button>
      )}
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
