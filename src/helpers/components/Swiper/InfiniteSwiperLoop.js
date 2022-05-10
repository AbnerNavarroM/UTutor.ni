import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function InfiniteSwiperLoop(props) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: props.delay,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: props.clickable,
                }}
                navigation={props.navigation}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {props.images &&
                    props.images.map(img => {
                        return (
                            <SwiperSlide key={img.title}>
                                <img src={img.imgSrc} alt={img.title} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    )
}

InfiniteSwiperLoop.propTypes = {
    delay: PropTypes.number.isRequired,
    navigation: PropTypes.bool,
    clickable: PropTypes.bool,
    images: PropTypes.array.isRequired
}

InfiniteSwiperLoop.defaultProps = {
    delay: 4000,
    navigation: true,
    clickable: true,
    images: []
}