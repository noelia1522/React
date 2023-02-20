import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../AuthenticationProvider";
import "./Footer.css";

const Header = () => {
  let navigate = useNavigate();

  return (
    <footer>
      <nav className="fixed-footer">
        <li
          className="listitem"
          style={{ listStyleType: "none", display: "flex" }}
        >
          <button className="btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </li>
        <li className="listitem">
          <button className="btn" onClick={() => navigate(+1)}>
            Forward
          </button>
        </li>
      </nav>
    </footer>
  );
};

export default Header;
