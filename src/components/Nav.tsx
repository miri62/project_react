import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { successMsg } from "../services/Feedback";

interface NavProps {
  isBussines: boolean;
  isLoggedin: boolean;
  setIsLoggedin: Function;
}

const Nav: FunctionComponent<NavProps> = ({
  isBussines,
  isLoggedin,
  setIsLoggedin,
}) => {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white  ">
        <div
          className="container-fluid text-white mx-4 "
          style={{ fontFamily: "Caveat", fontSize: "4rem" }}
        >
          <NavLink
            className="navbar-brand text-success  mx-4  "
            style={{ fontFamily: "Caveat", fontSize: "3rem" }}
            to="/"
          >
            <i className="fa-brands fa-openid"></i> Bizz
          </NavLink>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active text-warning mx-3"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              {!isLoggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-warning" to="/sign-in">
                      SignIn
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink className="nav-link text-warning" to="/sign-up">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink className="nav-link text-warning" to="/bussines">
                      Business
                    </NavLink>
                  </li>
                </>
              )}
              {isLoggedin && (
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-warning" to="/all-cards">
                    All Cards
                  </NavLink>
                </li>
              )}
              {isLoggedin && (
                <>
                  {isBussines && (
                    <>
                      <li className="nav-item mx-2">
                        <NavLink
                          className="nav-link text-warning"
                          to="/my-cards"
                        >
                          My Cards
                        </NavLink>
                      </li>
                      <li className="nav-item mx-2">
                        <NavLink
                          className="nav-link text-warning"
                          to="/new-card"
                        >
                          New Card
                        </NavLink>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
          {isLoggedin && (
            <button
              onClick={() => {
                setIsLoggedin(false);
                navigate("/");
                successMsg("Bye Bye!");
              }}
              style={{ height: "2rem" }}
              className="btn btn-warning  "
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
