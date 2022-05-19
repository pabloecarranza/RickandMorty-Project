import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Landing Page</Link>
        <Link to="/home">Home</Link>
        <Link to="/newcharacter">Create Character</Link>
        <Link to="/about">Acerca de...</Link>
      </nav>
    </div>
  );
}

export default Navbar;

//<Link to="/character/:id">Character detail</Link>//