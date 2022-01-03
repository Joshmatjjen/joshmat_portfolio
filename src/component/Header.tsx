import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-2.svg";
import logoWhite from "../assets/svg/logo-white.svg";
import logoBlack from "../assets/svg/logo-black.svg";

// interface BoxProps {
//   styles?: React.CSSProperties;
// }

const Header: React.FC<any | null> = ({}) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(window.innerWidth);
  const checkRef: any = useRef<HTMLInputElement>(null);
  const aboutStyle: React.CSSProperties = {
    color: location.hash === "#home" ? "var(--color-secondary)" : "none",
  };
  const skillsStyle: React.CSSProperties ={ color: location.hash === "#skills" ? "var(--color-secondary)" : "none"};

  useEffect(() => {
    console.log(menuOpen);

    let elem = document.querySelector<Element>(".header");
    console.log("ELementss----", elem);
    console.log("Locations----", location);
    // if (menuOpen) {
    //   elem?.ATTRIBUTE_NODE
    //   // elem?.style?.backgroundColor = "var(--color-primary)";
    //   // const elem = document
    //   //   .querySelector<HTMLInputElement>(".header")
    //   //   ?.value("var(--color-primary)");
    // } else {
    //   // elem?.style?.backgroundColor = "transparent";
    // }
  }, [menuOpen]);
  return (
    <>
      {/* DESKTOP */}
      <header className="App-header">
        <div className="App-header--container">
          <Link to="" className="Logo">
            {/* <p>J</p> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src={logoWhite} className="App-logo-header" alt="logo" />
            {/* <p>K</p> */}
          </Link>
          <div className="App-header--container__main-nav">
            <a href="/#about">
              <p style={aboutStyle}>About</p>
            </a>
            <a href="/#about">
              <p style={skillsStyle}>Skills</p>
            </a>
            <a href="/#achievements">
              <p
              // style={
              //   location.hash === "#achievements"
              //     ? { color: "var(--color-secondary)" }
              //     : null
              // }
              >
                Portfolio
              </p>
            </a>
            <a href="/#testimony">
              <p
              // style={
              //   location.hash === "#testimony"
              //     ? { color: "var(--color-secondary)" }
              //     : null
              // }
              >
                Testimony
              </p>
            </a>
            <a href="/#contact">
              <p
              // style={
              //   location.hash === "#contact"
              //     ? { color: "var(--color-secondary)" }
              //     : null
              // }
              >
                Contact
              </p>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <header className="mobile-header">
        <div className="header">
          <Link to="" className="Logo1">
            <img src={logoWhite} className="App-logo-header" alt="logo" />
          </Link>
          <input
            className="menu-btn"
            defaultChecked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
            type="checkbox"
            id="menu-btn"
            ref={checkRef}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a
                href="/#about"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p style={aboutStyle}>Home</p>
              </a>
            </li>
            <li>
              <a
                href="/#skills"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p style={skillsStyle}>About</p>
              </a>
            </li>
            <li>
              <a
                href="/#achievements"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p
                // style={
                //   location.hash === "#achievements"
                //     ? { color: "var(--color-secondary)" }
                //     : null
                // }
                >
                  Achievement
                </p>
              </a>
            </li>
            <li>
              <a
                href="/#testimony"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p
                // style={
                //   location.hash === "#testimony"
                //     ? { color: "var(--color-secondary)" }
                //     : null
                // }
                >
                  Testimony
                </p>
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p
                // style={
                //   location.hash === "#contact"
                //     ? { color: "var(--color-secondary)" }
                //     : null
                // }
                >
                  Contact
                </p>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
