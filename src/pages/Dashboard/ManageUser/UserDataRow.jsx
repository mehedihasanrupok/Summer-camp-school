const UserDataRow = ({ user, index, handleMakeAdmin, handleMakeInstructor }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                {
                    user.role === 'admin' ? 
                        'admin' : user.role === 'instructor' ?
                            'instructor' : <div className='flex flex-col lg:flex-row justify-center gap-3'>
                        <span onClick={() => handleMakeAdmin(user)} className="relative cursor-pointer inline-block px-3 py-2 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded"></span>
                            <span className="relative">Make Admin</span>
                        </span>
                        <span onClick={() => handleMakeInstructor(user)} className="relative cursor-pointer inline-block px-3 py-2 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded"></span>
                            <span className="relative">Make Instructor</span>
                        </span>
                    </div>
                }
            </td>
        </tr>
    );
};

export default UserDataRow;