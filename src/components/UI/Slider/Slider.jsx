import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {default as SlickSlider} from "react-slick";
import styles from './slider.module.css'
import classNames from "classnames";

const Slider = ({children, classes, largeSize=false}) => {
    const sliderClasses = classNames(styles.slider, classes, {
        [styles.largeSize]: largeSize
    })

    const largeSizeSettings = {
        slidesToShow: 6,
        slidesToScroll: 4,
        infinite: false,
        arrows: true,
        dotsClass: styles.dots,
        className: sliderClasses,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            }
        ]
    };

    const smallSizeSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dotsClass: styles.dots,
        className: sliderClasses,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    dotsClass: styles.dots,
                }
            }
        ]
    };

    const settings = largeSize ? {...largeSizeSettings} : {...smallSizeSettings}

    return (
        <>
            <SlickSlider {...settings}>
                {children}
            </SlickSlider>
        </>
    );
};

export default Slider;