// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../images/carousel01-1-800x500.jpg';
import img2 from '../../images/carousel03-1-800x500.jpg';
import img3 from '../../images/carousel05-1-800x500.jpg';
import img4 from '../../images/carousel06-1-800x500.jpg';
import img5 from '../../images/carousel07-1-800x500.jpg';

import { useEffect,useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Navigation} from "swiper";


export default function Slider({productData}) {
const [slidesPerView,SetslidesPerView]=useState(3);
  const [direction,setDirection]=useState('ltr');
  useEffect(() => {
  
    const switchSlider=()=>{
      window.onresize=function(){

        if(window.innerWidth <1000)
        {
          SetslidesPerView(1);
        }else{
          SetslidesPerView(3);
        }
      }
    }
    switchSlider();
  }, [window.innerWidth]);
  useEffect(()=>{
    setDirection(document.documentElement.dir);
  },[document.documentElement.dir])
  return (
    <>
      <Swiper
        dir={direction}
        slidesPerView={slidesPerView}
        spaceBetween={30}
       loop={true}
       key={direction}
       navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2>{productData[0]}</h2>
        </SwiperSlide>
        <SwiperSlide>
            
        <img src={img2} alt="" />
        <h2>{productData[1]}</h2>

        </SwiperSlide>
        <SwiperSlide>
            
        <img src={img3} alt="" />
        <h2>{productData[2]}</h2>
            
        </SwiperSlide>
        <SwiperSlide>
            
        <img src={img4} alt="" />
        <h2>{productData[3]}</h2>

        </SwiperSlide>
        <SwiperSlide>
            
        <img src={img5} alt="" />
        <h2>{productData[4]}</h2>

        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
