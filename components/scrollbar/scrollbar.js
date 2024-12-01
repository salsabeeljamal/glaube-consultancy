import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import whatsapp from '/public/images/icon/whatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                <Link target='#blank' href="https://wa.me/351912852568"><li><Image src={whatsapp} alt="" /></li></Link>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
