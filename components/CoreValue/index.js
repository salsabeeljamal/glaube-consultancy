import React from 'react'
import fIcon1 from '/public/images/icon/fr_01.svg'
import fIcon2 from '/public/images/icon/fr_02.svg'
import fIcon3 from '/public/images/icon/fr_03.svg'
import fIcon4 from '/public/images/icon/fr_04.svg'
import fIcon5 from '/public/images/icon/fr_05.svg'
import fIcon6 from '/public/images/icon/fr_06.svg'

import fhIcon1 from '/public/images/icon/fr_01_h.svg'
import fhIcon2 from '/public/images/icon/fr_02_h.svg'
import fhIcon3 from '/public/images/icon/fr_03_h.svg'
import fhIcon6 from '/public/images/icon/fr_06_h.svg'
import fhIcon4 from '/public/images/icon/fr_04_h.svg'
import fhIcon5 from '/public/images/icon/fr_05_h.svg'
import aIcon1 from '/public/images/icon/h_star.png'

import Image from 'next/image'



const Features = [
    {
        title: 'Integrity',
        icon: fIcon1,
        icon2: fhIcon1,
        des: ' Transparency in all operations, offering honest guidance to our students.',
    },
    {
        title: 'Empathy',
        icon: fIcon2,
        icon2: fhIcon2,
        des: 'Empathize with our students.Experts provides personalized support',
    },
    {
        title: 'Expertise',
        icon: fIcon3,
        icon2: fhIcon3,
        des: 'Leverage our expertise to provide top guidance and support.',
    },
    {
        title: 'Dedication',
        icon: fIcon5,
        icon2: fhIcon5,
        des: 'Ensuring our students achieve their academic goals',
    },
    {
        title: 'Passion',
        icon: fIcon4,
        icon2: fhIcon4,
        des: 'passionate about helping students achieve their dreams of studying abroad',
    },
    {
        title: 'Quality',
        icon: fIcon6,
        icon2: fhIcon6,
        des: 'Delivering exceptional guidance to students pursuing academic success.',
    },
]


const CoreValue = (props) => {

    return (

        <section className="feature pos-rel gray-bg-2 pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60 z-index-2">
                    <span className="sec-title--sub"><Image src={aIcon1} alt="" />Our Core Values<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading mb-30">We practice<br /> what we preach</h3>
                </div>
            </div>
            <div className="xb-feature2__wrap">
                <div className="container">
                    <div className="row justify-content-md-center g-0">
                        {Features.map((features, fitem) => (
                            <div className="col-lg-4 col-md-6" key={fitem}>
                                <div className="xb-feature xb-feature2 text-center">
                                    <div className="xb-item--line"></div>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--icon">
                                            <span className="default"><Image src={features.icon} alt="" /></span>
                                            <span className="hover"><Image src={features.icon2} alt="" /></span>
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">{features.title}</h3>
                                            <div className="xb-item--content">
                                                {features.des}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-feature-right-line"></div>
                </div>
            </div>
        </section>
    )
}

export default CoreValue;