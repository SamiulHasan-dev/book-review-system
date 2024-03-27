import { Link, Outlet} from "react-router-dom";
import {  useState } from "react";



const ListBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);



    return (
        <div>
            <div className="rounded-r-lg">
                <h2 className="text-3xl font-bold text-center bg-slate-200 py-6 my-5 rounded-lg">Books</h2>
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