import { func } from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <div className="name"> BLACK<span className="green">GREEN</span></div>
           
            <div className="navList">
            <Link to="/">Home </Link>
            <Link to="/about">About  </Link>
            <Link to="/brand">Brand</Link>
            </div>
        </div>
    );

}
export default Navigation;