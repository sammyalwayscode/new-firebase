import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <nav>home</nav>
      </Link>
      <Link to="/post">
        <nav>new profile</nav>
      </Link>
      <Link to="/todo">
        <nav>todo</nav>
      </Link>
    </div>
  );
};

export default Header;
