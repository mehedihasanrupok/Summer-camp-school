import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { ImSpinner10 } from 'react-icons/im';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        setLoading(true);
        
        fetch('https://api.imgbb.com/1/upload?key=75b285dffdcb7022c2a8a42ec594a8a0', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, email, classesName, seats, price } = data;
                    const classData = { 
                        className: classesName, 
                        image:imgURL, 
                        instructorName: name, 
                        instructorEmail: email, 
                        availableSeats: parseInt(seats),
                        price: parseFloat(price),
                        status: 'pending'
                    };
                    
                    axiosSecure.post('/classes', classData)
                        .then(data => {
                            if (data.data.insertedId) {
                                toast.success(`${classData.className} Class Added!`);
                                setLoading(false);
                                navigate('/dashboard/my-class');
                                reset();
                            }
                        });
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Root Academy | Add Class</title>
            </Helmet>
            <div className="w-full md:px-40 min-h-[calc(100vh-40px)] flex justify-center items-center text-gray-800 rounded-xl bg-gray-50">
                <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4 md:p-0'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-gray-600">
                                Instructor Name
                            </label>
                            <input className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 
                            rounded-md" {...register("name", { required: true })} name="name" id="name" type="text" defaultValue={user.displayName} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600">
                                Instructor Email
                            </label>
                            <input className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 
                            rounded-md" {...register("email", { required: true })} name="email" id="email" type="email" defaultValue={user.email} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="classesName" className="block text-gray-600">
                                Class Name*
                            </label>
                            <input className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 
                            rounded-md" {...register("classesName", { required: true, maxLength: 120 })} name="classesName" id="classesName" type="text" placeholder="Enter Class Name" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="image" className="block text-gray-600">
                                Upload File
                            </label>
                            <input className="w-full file:mr-4 file:py-3 file:px-4 hover:file:cursor-pointer file:uppercase file:font-semibold file:border-0 file:bg-indigo-500 file:text-white text-gray-800 border 
                            border-indigo-300 rounded-md" {...register("image", { required: true })} name="image" id="image" type="file" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="seats" className="block text-gray-600">
                                Available Seats*
                            </label>
                            <input className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md" {...register("seats", { required: true })} name="seats" id="seats" type="number" placeholder="Available Seats" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="price" className="block text-gray-600">
                                Price*
                            </label>
                            <input className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md" {...register("price", { required: true })} name="price" id="price" type="number" placeholder="Price" />
                        </div>
                    </div>
                    <button type="submit" className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-indigo-500" >
                        {loading ? <ImSpinner10 className="m-auto animate-spin" size={24} /> : "Save & Continue"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;