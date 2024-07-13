import Image from 'next/image';
import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import aIcon1 from '/public/images/shape/c_shape1.png'
import aIcon2 from '/public/images/shape/c_shape2.png'


const FunFact = [
    {
        title: '2000',
        subTitle: 'Students',
        symbol: '+',
    },
    {
        title: '15',
        subTitle: 'Countries',
        symbol: '+',
    },
    {
        title: '5',
        subTitle: 'Years',
        symbol: '+',
    }

]


const StudentFunFact = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className="fanfact pos-rel">
            <div className="container">
                <div className="row g-0">
                    {FunFact.map((funfact, fitem) => (
                        <div className="col-lg-4 col-md-4" key={fitem}>
                            <div className="xb-fanfact xb-fanfact1">
                                <div className="xb-item--inner">
                                    <h2 className="xb-item--number"><span className="xbo" data-count="30"><CountUp end={funfact.title} enableScrollSpy /></span><span className="suffix">{funfact.symbol}</span></h2>
                                    <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                    <h5 className="xb-item--title">{funfact.subTitle}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default StudentFunFact;