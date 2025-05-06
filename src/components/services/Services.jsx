import styles from "./Services.module.css";
import { Link } from "react-router";

export default function Services() {
  return (
    <div className={styles.services} id="services">
      <div className={styles.servicesTitle}>
        <h2>Послуги</h2>
        <p>Виберіть розділ, щоб дізнатись ціни та детальну інформацію</p>
      </div>
      <ul className={styles.servicesList}>
        <li className={styles.servicesListItem}>
          <Link to="/bankruptcy">
            <h3>Банкрутсво</h3>
            <p>Списання боргів, зняття арештів, скасування штрафних санкцій</p>
          </Link>
        </li>
        <li className={styles.servicesListItem}>
          <div>
            <h3>Аграрне право</h3>
            <p>
              Право оренди, емфітевзису, купівля земельних ділянок, критичність
              с/г підприємств
            </p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <div>
            <h3>Цивільне та сімейне право</h3>
            <p>Спадщина, розлучення, аліменти, виселення, трудові спори</p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <div>
            <h3>Військове та пенсійне право</h3>
            <p>
              Спори з ПФУ, стягнення недоплаченого грошового забезпечення з в/ч
            </p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <div>
            <h3>Бізнесу</h3>
            <p>
              Спори з ДПС, АМКУ, прокуратурою, стягнення заборгованості,
              бронювання
            </p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <div>
            <h3>Інші категорії</h3>
            <p>
              Штрафи ТЦК, скасування постанов про керування т/з у нетверезому
              стані,
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
