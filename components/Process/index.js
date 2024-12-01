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
        title: 'Document Collection',
        icon: fIcon2,
        icon2: fhIcon2,
        des: 'We’ll collect all required documents, including academic records, IDs, and financial statements.',
    },
    {
        title: 'University Selection',
        icon: fIcon1,
        icon2: fhIcon1,
        des: 'Our experts will help you choose the best university based on your academic background, interests, and career goals.',
    },
    {
        title: 'Document Preparation',
        icon: fIcon3,
        icon2: fhIcon3,
        des: 'Prepare and courier your complete application package, including SOP, LORs, transcripts, and supporting documents, to the selected universities.',
    },
    {
        title: 'Submit Your Visa Application',
        icon: fIcon5,
        icon2: fhIcon5,
        des: 'We’ll guide you through the visa application, ensuring all documents meet requirements and are submitted on time.',
    },
    {
        title: 'Final Checklist and Confirmation',
        icon: fIcon6,
        icon2: fhIcon6,
        des: 'Final checks: Double-check documents, confirm flights, and review contact details',
    },
    {
        title: 'Get Ready to Move!',
        icon: fIcon4,
        icon2: fhIcon4,
        des: 'With everything in place, it’s time to pack your bags and get excited for your new journey abroad!',
    },
]


const Process = (props) => {

    return (

        <section className="feature pos-rel gray-bg-2 pt-120 pb-120" id="Process">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60 z-index-2">
                    <span className="sec-title--sub"><Image src={aIcon1} alt="" />Guiding You Every Step<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading mb-30">Our Efficient,<br />Transparent Process</h3>
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

export default Process;