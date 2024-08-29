import React from 'react'
import Link from 'next/link'
import pImg1 from '/public/images/images/course/sports1.jpeg'

import port from '/public/images/country/port.png'

import Image from 'next/image'




const Pakage = [
    {
        title: 'POST GRADGUATION MANAGEMENT OF SPORTS ORGANIZATION',
        country: 'Portugal',
        disc:"ATLANTICA INSTITUTE OF UNIVERSITARIO, LISBON",
        pImg: pImg1,
        flag: port,
    }

]


const SportsCourses = (props) => {

    return (
        <section className="package package-bg pos-rel pb-80">
            <div className="container">
                <div className="sec-title sec-title--travel text-center mb-40">
                    <h3 className='text-center text-lg-start'>SPORTS</h3>
                </div>
                <div className="row mt-none-30">
                    {Pakage.map((pakage, pitem) => (
                        <div className="col-lg-4 col-md-6 " key={pitem}>
                            <div className="xb-package mt-30">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <Image src={pakage.pImg} alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        <div className="xb-item--meta ul_li_between mb-15">
                                            <div className="xb-item--country ul_li">
                                                <Image src={pakage.flag} style={{width:"40px",height:"30px"}} alt="" />
                                                <span>{pakage.country}</span>
                                            </div>
                                        </div>
                                        <div className='xb-item--title card-body' style={{minHeight: "100px"}}>
                                            <h3 >{pakage.title}</h3>
                                        </div>
                                        <div className="xb-item--info" style={{minHeight: "100px"}}>
                                            <p>{pakage.disc}</p>
                                        </div>
                                        <Link href="/contact" className="xb-item--btn">Enquiry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SportsCourses;