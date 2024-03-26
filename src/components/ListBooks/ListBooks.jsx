import { Link, Outlet} from "react-router-dom";
import {  useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


const ListBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);



    return (
        <div>
            <div className="flex justify-center">
            <details className="dropdown">
                <summary className="m-1 btn bg-green-500 text-white">Sort By <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted justify-start gap-4 mt-5">
                <Link to="" onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                <Link to="wishlist" onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
                
            </div>
            <hr />
            <Outlet></Outlet>
        </div>
    );
};

export default ListBooks;