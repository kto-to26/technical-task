import './App.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';


import Feedback from './feedback/feedback'
// json
import data from "./assets/data.json"
function App() {


  console.log(data.feedback);

  return (
    <>
   <div className="wrapper">
    <h1 className='title'>What our clients say</h1>

    <div className="sliderBlock">
      <Swiper 
       modules={[Navigation,Autoplay]}
       spaceBetween={50}
       loop
       slidesPerView={4}
       autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination
       navigation={{ clickable: true }}
      >


        {data.feedback.map((feedback, index) => (
          <SwiperSlide key={index}>
            <Feedback feedback={feedback}></Feedback>
          </SwiperSlide>
        ))}
      
      </Swiper>
    </div>
   </div>
    </>
  )
}

export default App
