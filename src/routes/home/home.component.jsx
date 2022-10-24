// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./home.styles.scss";

import Vimeo from "../../components/vimeo-player/vimeo.component";

import { Outlet } from "react-router-dom";

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Home = ({ videos }) => {

  const pagination = {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' +
        className +
        '"><span class="number">' +
        (index + 1) +
        '</span><span class="circle"></span></span>'
    }}


  return (
    <div className="home-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={pagination}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed= {1000}
        mousewheel={true}
        direction='vertical'
        scrollbar={{ draggable: true }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.key} className='swiper-slide'>
            <Vimeo video={video.id} autoplay background loop  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
