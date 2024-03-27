import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-600 border-green-600 font-bold border p-2 rounded' : 'font-medium'}>Home</NavLink>
        <NavLink to="/list" className={({ isActive }) => isActive ? 'text-green-600 border-green-600 font-bold border p-2 rounded' : 'font-medium'}>Listed Books</NavLink>
        <NavLink to="/read" className={({ isActive }) => isActive ? 'text-green-600 border-green-600 font-bold border p-2 rounded' : 'font-medium'}>Pages to Read</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'text-green-600 border-green-600 font-bold border p-2 rounded' : 'font-medium'}>Users</NavLink>
        <NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'text-green-600 border-green-600 font-bold border p-2 rounded' : 'font-medium'}>About US</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="flex flex-col">
                                {links}
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold text-green-600">Book Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex items-center gap-4">
                            {links}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end md:gap-4 ">
                    <a className="btn bg-green-600 text-white">Sign In</a>
                    <a className="btn text-white bg-accent">Sign Up</a>
                </div>

            </div>
        </div>
    );
};

export default Header;