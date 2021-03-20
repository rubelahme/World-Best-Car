import { useContext } from "react";
import { Link } from "react-router-dom";
import { privacyWeb } from "../../App";
const Header = () => {
  const [start] = useContext(privacyWeb);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            World Best Car
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <Link class="nav-link" to="/home">
                Home
              </Link>
              <Link class="nav-link" to="/details">
                Details
              </Link>
              {start.email ? (
                <button className="bg-success">
                  <Link class="nav-link" to="/singIn">
                    {start.displayName}
                  </Link>
                </button>
              ) : (
                <button className="bg-success">
                  <Link class="nav-link" to="/singIn">
                    Login
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
