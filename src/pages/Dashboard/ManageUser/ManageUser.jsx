import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { makeAdmin, makeInstructor } from "../../../Api/auth";
import UserDataRow from "./UserDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const handleMakeAdmin = user => {
        makeAdmin(user)
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Admin Now!`);
                }
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    const handleMakeInstructor = user => {
        makeInstructor(user)
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Instructor Now!`);
                }
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Root Academy | Manage Users</title>
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
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-center text-sm uppercase font-semibold">
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <UserDataRow 
                                            key={user._id}
                                            user={user}
                                            index={index} 
                                            handleMakeAdmin={handleMakeAdmin}
                                            handleMakeInstructor={handleMakeInstructor}
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

export default ManageUser;