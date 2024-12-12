import React from 'react';
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'
import FeaturesSection from '../../components/student-visa-components/FeaturesSection/FeaturesSection'

const Hero = () => {

    const ClickHandler = (e) => {
        e.preventDefault()
        let id = "Contact"
        const targetElement = document.getElementById(id);
        if(targetElement !== null && targetElement !== undefined){
            let targetPosition
            if(window.scrollY < 80){
                const headerElement = document.getElementById('Header');
                const height = headerElement.clientHeight;
                targetPosition = targetElement.offsetTop - height;
            }else{
                targetPosition = targetElement.offsetTop;
            }
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              })
        }else{
        }
    }

    return (
        <section className="" id="Home">
            <div className='hero hero__style-one_ bg_img hero_imgs hero__background'>
            <div className='w-100 h-100'>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-7 hero__main">
                        <div className="hero__content">
                            <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                <h1 style={{color:'#eeba00'}}>Student visa <br /> <span>Consulting</span></h1>
                            </Slide>
                            <Slide direction='up' triggerOnce={'false'} duration={1400}>
                                <p>Expert Guidance for a
                                    Seamless Immigration Journey</p>
                            </Slide>
                            <ul className="xb-list list-unstyled mt-40 mb-30">
                                <Slide direction='up' triggerOnce={'false'} duration={1600}>
                                    <li><i className="far fa-check"></i>Expert Legal Support</li>
                                    <li><i className="far fa-check"></i>Meeting Your Unique Needs</li>
                                    <li><i className="far fa-check"></i>Tailored Immigration Solutions</li>
                                </Slide>
                            </ul>
                            <Slide direction='up' triggerOnce={'false'} duration={1800}>
                                <div>
                                    <div className="btns">
                                        <a onClick={ClickHandler} className="thm-btn" href="/">Book Appointment</a>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className='bg_img hero_img position-absolute top-0'>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <FeaturesSection />
        </section>
    )
}

export default Hero;