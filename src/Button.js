// Displays the header of the website, including the logo, navigation menu, and any other relevant links.
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
