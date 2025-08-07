import React from "react";
import "./Footer.css";

const Footer = ({ name }) => {
  return (
    <footer>
      <div>
        <h3>Copyright ©2024 Developed by {name}</h3>
        <span>Make With ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;