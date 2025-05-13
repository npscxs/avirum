import logo from "../../img/logo2.png";
import styles from "./Header.module.css";
import React from "react";
import { Link } from "react-router";
import Navigation from "../navigation/Navigation";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      {location.pathname === "/" && <Navigation />}

      <ul className={styles.contactList}>
        <li>
          <a href="tel:+380985065416">+380-98-50-65-416</a>
        </li>
        <li>
          <a href="mailto:avirum.od@gmail.com">avirum.od@gmail.com</a>
        </li>
      </ul>
    </header>
  );
}
