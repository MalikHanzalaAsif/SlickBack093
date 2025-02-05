import React from 'react';
import "../styles/Thank.css";

const Thank = () => {
    return (
        <div id="thank" className='h-screen flex flex-col items-center justify-center'>
            <video autoPlay loop muted preload="auto" className="loader-animation h-80">
                <source src="/order-placed.webm" type="video/webm" alt="order placed"/>
                Loading...
            </video>
            <h1 className='text-4xl p-3 rounded-lg text-white mb-8' id='thankHeading'>Your Order Has been Placed!</h1>
            <p className='text-xl max-w-[70%] text-center font-semibold' >Thank you for your Purchase! Your order is on its way. If you have any queries feel free to reach us! Check your email for more details.</p>
        </div>
    )
}

export default Thank;