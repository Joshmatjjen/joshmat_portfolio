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
  const checkRef = useRef();
   const Homestyle: React.CSSProperties = {  
                   color: location.hash === "#home" ? "var(--color-secondary)" : "none" }
                                  // const Aboutstyle: React.CSSProperties = { location?.hash === "#about"
                  // ? { color: "var(--color-secondary)" }
                  // : null };

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
            <a href="/#home">
              <p style={Homestyle}>Home</p>
            </a>
            <a href="/#about">
              <p
              // style={
              //   Aboutstyle
              // }
              >
                About
              </p>
            </a>
            {/* <a href="/#achievements">
            <p
              style={
                location.hash === "#achievements"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Achievements
            </p>
          </a>
          <a href="/#testimony">
            <p
              style={
                location.hash === "#testimony"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Testimony
            </p>
          </a>
          <a href="/#contact">
            <p
              style={
                location.hash === "#contact"
                  ? { color: "var(--color-secondary)" }
                  : null
              }
            >
              Contact
            </p>
          </a> */}
          </div>
        </div>
      </header>

      {/* MOBILE */}
      {/* <header className="header">
        <Link className="Logo1">
          <p>J</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>K</p>
        </Link>
        <input
          className="menu-btn"
          defaultChecked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
          type="checkbox"
          id="menu-btn"
          ref={checkRef}
        />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a
              href="/#home"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
              <p
                style={
                  location.hash === "#home"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
              >
                Home
              </p>
            </a>
          </li>
          <li>
            <a
              href="/#about"
              onClick={() => {
                checkRef.current.checked = !checkRef.current.checked;
                setMenuOpen(!menuOpen);
              }}
            >
              <p
                style={
                  location.hash === "#about"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
              >
                About
              </p>
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
                style={
                  location.hash === "#achievements"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
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
                style={
                  location.hash === "#testimony"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
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
                style={
                  location.hash === "#contact"
                    ? { color: "var(--color-secondary)" }
                    : null
                }
              >
                Contact
              </p>
            </a>
          </li>
        </ul>
      </header> */}
    </>
  );
};

export default Header;
