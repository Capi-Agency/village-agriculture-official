import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './Swiper.module.css';

const CustomSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/id/1/800/400" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/2/800/400" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/3/800/400" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/id/1/100/100" alt="Thumb 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/2/100/100" alt="Thumb 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/3/100/100" alt="Thumb 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
