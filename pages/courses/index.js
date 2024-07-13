import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ItCourses from '../../components/courses/Its';
import EngCourses from '../../components/courses/Eng';
import DesignCourses from '../../components/courses/Design';
import BusinessCourses from '../../components/courses/Business';
import BachlorsCourses from '../../components/courses/Bachelor';
import SportsCourses from '../../components/courses/Sport';
import TourismCourses from '../../components/courses/Tourism';
import SafetyCourses from '../../components/courses/Safety';
import PhysioCourses from '../../components/courses/Physio';


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
                    <SportsCourses/>
                    <TourismCourses/>
                    <SafetyCourses/>
                    <PhysioCourses/>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CoursesPage;
