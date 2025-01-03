import React from "react";
import Icon from "../assets/colossar.ico";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white text-black">
      <div className="flex items-center">
        <img src={Icon} alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl">Colossar</h1>
      </div>
      <nav>
        <ul className="flex space-x-5">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
