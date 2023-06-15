import { FaBan } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { RiFeedbackLine } from "react-icons/ri";

const ClassDataRow = ({ classData, index, handleApproved, handleDenied, setSingleClassData }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div>
                    <img alt="profile" src={classData?.image} className="object-cover rounded h-10 w-16" />
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.className}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.instructorName}</p>
                <p className="text-gray-900 whitespace-no-wrap">{classData?.instructorEmail}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.availableSeats}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">${classData?.price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.status}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex gap-2">
                    <button onClick={() => handleApproved(classData)} className="btn bg-green-900 hover:bg-green-300" 
                    disabled={classData?.status !== 'pending'}>
                        <GoVerified color="white" size={20} />
                    </button>
                    <button onClick={() => handleDenied(classData)} className="btn btn-error bg-red-600" disabled={classData?.status !== 'pending'}>
                        <FaBan color="white" size={20} />
                    </button>
                    <label htmlFor="my-modal-3" onClick={() => setSingleClassData(classData)} className="btn bg-indigo-600 hover:bg-indigo-400">
                        <RiFeedbackLine color="white" size={20} />
                    </label>
                </div>
            </td>
        </tr>
    );
};

export default ClassDataRow;