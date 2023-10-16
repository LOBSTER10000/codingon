import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <div>
      <div className="Header">
        <div className="Header2">Router Tutorial</div>
        <div className="Header_router">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/photo">Photo</Link>
        </div>
      </div>
    </div>
  );
}
