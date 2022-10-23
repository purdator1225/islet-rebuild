// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import './home.styles.scss'

import Vimeo from "@u-wave/react-vimeo";

import { Outlet } from "react-router-dom";

// Import Swiper styles

const Home = ({ videos }) => {
  return (

    <div className="home-container">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      loop={true}
      direction="vertical"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.key}>
          <Vimeo video={video.id} autoplay background loop />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
    
    </div>
  );
};

export default Home;