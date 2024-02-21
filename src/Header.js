// Displays the header of the website, including the logo, navigation menu, and any other relevant links.
// Incorporates the Navigation Component.
import React from 'react';
import Navigation from './Navigation.js';
const Header = () => {
  return (
    <header>
      <div className="logo">Logo image</div>
      <Navigation />
    </header>
  );
};

export default Header;
