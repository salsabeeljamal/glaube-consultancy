import React from 'react';
import CountryList from '../../../api/country'
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aIcon1 from '/public/images/icon/h_star.png'
import Image from 'next/image';


const CountrySection = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
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
        <section className="country pb-120 pt-140" id="Countries">
            <div className="container">
                <div className="sec-title style-2 text-center mb-55">
                    <span className="sec-title--sub"><Image src={aIcon1} alt="" />countries<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading">Countries We Help<br /> You Study In</h3>
                </div>
                <div className="xb-country-slide">
                    <div className="">
                        <div className="pb-90 d-flex justify-content-center gy-5 flex-wrap gap-">
                                {CountryList.slice(0, 10).map((country, cnt) => (
                                    <div className="xb-country2 px-5 pb-5" key={cnt}>
                                        <div className="xb-item--inner text-center">
                                            <div className="xb-item--flag mb-20">
                                                <Image src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                            {/* <Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`} className="xb-item--link"></Link> */}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* <div className="">
                            <Slider {...settings}>
                                {CountryList.slice(0, 6).map((country, cnt) => (
                                    <div className="xb-country2" key={cnt}>
                                        <div className="xb-item--inner text-center">
                                            <div className="xb-item--flag mb-20">
                                                <Image src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountrySection;