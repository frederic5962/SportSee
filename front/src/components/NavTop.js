import React from 'react';
import './NavTop.css';
import logo from '../assets/logo.png';

function NavTop() {
  return (
    <nav className="nav-t">
      <img src={logo} alt="Logo" className="navbar-logo" />
      
      <ul className="navbar-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Profil</a></li>
        <li><a href="#">Réglage</a></li>
        <li><a href="#">Communauté</a></li>
      </ul>
    </nav>
  );
}

export default NavTop;
