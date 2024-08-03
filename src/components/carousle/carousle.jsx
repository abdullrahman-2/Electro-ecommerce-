import 'swiper/css';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swoper.css'; 

function Carousel() {
  return (
    <>
      <Swiper
      className='swiper'
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <img src="../assets/banner1.jpg" className="  h-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/banner2.jpg" className="  h-100 " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/banner3.jpg" className="  h-100 " />
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}

export default Carousel;
