import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function Silder() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the now </h4>
                                <h3>Microsoft  Xbox <br />     360 controller </h3>
                                <p>windows xp/10/7/8 ps3, tv ,Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img src="/images/banner_Hero1.jpg" alt="silder-hero 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the now </h4>
                                <h3>Microsoft  Xbox <br />     360 controller </h3>
                                <p>windows xp/10/7/8 ps3, tv ,Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img src="/images/banner_Hero3.jpg" alt="silder-hero 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the now </h4>
                                <h3>Microsoft  Xbox <br />     360 controller </h3>
                                <p>windows xp/10/7/8 ps3, tv ,Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img className='img-mo' src="/images/banner_Hero2.jpg" alt="silder-hero 1" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Silder
