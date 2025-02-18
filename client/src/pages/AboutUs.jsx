import React from 'react';
import "../styles/AboutUs.css";

const AboutUs = () => {
    return (
        <section id='aboutUs' className='pt-8'>
            <h1 className='text-7xl text-center my-8 font-semibold'>About</h1>
            <div className="aboutUsMainContent flex justify-center items-center">
                <div className="aboutUsPara1 m-4" data-aos="fade-right">
                    <h2 className='aboutRedBgHeading text-5xl mb-4 text-white w-fit p-2 rounded-md'>Who We Are</h2>
                    <p className='text-lg'>At SlickBack, we believe fashion is more than just clothing—it’s an attitude. Our mission is to bring you stylish, high-quality apparel that blends comfort with confidence. Whether you’re dressing for the streets or the spotlight, we’ve got the perfect fit for you. With fast shipping and seamless shopping, we make fashion effortless. <b>Stay sharp, stay sleek—welcome to SlickBack!</b></p>
                </div>
                <img src="/img/about-us-img-removebg.png" alt="about us" data-aos="fade-left"/>
            </div>
            <div className='flex flex-col justify-center items-center py-16' data-aos="fade-up">
                <h2 className='aboutRedBgHeading text-5xl mb-4 text-white w-fit p-2 rounded-md'>Our Products Quality</h2>
                <p className='text-lg max-w-[80%] text-center'>At SlickBack093, we pride ourselves on delivering premium-quality merchandise designed to last. Every product is crafted with the finest materials, ensuring durability, comfort, and timeless style. Rigorously tested to meet the highest standards, our collection offers an unmatched experience you can trust. Elevate your everyday with quality that speaks for itself – shop now and feel the difference!
                </p>
            </div>
        </section>
    )
}

export default AboutUs;