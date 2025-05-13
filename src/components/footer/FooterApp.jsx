import React from "react";
import css from "./FooterApp.module.css";

export default function FooterApp() {
  return (
    <footer id="footer" className={css.footer}>
      <p className={css.footerAddress}>
        Адресу офісу у місті Одеса: 65009, м. Одеса, вул. Сегедська, буд. 18,
        офіс 426 ( БЦ “Сегедський”, 4 поверх)
      </p>
      <p className={css.grafik}>Графік роботи офісу Пн-Пт: з 09:00 до 18:00</p>
      <p className={css.erdpou}>Код ЄДРПОУ: 45238530</p>
      <ul className={css.footerList}>
        <li className={css.footerListItem}>
          Eлектронна пошта:
          <a href="mailto:avirum.od@gmail.com"> avirum.od@gmail.com</a>
        </li>
        <li className={css.footerListItem}>
          Телефон: <a href="tel:+38 098 50 65 416">+38 098 50 65 416</a>
        </li>
      </ul>
      <a href="https://www.google.com/maps/dir//51.0183338,16.8878155/@51.0150671,16.889103,14z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D">
        проложитьб маршрут
      </a>
    </footer>
  );
}
