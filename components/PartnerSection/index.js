import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import FeaturesSection from '../../components/student-visa-components/FeaturesSection/FeaturesSection'
import About from '../../components/student-visa-components/about/about';
import pimg1 from '/public/images/brand/img_01.png'
import pimg2 from '/public/images/brand/img_02.png'
import pimg3 from '/public/images/brand/img_03.png'
import pimg4 from '/public/images/brand/img_04.png'
import pimg5 from '/public/images/brand/img_05.png'
import pimg6 from '/public/images/brand/img_06.png'
import pimg7 from '/public/images/brand/img_07.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg2,
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="brand">
            {/* <FeaturesSection /> */}
            <About />
        </section>
    );
}

export default PartnerSection;