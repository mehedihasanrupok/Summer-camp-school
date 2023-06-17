import { useQuery } from "@tanstack/react-query";
import PopularCard from "./PopularCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/popular');
        return res.data;
    });

    return (
        <section>
             <h3 className='text-center text-3xl'>Popular Classes</h3>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 bg-base-200">
                <div className='mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3'>
                    {
                        classes.map(classData => <PopularCard 
                            key={classData._id} 
                            classData={classData} 
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;