import React, { useState } from "react";
import { Link } from "react-router-dom";

const themes = ["theme-default", "theme-ocean", "theme-dark"];

const Navbar = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const changeTheme = () => {
    const next = (themeIndex + 1) % themes.length;
    document.documentElement.className = themes[next];
    setThemeIndex(next);
  };

  return (
    <div className="nav">
      <div className="nav_first">
        <Link to="/" className="logo">Pastebin</Link>
      </div>

      <div className="nav_second">
        <Link to="/about">About Us</Link>
        {/* <Link to="/api">Health Check</Link> */}
        <Link to="/create">Create</Link>
        <Link to="/my-pastes">My Pastes</Link>

      </div>

      <div className="nav_third">
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
