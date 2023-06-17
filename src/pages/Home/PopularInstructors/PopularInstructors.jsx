import { useQuery } from '@tanstack/react-query';
import PopularInsCard from './PopularInsCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors/popular');
        return res.data;
    });
    
    return (
        <section>
            <h3 className='text-center text-3xl'>Popular Instructors</h3>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 bg-base-200'>
                <div className='mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3'>
                    {
                        instructors.map(people => <PopularInsCard 
                            key={people._id} 
                            people={people} 
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;