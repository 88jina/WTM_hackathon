import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
      <header>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/brand">Brand</Link>
        </div>
      </header>
    );

}
export default Navigation;