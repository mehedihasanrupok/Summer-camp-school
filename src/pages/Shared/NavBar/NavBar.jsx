import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/order/salad'>Classes</Link></li>
        <li>{user && <Link to='/mytoy'>Dashboard</Link>}</li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30 text-blue">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">The Root Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? <>
                        <button className='w-10 h-16 rounded-full'><img className='bg-white m-4' title={user.displayName} src={user?.photoURL} alt="" /></button>
                        <button onClick={handleLogOut}>Log out</button>
                    </> :
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;