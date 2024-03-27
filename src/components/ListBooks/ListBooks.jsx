import { Link, Outlet} from "react-router-dom";
import {  useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";


const ListBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);



    return (
        <div>
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