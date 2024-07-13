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
import shape from '/public/images/shape/cs_01.png'
import shape2 from '/public/images/shape/cs_02.png'
import shape3 from '/public/images/shape/cs_03.png'
import shape4 from '/public/images/shape/cs_04.png'
import cimg3 from '/public/images/country/img_03.png'
import Image from 'next/image';


const ContactPage = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Contact'} pagesub={'Contact'} />
            <section className="contact pb-110 gray-bg">
            </section>
            {/* <NewsLatter /> */}
            <ContactSection />
            <StudentFaqSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;
