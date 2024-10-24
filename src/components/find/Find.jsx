import React from "react";
import styles from "./Find.module.css";
import Card from "./Card";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >=340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >=768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >=1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1524710800377-5cdd93fa491a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Ferrari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Lamborghini"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1600268330186-76564be81357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Porche"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1516515429572-bf32372f2409?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="Lamborghini"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1484136063621-1acbc3b4ec98?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              make="sport"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
