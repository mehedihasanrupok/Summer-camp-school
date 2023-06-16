import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import InstructorCard from './InstructorCard';
import banner from '../../../public/banner/istockphoto-1355687112-170667a.jpg';


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    // const { scrollYProgress } = useScroll();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors');
        return res.data;
    });
    return (
        <>
            <Helmet>
                <title>Root Academy | Instructors</title>
            </Helmet>
            <div>
                <img src={banner} className='w-full h-44' alt="" />
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    instructors.map(instructor => <InstructorCard 
                        key={instructor._id} 
                        instructor={instructor} 
                    />)
                }
            </div>
        </>
    );
};

export default Instructors;