import React from 'react';
import Link from 'next/link'
import aIcon1 from '/public/images/icon/h_star.png'
import aIcon2 from '/public/images/icon/arrow_right.svg'
// import about from '/public/images/about/about_img2.png'
import about from '/public/images/images/about1.jpg'
import shape1 from '/public/images/shape/a_shape1.png'
import shape2 from '/public/images/shape/a_shape2.png'
import Image from 'next/image';


const About = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about pos-rel pt-90">
            <div className="container">
                <div className="sec-title sec-title--big style-2 mb-20">
                    <span className="sec-title--sub"><Image src={aIcon1} alt=""/>about us<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading mb-30">Glaube <br/>Study Abroad Program</h3>
                    <p>At Glaube, we believe studying abroad is vital for education.<br/>Our mission is to empower students to explore, gain skills, and succeed globally.<br/>We offer programs from language immersion to internships, providing valuable experiences and lifelong connections.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        {/* <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Our Story</h3>
                                            <div className="xb-item--description">
                                            We guide and hand-hold aspiring students to reach their dream destinations for higher studies. This include reputed world class universities across Europe and the Commonwealth. Our direct association with universities abroad guides and facilitates the career objective of the aspiring student. Offering the best and right solutions of academic career for each student based on their attitude and other parameters, Gene Minds guides to ensure future success
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Our Mission</h3>
                                            <div className="xb-item--description">
                                            To give all students the opportunity to broaden their horizons, enhance their capabilities, improve their language skills and fulfil their individual academic ambitions by following the education path that suits them best globally. All, delivered with commitment and transparency, thereby creating a brighter tomorrow for the new generation and enhancing their inherent potential.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="row align-items-center mt-none-30">
                    <div className="col-xl-3 col-lg-4 mt-30">
                        <div className="about-btn">
                            <Link onClick={ClickHandler}  className="grd-btn" href="/about">e.visa Histoy<span><Image src={aIcon2} alt="" /></span></Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 mt-30">
                        <div className="xb-about-content">
                            <p>Unlock Your Educational Journey Abroad: The Essential Student Visa GuideYour Gateway to Global Learning</p>
                            <Link onClick={ClickHandler} href="/about">Explore More Insight About us<i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mt-30">
                        <div className="xb-about-img d-flex justify-content-center">
                            <Image src={about} alt="" style={{width:"383px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <div className="shape shape--1">
                    {/* <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
                        <Image src={shape1} alt="" />
                    </div> */}
                </div>
                {/* <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <Image src={shape2} alt="" />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About;