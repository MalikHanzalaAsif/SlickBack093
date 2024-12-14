import React from 'react';
import "../styles/AboutUs.css";

const AboutUs = () => {
    return (
        <section id='aboutUs' className='pt-8'>
            <h1 className='text-7xl text-center my-8 font-semibold'>About</h1>
            <div className="aboutUsMainContent flex justify-center items-center">
                <div className="aboutUsPara1 m-4">
                    <h2 className='text-5xl mb-4 bg-red-700 text-white w-fit p-2'>Who We Are</h2>
                    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo molestias cumque cum possimus atque optio dolore laboriosam voluptatibus cupiditate enim quisquam laborum aliquid aspernatur nisi dolorum ullam harum, provident asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vel ea possimus reprehenderit aperiam id illo a optio modi adipisci quibusdam similique eveniet repellendus necessitatibus quidem, atque aut, nihil nobis.</p>
                </div>
                <img src="/img/about-us-img-removebg.png" alt="about us" />
            </div>
            <div className='flex flex-col justify-center items-center py-16'>
                <h2 className='text-5xl mb-4 bg-red-700 text-white w-fit p-2'>Our Products Quality</h2>
                <p className='text-lg max-w-[80%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque sapiente, culpa explicabo odit ex fugit iusto laudantium animi quis molestias cupiditate enim tempore, iure ab fugiat amet voluptatibus libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium suscipit neque provident aperiam animi autem ducimus mollitia atque ut, quibusdam possimus similique inventore architecto quaerat quos sequi? Deleniti, nihil.</p>
            </div>
        </section>
    )
}

export default AboutUs;