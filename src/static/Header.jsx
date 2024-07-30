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
      <Link to="/postimage">
        <nav>post image</nav>
      </Link>
      <Link to="/getimage">
        <nav>get image</nav>
      </Link>
    </div>
  );
};

export default Header;
