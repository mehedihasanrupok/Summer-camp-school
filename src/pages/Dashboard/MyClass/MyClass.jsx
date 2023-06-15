import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import MyDataRow from './MyDataRow';
import UpdateModal from './UpdateModal';
import toast from 'react-hot-toast';

const MyClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [singleClassData, setSingleClassData] = useState({});

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes?email=${user?.email}`);
        return res.data;
    });

    const handleUpdate = (item, updatedInfo) => {
        axiosSecure.patch(`/classes/${item._id}`, updatedInfo)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch();
                    toast.success(`${item.className} class info updated!`);
                }
            });
    };

    return (
        <>
            <Helmet>
                <title>Sportify | My Classes</title>
            </Helmet>
            <h3 className='text-center font-semibold text-3xl'>My Classes</h3>
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
                                            Class Information
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Instructor Info
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Seats
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Price
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Status
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Students
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-center text-sm uppercase font-semibold">
                                            Feedback
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-center text-sm uppercase font-semibold">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        classes.map((item, index) => <MyDataRow 
                                            key={item._id}
                                            item={item}
                                            index={index} 
                                            setSingleClassData={setSingleClassData}
                                        />)
                                    }
                                </tbody>
                            </table>
                            <UpdateModal 
                                singleClassData={singleClassData} 
                                handleUpdate={handleUpdate} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyClass;