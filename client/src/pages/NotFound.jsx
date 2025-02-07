import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="NotFound" className='h-screen mt-44 sm:ml-28 md:ml-48 lg:ml-80'>
            <div id='NotFoundBox'>
                <iframe src="https://lottie.host/embed/c2c14412-d907-431a-8790-5d7a72c14cb4/rdMlqWGeOV.lottie"></iframe>
                <h1 className='text-6xl font-semibold text-orange-800 ml-8'>Page not Found!</h1>
                <Link to={"/"}>
                    <button className='bg-orange-400 text-orange-800 p-2 mt-8 ml-10 border-2 border-orange-800 rounded-lg hover:bg-orange-800 hover:text-orange-400 transition-colors shadow-md duration-300'>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound