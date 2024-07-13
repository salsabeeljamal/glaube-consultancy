import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import rating from '/public/images/icon/h_star.png'
import ContactForm from '../../components/student-visa-components/StudentContactSection/ContactForm'
import Footer from '../../components/footer/Footer';
import StudentFaqSection from '../../components/student-visa-components/StudentFaqSection/StudentFaqSection';
import cimg1 from '/public/images/country/img_01.png'
import cimg2 from '/public/images/country/img_02.png'
import ItCourses from '../../components/courses/Its';
import EngCourses from '../../components/courses/Eng';
import DesignCourses from '../../components/courses/Design';
import BusinessCourses from '../../components/courses/Business';
import BachlorsCourses from '../../components/courses/Bachelor';
import shape from '/public/images/shape/cs_01.png'
import shape2 from '/public/images/shape/cs_02.png'
import shape3 from '/public/images/shape/cs_03.png'
import shape4 from '/public/images/shape/cs_04.png'
import cimg3 from '/public/images/country/img_03.png'
import Image from 'next/image';


const CoursesPage = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Courses'} pagesub={'Courses'} />
            <section className="team pt-90 pb-130 bg_img" style={{ backgroundImage: `url(${'/images/bg/team_bg.jpg'})` }}>
                <div className="container">
                <div className="sec-title sec-title--travel text-center mb-55">
                    {/* <span className="subtitle">Popular Package</span> */}
                    <h2 className='mb-20'>Masters & Post Graduates</h2>
                    <h3 >Tuition Starting from INR 3 Lakhs</h3>
                </div>
                    <ItCourses/>
                    <EngCourses/>
                    <DesignCourses/>
                    <BusinessCourses/>
                    <BachlorsCourses/>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CoursesPage;
