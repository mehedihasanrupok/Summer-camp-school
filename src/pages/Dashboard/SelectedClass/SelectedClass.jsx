import { Link } from 'react-router-dom';
import SelectedDataRow from './SelectedDataRow';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';

const SelectedClass = () => {
    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();

    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your class has been deleted.',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1000
                            });
                        }
                    });
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Root Academy | Selected Classes</title>
            </Helmet>
            <div className="mx-auto px-4 sm:px-8">
                <div className="uppercase font-semibold h-[60px] flex justify-between items-center">
                    <h3 className="text-2xl">Total Items: {cart.length}</h3>
                    <h3 className="text-2xl">Total Price: ${total}</h3>
                    <Link to="/dashboard/payment" className={`${cart.length === 0 ? "pointer-events-none" : ""}`}>
                        <button className="btn btn-primary" disabled={cart.length === 0}>PAY</button>
                    </Link>
                </div>
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
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, index) => <SelectedDataRow 
                                            key={item._id}
                                            item={item}
                                            index={index} 
                                            handleDelete={handleDelete}
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
export default SelectedClass;
