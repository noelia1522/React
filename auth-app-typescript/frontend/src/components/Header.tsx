import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthentication } from "../AuthenticationProvider";
import "./Header.css";

const Header = () => {
  const result = useAuthentication();
  const authData = result?.authData;

  return (
    <header>
      <nav>
        <ul className="fixed-header">
          {authData?.name ? (
            <>
              <li className="listitem">
                <NavLink to="/">Shopping List</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="listitem">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="listitem">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="listitem">
                <NavLink to="/timer">Timer</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
