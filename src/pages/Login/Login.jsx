import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Fade } from "react-awesome-reveal";
import 'animate.css';
import img from '../../../public/cool-background.png'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner10 } from 'react-icons/im';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn,googleLog, loading } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const saveAddress = localStorage.getItem('address') || '/';
    const from = location.state?.from?.pathname || "/";
    localStorage.setItem('address', from);


    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Welcome Back!");
                navigate(from, { replace: true });
                reset();
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleLog()
            .then(result => {
                console.log(result.user);
                saveUser(result.user);
                toast.success("Welcome Back!");
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            });
    };


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse bg-[url(https://i.ibb.co/bmvDcHW/cool-background.png)]">
                    <div className="text-center md:w-1/2 lg:text-left text-yellow-300">
                        <h1 className="text-5xl font-bold animate__animated animate__bounce animate__repeat-10">Login now!</h1>
                        <Fade cascade damping={0.5}>
                            <p className='mt-5'>Log Faster...</p>
                            <p className="animate__animated animate__bounce animate__delay-2s">...Your Turn Are Coming...</p>
                            <p>...and finally you got here!</p>
                        </Fade>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                    <input type="email" {...register("email", { required: true })} name="email" id="email" placeholder="Enter Your Email Here" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" data-temp-mail-org="0" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                    <input type={show ? "text" : "password"} {...register("password", { required: true })} name="password" id="password" placeholder="*******" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" />
                                    <Link className="mt-1 flex justify-end text-sm hover:underline hover:text-indigo-500 text-gray-600" onClick={() => setShow(!show)}>
                                        {
                                            show ? <span>Hide Password</span> : <span>Show Password</span>
                                        }
                                    </Link>
                                    {errors.password && <span className="text-red-600">Password is required</span>}
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-indigo-500 w-full rounded-md py-3 text-white">
                                    {loading ? <ImSpinner10 className="m-auto animate-spin" size={24} /> : "Login"}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        </div>
                        <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 bg-indigo-100 border-gray-300 hover:border-indigo-500 border-rounded cursor-pointer">
                            <FcGoogle size={32} />
                            <p>Continue with Google</p>
                        </div>
                        <p className='p-8 pt-0'><small>New Here? <Link to="/signup">Create an account.</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;