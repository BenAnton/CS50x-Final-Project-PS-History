import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

interface NavBarProps {
  onLinkClick: (page: string) => void;
}

export const NavbarTop = ({ onLinkClick }: NavBarProps) => {
  const handleClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onLinkClick(page);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="ahover navbar-brand"
          href="#"
          onClick={(e) => handleClick("home", e)}
        >
          <img src={logo} alt="Playstation Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="ahover nav-link"
                href="#"
                onClick={(e) => handleClick("consoles", e)}
              >
                Consoles
              </a>
            </li>
            <li className="nav-item">
              <a
                className="ahover nav-link"
                href="#"
                onClick={(e) => handleClick("games", e)}
              >
                PS5 Games
              </a>
            </li>
            <li className="nav-item">
              <a
                className="ahover nav-link"
                href="#"
                onClick={(e) => handleClick("controllers", e)}
              >
                Controllers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarTop;
