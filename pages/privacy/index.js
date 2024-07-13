import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const PrivacyPolicyPage = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'} />
            <section className="breadcrumb privacy-policy pb-110 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 sec-title mission__content">
                            <h2 className='mb-20'>Privacy Policy</h2>
                            <p>Welcome to Glaube Consultancy  Minds. This privacy policy outlines how we handle your personal information and data.</p>

                            <h3 className='mt-10 mb-10'>Information Collection</h3>
                            <p>We collect personal information when you use our services, such as your name, email address, and other details you provide.</p>

                            <h3 className='mt-10 mb-10'>Use of Information</h3>
                            <p>We use your information to provide, improve, and personalize our services, communicate with you, and comply with legal requirements.</p>

                            <h3 className='mt-10 mb-10'>Sharing of Information</h3>
                            <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>

                            <h3 className='mt-10 mb-10'>Cookies</h3>
                            <p>We use cookies to improve your experience on our website. By using our website, you consent to our use of cookies in accordance with our cookie policy.</p>

                            <h3 className='mt-10 mb-10'>Data Security</h3>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>

                            <h3 className='mt-10 mb-10'>Your Rights</h3>
                            <p>You have the right to access, update, and delete your personal information. You can exercise these rights by contacting us at [contact information].</p>

                            <h3 className='mt-10 mb-10'>Changes to This Policy</h3>
                            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website.</p>

                            <h3 className='mt-10 mb-10'>Contact Us</h3>
                            <p>If you have any questions about this privacy policy, please contact us at [contact information].</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PrivacyPolicyPage;
