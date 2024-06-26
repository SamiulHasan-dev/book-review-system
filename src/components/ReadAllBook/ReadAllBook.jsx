import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import PropTypes from 'prop-types';


const ReadAllBook = ({book}) => {
    const {bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = book;
    return (
        <div>
            <div className="gap-2 border px-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row  items-center gap-3 my-4">
                <img className="h-[170px] w-[170px] p-5 bg-slate-100 rounded-lg" src={image} alt="" />
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-center lg:text-left">{bookName}</h2>
                    <h3 className="text-base font-semibold text-center lg:text-left">By: {author}</h3>
                    <div className="flex items-center gap-5 flex-col md:flex-row">
                        <p className="font-bold text-base">Tags:</p>
                        <p className="text-green-700 bg-green-50 font-semibold px-2 py-1 rounded-xl">{tags[0]}</p>
                        <p className="text-green-700 bg-green-50 font-semibold px-2 py-1 rounded-xl">{tags[1]}</p>
                        <p className="flex px-2 py-1 gap-2 items-center bg-green-50 rounded-xl "><CiLocationOn /> Year Of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex  gap-3">
                        <p className="flex gap-2 items-center"><FaUserGroup />Publisher: {publisher}</p>
                        <p className="flex gap-2 items-center"><RiPagesLine />Page: {totalPages}</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-5 flex-col md:flex-row">
                        <p className="text-sky-800 bg-sky-100 font-semibold  rounded-xl text-base px-4 py-1">Category: {category}</p>
                        <p className="text-orange-800 bg-orange-100 font-semibold  rounded-xl text-base px-4 py-1">Rating: {rating}</p>
                        <Link to={`/book/${bookId}`}><button className="btn bg-green-500 text-white">View Details</button></Link>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

ReadAllBook.propTypes ={
    book: PropTypes.object
}

export default ReadAllBook;