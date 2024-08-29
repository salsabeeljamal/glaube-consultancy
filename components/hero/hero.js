import React from 'react';
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero hero__style-one_ bg_img hero_img">
            <div className='w-100 h-100 hero__background'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 hero__main">
                        <div className="hero__content">
                            <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                <h1 style={{color:'#eeba00'}}>Student visa <br /> <span style={{color:'white'}}>Consulting</span></h1>
                            </Slide>
                            <Slide direction='up' triggerOnce={'false'} duration={1400}>
                                <p style={{color:'white'}}>Expert Guidance for a
                                    Seamless Immigration Journey</p>
                            </Slide>
                            <ul className="xb-list list-unstyled mt-40 mb-60">
                                <Slide direction='up' triggerOnce={'false'} duration={1600}>
                                    <li><i className="far fa-check"></i>Expert Legal Support</li>
                                    <li><i className="far fa-check"></i>Meeting Your Unique Needs</li>
                                    <li><i className="far fa-check"></i>Tailored Immigration Solutions</li>
                                </Slide>
                            </ul>
                            <Slide direction='up' triggerOnce={'false'} duration={1800}>
                                <div>
                                    <div className="btns">
                                        <Link onClick={ClickHandler} className="thm-btn" href="/contact">Book Appointment</Link>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero;