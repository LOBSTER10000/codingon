import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </header>
  );
}
