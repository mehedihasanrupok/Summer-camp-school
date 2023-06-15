import { TiEdit } from "react-icons/ti";

const MyDataRow = ({ item, index, setSingleClassData }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="block relative">
                            <img alt="profile" src={item?.image} className="mx-auto object-cover rounded h-10 w-16 " />
                        </div>
                    </div>
                    <div className="ml-5">
                        <p className="text-gray-900 whitespace-no-wrap">{item?.className}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item?.instructorName}</p>
                <p className="text-gray-900 whitespace-no-wrap">{item?.instructorEmail}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{item?.availableSeats}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">${item?.price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item?.status}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{item?.enrollCount || 0}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {
                    item?.status !== 'pending' && item?.status !== 'approved' ? 
                        <p className="text-gray-900 whitespace-no-wrap">{item?.feedback}</p> : null
                }
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <label htmlFor="my-modal-1" onClick={() => setSingleClassData(item)} className="btn bg-indigo-600 hover:bg-indigo-400">
                    <TiEdit color="white" size={20} />
                </label>
            </td>
        </tr>
    );
};

export default MyDataRow;