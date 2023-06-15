import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ClassDataRow from './ClassDataRow';
import FeedbackModal from './FeedbackModal';
import toast from 'react-hot-toast';

const ManageClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const [singleClassData, setSingleClassData] = useState({});

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    });

    const handleApproved = classData => {
        const document = { status: 'approved' };

        axiosSecure.patch(`/classes/approved/${classData._id}`, document)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch();
                    toast.success(`${classData.className} class is approved!`);
                }
            });
    };

    const handleDenied = classData => {
        const document = { status: 'denied' };

        axiosSecure.patch(`/classes/denied/${classData._id}`, document)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch();
                    toast.success(`${classData.className} class is denied!`);
                }
            });
    };

    const handleFeedback = (classData, feedback) => {
        const document = { feedback: feedback };

        axiosSecure.patch(`/classes/feedback/${classData._id}`, document)
            .then(data => {
                if (data.data.modifiedCount) {
                    toast.success(`Feedback given to ${classData.instructorName}!`);
                }
            });
    };

    return (
        <>
        <Helmet>
            <title>Root Academy | Manage Classes</title>
        </Helmet>
        <div className="mx-auto px-4 sm:px-8">
            <div className="py-8">
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
                                        Class Image
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
                                        Available Seats
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                    text-left text-sm uppercase font-semibold">
                                        Price
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                    text-center text-sm uppercase font-semibold">
                                        Status
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                    text-center text-sm uppercase font-semibold">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map((classData, index) => <ClassDataRow 
                                        key={classData._id}
                                        classData={classData}
                                        index={index} 
                                        handleApproved={handleApproved}
                                        handleDenied={handleDenied}
                                        setSingleClassData={setSingleClassData}
                                    />)
                                }
                            </tbody>
                        </table>
                        <FeedbackModal 
                            singleClassData={singleClassData}
                            handleFeedback={handleFeedback}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ManageClass;