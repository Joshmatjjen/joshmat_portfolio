import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-2.svg";
import logoWhite from "../assets/svg/logo-white.svg";
import logoBlack from "../assets/svg/logo-black.svg";

// interface BoxProps {
//   styles?: React.CSSProperties;
// }

const Header: React.FC<any | null> = ({ setCurrentMode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(window.innerWidth);
  const checkRef: any = useRef<HTMLInputElement>(null);
  const [navStyles, setNavStyles] = useState<any>({});

  //TODO work on dark mode
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  // const [logout, setLogout] = useState("Logout");
  // const history = useHistory();
  const checkMode = () => {
    if (mode === "light") {
      setCurrentMode("light");
      const root = document.querySelector<any>(":root");
      const toggle = document.querySelector<any>(".toggle");
      toggle.classList.add("dark-mode");

      root.style.setProperty("--mode", "light");
      root.style.setProperty("--color-mode-icon", "#242424");
      root.style.setProperty("--color-mode-bg", "#00000021");
      root.style.setProperty("--color-secondary", "#ffbb00");
      root.style.setProperty("--color-bg", "#F7F7F8");
      root.style.setProperty("--color-bg-2", "#eeeeee");
      root.style.setProperty("--color-border", "#c0c8cb");
      root.style.setProperty("--color-light", "#ffffff");
      root.style.setProperty("--color-card", "#f4f2f2");
      root.style.setProperty("--color-text", "#242424");
      root.style.setProperty("--color-text-1", "#777777");
      root.style.setProperty("--color-text-2", "#242424");
      root.style.setProperty("--color-text-4", "#e6e1e1");
      root.style.setProperty("--color-btn-hover", "#a8a8a8");
      root.style.setProperty("--scrollbarBG", "#e4ffeb");
      root.style.setProperty("--box-shadow", "rgba(0,0,0,0.35)");
      root.style.setProperty("--home-bg-opacity", 0.1);
      root.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--shadow1", "rgba(225, 225, 225, 0.6)");
      root.style.setProperty("--shadow2", "rgba(225, 225, 225, 0.7)");
    }
  };

  useEffect(() => checkMode(), []);

  const toggleMode = () => {
    const root = document.querySelector<any>(":root");
    const toggle = document.querySelector<any>(".toggle");
    // const bgColor = root.style.getPropertyValue('--bg-color')
    if (mode === "dark") {
      setCurrentMode("light");
      root.style.setProperty("--mode", "light");
      root.style.setProperty("--color-mode-icon", "#242424");
      root.style.setProperty("--color-mode-bg", "#00000021");
      root.style.setProperty("--color-secondary", "#ffbb00");
      root.style.setProperty("--color-bg", "#F7F7F8");
      root.style.setProperty("--color-bg-2", "#eeeeee");
      root.style.setProperty("--color-border", "#c0c8cb");
      root.style.setProperty("--color-light", "#ffffff");
      root.style.setProperty("--color-card", "#f4f2f2");
      root.style.setProperty("--color-text", "#242424");
      root.style.setProperty("--color-text-1", "#777777");
      root.style.setProperty("--color-text-2", "#242424");
      root.style.setProperty("--color-text-4", "#e6e1e1");
      root.style.setProperty("--color-btn-hover", "#a8a8a8");
      root.style.setProperty("--scrollbarBG", "#e4ffeb");
      root.style.setProperty("--box-shadow", "rgba(0,0,0,0.35)");
      root.style.setProperty("--home-bg-opacity", 0.1);
      root.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--shadow1", "rgba(225, 225, 225, 0.6)");
      root.style.setProperty("--shadow2", "rgba(225, 225, 225, 0.7)");

      localStorage.setItem("mode", "light");
      setMode("light");
    } else {
      setCurrentMode("dark");
      // root.style.setProperty("--color-bg", "#0c1d13"); // Sweet Green dark
      root.style.setProperty("--mode", "dark");
      root.style.setProperty("--color-mode-icon", "#FFD700");
      root.style.setProperty("--color-mode-bg", "#ffffff21");
      root.style.setProperty("--color-bg", "#04070e");
      root.style.setProperty("--color-bg-2", "#050c07");
      root.style.setProperty("--color-border", "#05da3e71");
      root.style.setProperty("--color-light", "#0c1d13");
      root.style.setProperty("--color-card", "#09180e");
      root.style.setProperty("--color-text", "#ffffff");
      root.style.setProperty("--color-text-1", "#ffffff");
      root.style.setProperty("--color-text-2", "#cccccc");
      root.style.setProperty("--color-text-4", "#b8b8b8");
      root.style.setProperty("--color-btn-hover", "#0b1d12");
      root.style.setProperty("--scrollbarBG", "#020503");
      root.style.setProperty("--box-shadow", "rgba(255,255,255,0.35)");
      root.style.setProperty("--home-bg-opacity", 0.9);
      root.style.setProperty("--boxShadow", "#ffffff0a");
      root.style.setProperty("--shadow1", "rgba(0, 0, 0, 0.6)");
      root.style.setProperty("--shadow2", "rgba(0, 0, 0, 0.7)");

      localStorage.setItem("mode", "dark");
      setMode("dark");
    }
    toggle.classList.toggle("dark-mode");
  };
  // let aboutStyle =
  //   color: location.hash === "#about" ? "var(--color-secondary)" : "none",
  // };
  // let skillsStyle: React.CSSProperties ={ color: location.hash === "#skills" ? "var(--color-secondary)" : "none"};
  // let portfolioStyle: React.CSSProperties = {
  //   color: location.hash === "#portfolio" ? "var(--color-secondary)" : "none",
  // };

  useEffect(() => {
    console.log(location);
    location.hash === "#about"
      ? setNavStyles({
          about: "var(--color-secondary)",
        })
      : location.hash === "#skills"
      ? setNavStyles({
          skills: "var(--color-secondary)",
        })
      : location.hash === "#work"
      ? setNavStyles({
          work: "var(--color-secondary)",
        })
      : location.hash === "#testimony"
      ? setNavStyles({
          testimony: "var(--color-secondary)",
        })
      : setNavStyles({});

    // if (menuOpen) {
    //   elem?.ATTRIBUTE_NODE
    //   // elem?.style?.backgroundColor = "var(--color-primary)";
    //   // const elem = document
    //   //   .querySelector<HTMLInputElement>(".header")
    //   //   ?.value("var(--color-primary)");
    // } else {
    //   // elem?.style?.backgroundColor = "transparent";
    // }
  }, [location]);

  console.log("Locations----", navStyles);

  useEffect(() => {
    console.log(menuOpen);

    let elem = document.querySelector<Element>(".header");
    // console.log("ELementss----", elem);
    // console.log("Locations----", location);
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
            <img
              src={mode === "light" ? logoBlack : logoWhite}
              className="App-logo-header"
              alt="logo"
            />
            {/* <p>K</p> */}
          </Link>
          <div className="App-header--container__main-nav">
            <a href="/#about">
              <p style={{ color: navStyles?.about }}>About</p>
            </a>
            <a href="/#skills">
              <p style={{ color: navStyles?.skills }}>Skills</p>
            </a>
            <a href="/#work">
              <p style={{ color: navStyles?.work }}>Work</p>
            </a>
            {/* <a href="/#testimony">
              <p
              // style={
              //   location.hash === "#testimony"
              //     ? { color: "var(--color-secondary)" }
              //     : null
              // }
              >
                Testimony
              </p>
            </a> */}
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
            <span
              className="toggle"
              onClick={toggleMode}
              style={{
                marginLeft: "4rem",
                marginBottom: "0.5rem",
                backgroundColor: "var(--color-mode-bg)",
                borderRadius: "50%",
                width: "2.3rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className={
                  mode === "light" ? "fad fa-moon-stars" : "fad fa-sun"
                }
                style={{
                  color: "var(--color-mode-icon)",
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                }}
              />
            </span>
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <header
        className="mobile-header"
        style={{
          boxShadow:
            location.hash === "#skills"
              ? "none"
              : "1px 0.5px 1px 0 var(--boxShadow)",
        }}
      >
        <div className="header">
          <Link to="" className="Logo1">
            <img
              src={mode === "light" ? logoBlack : logoWhite}
              className="App-logo-header"
              alt="logo"
            />
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
                <p style={{ color: navStyles?.about }}>About</p>
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
                <p style={{ color: navStyles?.skills }}>Skills</p>
              </a>
            </li>
            <li>
              <a
                href="/#work"
                onClick={() => {
                  checkRef.current.checked = !checkRef.current.checked;
                  setMenuOpen(!menuOpen);
                }}
              >
                <p style={{ color: navStyles?.portfolio }}>Work</p>
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
                <p style={{ color: navStyles?.testimony }}>Testimony</p>
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
