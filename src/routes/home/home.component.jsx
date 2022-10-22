// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Vimeo from "@u-wave/react-vimeo";

import { Outlet } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Home = ({ videos }) => {
  return (

    <div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
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
    <Outlet/>
    
    </div>
  );
};

export default Home;