import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaFirstOrderAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci";
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isAdmin,isInstructor)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manage-class"><FaHome></FaHome> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manage-user"> <FaUtensils></FaUtensils> Manage Users</NavLink></li>
                        </> : (
                            isInstructor ? <>
                                <li><NavLink to="/dashboard/add-class"><FaHome></FaHome> Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/my-class"> <FaUtensils></FaUtensils> My Classes</NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/selected-class"><FaHome></FaHome> Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/enrolled-class"> <FaUtensils></FaUtensils> Enrolled Classes</NavLink></li>
                            </>
                        )
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructors"><CiMenuBurger></CiMenuBurger> Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaFirstOrderAlt></FaFirstOrderAlt>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;