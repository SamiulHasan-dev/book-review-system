import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, image, author, category, rating, tags } = book;
    return (
        <div>
            
            <Link className="card card-compact bg-base-100 shadow-xl hover:border border-green-400">
                <figure><img className="h-[200px] w-[150px]" src={image} alt="books" /></figure>
                <div className="card-body">
                    <div className="flex  text-center gap-3">
                        <p className="text-green-700 bg-green-50 font-semibold p-1 rounded-xl">{tags[0]}</p>
                        <p className="text-green-700 bg-green-50 font-semibold  p-1 rounded-xl">{tags[1]}</p>
                        <p></p>
                    </div>
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr></hr>
                    <div className="card-actions flex justify-between my-3 items-center">
                        <p>{category}</p>
                        <small><p className="flex gap-2 items-center">{rating}<FaRegStar></FaRegStar></p></small>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;