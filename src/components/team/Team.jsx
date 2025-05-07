import zero from "../../img/pngtree-cartoon-contact-icon-download-image_1251409.jpg";
import css from "./Team.module.css";
import React from "react";

export default function Team() {
  return (
    <div>
      <h3 className={css.teamTitle}>Наша команда</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <h4 className={css.name}>Кострич Михайло Петрович </h4>
          <img src={zero} alt="person" className={css.photo} />
          <p className={css.position}>Виконавчий директор, партнер</p>
          <p className={css.subPosition}>Адвокат</p>
          <p className={css.vector}>Цивільне право та справи по КУпАП</p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.name}>Самох Микола Юрійович</h4>
          <img src={zero} alt="person" className={css.photo} />
          <p className={css.position}>Партнер</p>
          <p className={css.subPosition}>Адвокат</p>
          <p className={css.vector}>Господарське право та банкрутства</p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.name}>Ставніченко Максим Віталійович </h4>
          <img src={zero} alt="person" className={css.photo} />
          <p className={css.position}>Асоційований партнер </p>
          <p className={css.subPosition}>Адвокат</p>
          <p className={css.vector}>Адміністративне та аграрне право</p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.name}>Коровін Станіслав Олександрович </h4>
          <img src={zero} alt="person" className={css.photo} />
          <p className={css.position}>або тут щось вписати або забрати інші</p>
          <p className={css.subPosition}>Юрист</p>
          <p className={css.vector}>Військове та пенсійне право</p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.name}>Іванова Анастасія Вікторівна</h4>
          <img src={zero} alt="person" className={css.photo} />

          <p className={css.position}>або тут щось вписати або забрати інші</p>
          <p className={css.subPosition}>помічник адвоката </p>
          <p className={css.vector}>Оскарження дій держорганів</p>
        </li>
      </ul>
    </div>
  );
}
