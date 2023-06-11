import React from 'react';
import img from '../../../public/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-9/12 h-min' src={img} alt="" />
                <div className='absolute top-0 left-5'>
                   <button className='text-black text-5xl rounded-md m-3 bg-slate-500'><Link to='/'>Go To Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Error;