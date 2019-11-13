import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1 className="txt-logo">
      <Link to={"/"}>
      Alcohol Bar
      </Link>
    </h1>
  </div>
)

export default Header;