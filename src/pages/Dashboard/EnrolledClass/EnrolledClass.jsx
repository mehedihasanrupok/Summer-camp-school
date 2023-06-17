import { Helmet } from 'react-helmet';
import useEnrollment from '../../../hooks/useEnrollment';
import EnrolledDataRow from './EnrolledDataRow';

const EnrolledClass = () => {
    const [enrolledClass] = useEnrollment();

    return (
        <>
            <Helmet>
                <title>Root Academy | Enrolled Classes</title>
            </Helmet>
            <h3 className='text-center font-semibold text-3xl'>Enrolled Classes</h3>
            <div className="mx-auto px-4 sm:px-8">
                <div className="pb-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            #
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Image
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Class Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Instructor Information
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        enrolledClass.map((item, index) => <EnrolledDataRow 
                                            key={item._id}
                                            item={item}
                                            index={index} 
                                        />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnrolledClass;