import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import css from "./Swiper.module.css";
import { Link } from "react-router";

function MySlider() {
  return (
    <div id="swiper">
      <h2 className={css.title}>Перемоги, які формують репутацію</h2>
      <div className={css.mySwiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          loop={true}
          style={{ height: "100%" }}
        >
          <SwiperSlide className={css.mySlide}>
            Стягнули з в/ч (???????)
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            Зписали 84% заборгованості за кредитом
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            Фізична особа банкрут
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            Скасували постанову про керування в нетверезому стані
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>(??????)</SwiperSlide>
          <SwiperSlide className={css.mySlide}>Штраф ТЦК</SwiperSlide>
        </Swiper>
      </div>
      <div className={css.downContainer}>
        <h2 className={css.downTitle}>Це ми також виграли</h2>
        <Link to="/winBusiness" className={css.link}>
          Перелік справ
        </Link>
      </div>
    </div>
  );
}

export default MySlider;
