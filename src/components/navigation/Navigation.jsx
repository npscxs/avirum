import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href="#services">Послуги</a>
      </li>
      <li className={styles.navItem}>
        <a href="#swiper">Практики</a>
      </li>
      <li className={styles.navItem}>
        <a href="#team">Команда</a>
      </li>
      <li className={styles.navItem}>
        <a href="">Ціни</a>
      </li>
      <li className={styles.navItem}>
        <a href="">Питання</a>
      </li>
      <li className={styles.navItem}>
        <a href="#footer">Контакти</a>
      </li>
    </ul>
  );
}
