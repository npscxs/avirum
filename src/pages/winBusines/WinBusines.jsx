import React from "react";
import css from "./WinBusines.module.css";
export default function WinBusines() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Виграні справи</h2>
      <ul className={css.list}>
        <li className={css.item}>Справа1</li>
        <li className={css.item}>Справа2</li>
        <li className={css.item}>Справа3</li>
        <li className={css.item}>Справа4</li>
        <li className={css.item}>Справа5</li>
        <li className={css.item}>Справа6</li>
      </ul>
    </div>
  );
}
