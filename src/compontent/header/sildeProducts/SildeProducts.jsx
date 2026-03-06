
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
  console.log("Received props:", title, data);






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
                        className="swiper"
                        navigation={true} modules={[Navigation, Autoplay]}
                        breakpoints={{
                            0: {          // من 0 بيكسل
                                slidesPerView: 1,
                                centeredSlides: true, // دي أهم خاصية عشان التوسيط
        spaceBetween: 10,
                            },
                            640: {        // من 640px (موبايل كبير/تابلت صغير)
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            1024: {       // من 1024px (ديسكتوب)
                                slidesPerView: 4,
                                centeredSlides: false,
                            },
                        }}
                    >
                        {data.map((item) => {
                            return (
                                <SwiperSlide><Product item={item} /></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </PageAnmation>
    )
}

export default SildeProducts
