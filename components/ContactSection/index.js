import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import shape from '/public/images/icon/n_pad.svg'
import Image from 'next/image'


const ContactSection = (props) => {
    return (
        <section className="contact contact-pts gray-bg" id="Contact">
            <div className="container pb-110 pt-140">
                <div className="xb-contact pos-rel">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="xb-item--inner">
                                <div className="xb-item--holder mb-25">
                                    <span><Image src={shape} alt=""/>Contact Us</span>
                                    <h3>Do you have questions or went more <br/> information?</h3>
                                </div>
                                 <ContactForm/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="google-map">
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.596250295903!2d-8.582046013070984!3d41.3176461973307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245dd47340f847%3A0xf66bde840789f6cb!2sR.%20de%20Lantemil%20127%20r%2C%204785-633%20Trofa%2C%20Portugal!5e0!3m2!1sen!2sin!4v1732941078881!5m2!1sen!2sin"></iframe>
                    </div> */}
                </div>
            </div>
            <div className='container pb-110'>
                <div className="google-map rounded-4 overflow-hidden" style={{height:"500px"}}>
                        <iframe className="w-100 h-100" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.596250295903!2d-8.582046013070984!3d41.3176461973307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245dd47340f847%3A0xf66bde840789f6cb!2sR.%20de%20Lantemil%20127%20r%2C%204785-633%20Trofa%2C%20Portugal!5e0!3m2!1sen!2sin!4v1732941078881!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;