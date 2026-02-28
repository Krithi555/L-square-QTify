import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Carousel = ({ data, renderItem }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".right-nav",
          prevEl: ".left-nav",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <LeftNav />
      <RightNav />
    </div>
  );
};

export default Carousel;