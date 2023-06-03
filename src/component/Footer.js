import React from "react";
import { FaHeart } from "react-icons/fa";
// import "./Footer.css";
import "./style.css";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Nikhil | Made with <FaHeart /> by Nikhil
      </p>
    </footer>
  );
}

export default Footer;
