import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <span>
        <Link to={"/"}>Home</Link> | <Link to="/favorites">Favoritos</Link>
      </span>
    </div>
  );
};

export default Header;
