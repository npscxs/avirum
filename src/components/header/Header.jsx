import logo from "../../img/logo2.png";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#services">Послуги</a>
          </li>
          <li className={styles.navItem}>Практики</li>
          <li className={styles.navItem}>Команда</li>
          <li className={styles.navItem}>Ціни</li>
          <li className={styles.navItem}>Питання</li>
          <li className={styles.navItem}>Контакти</li>
        </ul>
      </nav>
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
