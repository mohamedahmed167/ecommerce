
import Product from './Product'
import "./SildeProduct.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import PageAnmation from '../../PageAnmation';
function SildeProducts({ title, data }) {
    return (
   <PageAnmation>
         <div className='silde-products silde'>
            <div className="container">
                <div className="top-silde">
                    <h2>{title}</h2>
                    <p>{data.description}</p>
                </div>
                <Swiper slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                    {data.map((item) => {
                        return (
                            <SwiperSlide><Product item={item}/></SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
   </PageAnmation>
    )
}

export default SildeProducts
