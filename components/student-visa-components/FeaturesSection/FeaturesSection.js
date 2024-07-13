import React from 'react'
import fIcon1 from '/public/images/icon/f_01.svg'
import fIcon2 from '/public/images/icon/f_02.svg'
import fIcon3 from '/public/images/icon/f_03.svg'
import fIcon4 from '/public/images/icon/f_04.svg'
import Image from 'next/image'


const Features = [
    {
        title: 'Flexible Study Options',
        icon: fIcon1,
    },
    {
        title: 'Hassle-Free Application Process',
        icon: fIcon2,
    },
    {
        title: 'Expert Guidance and Support',
        icon: fIcon3,
    },
    {
        title: 'Reasonable Cost',
        icon: fIcon4,
    },

]


const FeaturesSection = (props) => {

    return (

        <section className="feature border-bottom border-top" >
            <div className="container">
                <div className="xb-feature xb-feature1 ul_li_between">
                    {Features.map((features, fitem) => (
                        <div className="xb-item--inner ul_li" key={fitem}>
                            <div className="xb-item--icon">
                                <Image src={features.icon} alt="" />
                            </div>
                            <h3 className="xb-item--title">{features.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default FeaturesSection;