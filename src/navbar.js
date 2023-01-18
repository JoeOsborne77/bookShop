import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/"> Home Page</Link>
      <br></br>
      <Link to="/books">Books</Link>
      <br></br>
      <Link to="/createbook">Create A Book</Link>
      <br></br>
      <Link to="/authors">Authors</Link>
    </div>
  );
}

export default Navbar;
