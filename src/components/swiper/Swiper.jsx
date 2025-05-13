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
      <h2 className={css.title}>
        Перемоги, які формують репутацію,{" "}
        <Link to="/winBusiness" className={css.link}>
          або повний перелік справ
        </Link>
      </h2>
      <div className={css.mySwiperContainer}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          navigation={true}
          loop={true}
          style={{ height: "100%" }}
        >
          <SwiperSlide className={css.mySlide}>
            <div className={css.flipCard}>
              <div className={css.flipCardInner}>
                <div className={css.flipCardFront}>
                  <p>Стягнули з в/ч (???????)</p>
                </div>
                <div className={css.flipCardBack}>
                  <p>back</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            <div className={css.flipCard}>
              <div className={css.flipCardInner}>
                <div className={css.flipCardFront}>
                  <p>Зписали 84% заборгованості за кредитом</p>
                </div>
                <div className={css.flipCardBack}>
                  <p>back</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.mySlide}>
            <div className={css.flipCard}>
              <div className={css.flipCardInner}>
                <div className={css.flipCardFront}>
                  <p>Скасували постанову про керування в нетверезому стані</p>
                </div>
                <div className={css.flipCardBack}>
                  <p>back</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            <div className={css.flipCard}>
              <div className={css.flipCardInner}>
                <div className={css.flipCardFront}>
                  <p>??????</p>
                </div>
                <div className={css.flipCardBack}>
                  <p>back</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={css.mySlide}>
            <div className={css.flipCard}>
              <div className={css.flipCardInner}>
                <div className={css.flipCardFront}>
                  <p>Штраф ТЦК</p>
                </div>
                <div className={css.flipCardBack}>
                  <p>back</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MySlider;
