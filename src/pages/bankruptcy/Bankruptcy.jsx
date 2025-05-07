import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import css from "./Bankruptcy.module.css";

export default function Bankruptcy() {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1>Банкрутсво</h1>
        <p>
          Особи, які не мають об'єктивної змоги погасити свою заборгованість
          перед кредитом мають право звернутись до (??????) суду за для визнання
          їх неплатоспроможними та списання з них всіх боргів.
        </p>
      </div>
      <div>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" className={css.accordionTitle}>
              Повний супровід процедури банкрутства
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Включає побудову стратегії у конкретній справі, збір інформації що
              до всіх активів особи,перевірка близьких осіб, підготовка всіх
              документів, участь у суді, засіданнях. <br /> Вартість: від 150000
              до 250000(залежно від кредиторів, суми боргу, тощо)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className={css.accordionTitle}>
              Аналіз справи на можливість банкрутства
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Вивчення документів, спілкування з клієнтом, перевірка по
              відкритих реєстрах на предмет аквів особи. Перспективи
              банкрутства. <br /> Вартість: 4000 грн.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className={css.accordionTitle}>
              Зняття арештів
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Вивчення матеріалів виконавчого (?????), звернення до виконавчої
              служби, оскарження дій у суді. <br /> Вартість: від 10000 до 20000
              грн.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className={css.accordionTitle}>
              Списання боргу
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ведення перемовин з кредитором що до списанняч відсотків та
              штрафних санкцій, судова процедура скасування основної винагороди
              (?????) або виконавчого збору <br /> Вартість: 8000 до 20000 грн.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className={css.accordionTitle}>
              Первинна консультація
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Відбувається усне спілкування у телефонному/відео режимі щодо
              можливості банкрутсва клієнта <br /> Вартість: безкоштовна
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
