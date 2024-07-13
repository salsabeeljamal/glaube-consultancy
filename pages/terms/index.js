import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const TermsConditionsPage = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Terms and Conditions'} pagesub={'Terms and Conditions'} />
            <section className="breadcrumb terms-conditions pb-110 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 sec-title mission__content">
                            <h2 className='mb-20'>Terms and Conditions</h2>
                            <p>Welcome to Glaube Consultancy . These terms and conditions outline the rules and regulations for the use of our website.</p>
                            <h3 className='mt-10 mb-10'>Introduction</h3>
                            <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Glaube Consultancy ' website if you do not accept all of the terms and conditions stated on this page.</p>
                            <h3 className='mt-10 mb-10'>Cookies</h3>
                            <p>We employ the use of cookies. By using Glaube Consultancy ' website, you consent to the use of cookies in accordance with Gene Minds’ privacy policy.</p>
                            <h3 className='mt-10 mb-10'>License</h3>
                            <p>Unless otherwise stated, Glaube Consultancy  and/or its licensors own the intellectual property rights for all material on Glaube Consultancy . All intellectual property rights are reserved. You may view and/or print pages from http://www.geneminds.com for your own personal use subject to restrictions set in these terms and conditions.</p>
                            <h3 className='mt-10 mb-10'>Restrictions</h3>
                            <p>You are specifically restricted from all of the following:</p>
                            <ul className='ml-60'>
                                <li>Publishing any website material in any other media</li>
                                <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
                                <li>Publicly performing and/or showing any website material</li>
                                <li>Using this website in any way that is or may be damaging to this website</li>
                                <li>Using this website in any way that impacts user access to this website</li>
                                <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
                                <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website</li>
                                <li>Using this website to engage in any advertising or marketing</li>
                            </ul>
                            <p >Certain areas of this website are restricted from being accessed by you and Glaube Consultancy  may further restrict access by you to any areas of this website, at any time, in absolute discretion. Any user ID and password you may have for this website are confidential and you must maintain confidentiality as well.</p>
                            <h3 className='mt-10 mb-10'>Your Content</h3>
                            <p>In these website terms and conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this website. By displaying Your Content, you grant Glaube Consultancy  a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
                            <p>Your Content must be your own and must not be infringing on any third party’s rights. Glaube Consultancy  reserves the right to remove any of Your Content from this website at any time without notice.</p>
                            <h3 className='mt-10 mb-10'>No warranties</h3>
                            <p>This website is provided “as is,” with all faults, and Glaube Consultancy  express no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.</p>
                            <h3 className='mt-10 mb-10'>Limitation of liability</h3>
                            <p>In no event shall Glaube Consultancy , nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Glaube Consultancy , including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>
                            <h3 className='mt-10 mb-10'>Indemnification</h3>
                            <p>You hereby indemnify to the fullest extent Glaube Consultancy  from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.</p>
                            <h3 className='mt-10 mb-10'>Severability</h3>
                            <p>If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
                            <h3 className='mt-10 mb-10'>Variation of Terms</h3>
                            <p>Glaube Consultancy  is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.</p>
                            <h3 className='mt-10 mb-10'>Assignment</h3>
                            <p>The Glaube Consultancy  is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these terms.</p>
                            <h3 className='mt-10 mb-10'>Entire Agreement</h3>
                            <p>These terms constitute the entire agreement between Glaube Consultancy  and you in relation to your use of this website, and supersede all prior agreements and understandings.</p>
                            <h3 className='mt-10 mb-10'>Governing Law & Jurisdiction</h3>
                            <p>These terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default TermsConditionsPage;
