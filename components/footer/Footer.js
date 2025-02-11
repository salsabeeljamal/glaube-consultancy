import React from 'react'
import Link from 'next/link'
import icon1 from '/public/images/icon/f_call.svg'
import icon2 from '/public/images/icon/f_mail.svg'
import icon3 from '/public/images/icon/card_img.png'
import logo from '/public/images/logo/reverselogo.svg'
import Services from '../../api/service'
import CountryList from '../../api/country'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="site-footer black-bg pt-65">
            <div className="container">
                <div className="row mt-none-30 pb-60 d-flex justify-content-center justify-content-lg-between">


                    <div className="col-lg-4 mt-30 col-md-6 d-flex align-items-center">
                        <div className="footer-style-three content">
                            <Image src={logo} alt="" />
                            <p className='fw-light mt-20'>
                            Rua Costa Ferreira Edifício,<br />Casa Avó-nº326 1 Escritório 5 São Martinho <br />4785 - 298 Trofa,porto Portugal    
                            </p>
                            <div className=''>
                                <ul className="d-flex mt-15">
                                    <li className="ul_li d-inline-block text-nowrap"><span><Image className='mr-10' src={icon1} alt="" /></span>+351 590 088 55
                                    </li>
                                    <li className="ul_li d-inline-block text-nowrap"><span><Image className='mr-10 ml-20' src={icon2} alt="" /></span>info@glaubes.eu
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 mt-60 col-md-12 sfooter__custom-col d-flex d-md-inline-flex d-lg-flex justify-content-lg-end justify-content-center">
                        <div className="footer__widget d-flex flex-column d-lg-block align-items-center">
                            <h3 className="widget-title sd-lg-block">Explore Link</h3>
                            <ul className="d-grid d-lg-block  footer__links list-unstyled text-nowrap" style={{gridTemplateColumns:"1fr 1fr",gridGap:"0 40px"}}>
                                <li className=''><Link onClick={ClickHandler} href="/who-we-are"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>About Us</Link></li>
                                <li className=''><Link onClick={ClickHandler} href="/contact"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Contact</Link></li>
                                <li className=''><Link onClick={ClickHandler} href="/terms"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Terms & Conditions</Link></li>
                                <li className=''><Link onClick={ClickHandler} href="/privacy"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Privacy Policy</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-4 mt-60 col-md-12 footer__social-block">
                        <div className="footer__widget">
                            <h3 className="widget-title d-lg-block flex-column text-center text-lg-start">Social Links</h3>
                        </div>
                        <div className="footer-links">
                            <ul className="footer__socials  ul_li_right mt-30 justify-content-center">
                                <li className='mr-40'><Link onClick={ClickHandler} href="/"><i className="fab fa-twitter"></i></Link></li>
                                <li className='mr-40'><Link onClick={ClickHandler} href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className='mr-40'><Link onClick={ClickHandler} href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li className=''><Link onClick={ClickHandler} href="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Services</h3>
                            <ul className="footer__links list-unstyled">
                                {Services.slice(0, 6).map((service, srv) => (
                                    <li key={srv}>
                                        {service.title ?
                                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                                viewBox="0 0 13 13" fill="none">
                                                <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                    fill="#B1B4BA" />
                                            </svg></span>{service.title}</Link>
                                            : ''}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Our branches</h3>
                            <ul className="footer__links list-unstyled">
                                {CountryList.slice(0, 5).map((country, cnt) => (
                                    <li key={cnt}><Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`}><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                        viewBox="0 0 13 13" fill="none">
                                        <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                            fill="#B1B4BA" />
                                    </svg></span>{country.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div> */}


                </div>
                <div className="footer__copyright ul_li_between justify-content-center justify-content-lg-between">
                    <div className="footer__copyright-text mt-15">
                        Copyright © 2024 Glaube Consultancy All rights reserved.
                    </div>
                    <div className="footer__copyright-img mt-20">
                        <Image src={icon3} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;