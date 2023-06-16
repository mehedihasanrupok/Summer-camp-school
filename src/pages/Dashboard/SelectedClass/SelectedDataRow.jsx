import { FaTrashAlt } from "react-icons/fa";

const SelectedDataRow = ({ item, index, handleDelete }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div>
                    <img alt="profile" src={item?.image} className="object-cover rounded h-10 w-16" />
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item?.className}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item?.instructorEmail}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">${item?.price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={() => handleDelete(item)} className="btn btn-error bg-red-600">
                    <FaTrashAlt color="white" size={20} />
                </button>
            </td>
        </tr>
    );
};

export default SelectedDataRow;