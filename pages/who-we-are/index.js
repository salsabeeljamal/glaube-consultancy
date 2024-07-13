import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/student-visa-components/CtaSection/CtaSection';
import StudentFunFact from '../../components/student-visa-components/StudentFunFact/StudentFunFact';
import Teams from '../../api/team'
import About from '../../components/student-visa-components/about/about';
import PartnerSection from '../../components/PartnerSection';
import ContactSection from '../../components/ContactSection';
import aboutImg from '/public/images/about/about_img3.jpg'
import aboutImg2 from '/public/images/bg/mission.jpg'
import aboutImg3 from '/public/images/bg/vission.jpg'
import professionalism from '/public/images/images/professionalism.jpg'
import commitment from '/public/images/images/commitment.jpg'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import CoreValue from '../../components/coreValue/CoreValue';
import Image from 'next/image';



const WhoWeAre = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Who We Are'} pagesub={'Who We Are'} />
            <About />
            <section className="about pt-190">
                {/* <div className="container">
                    <div className="row mb-40 align-items-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-20">
                                <h2 className="wow skewIn">What We Do
                                </h2>
                            </div>
                        </div>
                        <p>With extensive experience in academics, management strategy, marketing communications, career guidance, and international documentation, we have successfully placed over 2,000 students in prestigious universities worldwide. Our expertise has helped students achieve their dreams of studying and working in countries such as Portugal, Spain, Lithuania, Ukraine, and more.</p>

                    </div>
                    <div className="xb-about__img">
                        <Image src={aboutImg} alt="" />
                    </div>
                </div> */}
                    <CtaSection />
                    <StudentFunFact />
            </section>
            <section className="mission pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse mt-none-30">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img text-lg-end">
                                <div className="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                                    <Image src={professionalism} alt="" style={{width:"460px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn">Powered by<br /> <span>Professionalism</span></h2>
                                    <p>Glaube, led by experienced professionals, excels in admissions, career guidance, aptitude appraisals, documentation for international admissions, education loan facilitation, and arrival support. We ensure total reliability in identifying the right course and location, considering all academic and personal aspects of the student.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img">
                                <div className="inner-img d-inline-block wow skewIn">
                                    <Image src={commitment} alt="" style={{width:"460px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">The Power of<br /> <span>Commitment</span></h2>
                                    <p>We understand your desire to study at the best institutions, and our multilingual consultants, many with industry-recognized training, are here to help. As trusted partners of many international universities, our professional team in India and abroad coordinates with university authorities to ensure a smooth transition for students pursuing higher education. We ensure a transparent admission process, safeguarding students' interests at all locations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CoreValue/>
            {/* <section className="team pt-120 pb-130 bg_img" style={{ backgroundImage: `url(${'/images/bg/team_bg.jpg'})` }}>
                <div className="container">
                    <div className="sec-title text-center mb-65">
                        <h2 className="mb-40 wow skewIn">Our trusted immigration <br/> <span> support team</span></h2>
                        <p>At the heart of our commitment to providing exceptional <br/> immigration solutions stands</p>
                    </div>
                    <div className="row mt-none-30">
                        {Teams.slice(0, 8).map((team, tm) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={tm}>
                                <div className="xb-team text-center">
                                    <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                                        <div className="xb-item--img">
                                            <Image src={team.tImg} alt="" />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                            <span className="xb-item--designation">{team.title}</span>
                                        </div>
                                        <ul className="xb-item--social list-unstyled">
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            {/* <PartnerSection /> */}
            {/* <NewsLatter /> */}
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default WhoWeAre;
