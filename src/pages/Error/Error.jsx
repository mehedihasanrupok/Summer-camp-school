import React from 'react';
import img from '../../../public/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='items-center'>
            <div>
                <img className='w-9/12 h-min' src={img} alt="" />
            </div>
            <div className='align-middle items-center w-20 mx-auto'>
                <button className='text-black text-3xl rounded-md m-3 p-3 bg-red-400'><Link to='/'>Back</Link></button>
            </div>
        </div>
    );
};

export default Error;