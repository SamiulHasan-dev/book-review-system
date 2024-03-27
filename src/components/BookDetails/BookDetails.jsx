import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooksInfo } from "../../utility/localstorage";
import {  saveBooksInfoWish } from "../../utility/localstorageWish";
import { useState } from "react";


const BookDetails = () => {
    const [read, setRead] = useState(0);
    const [wish, setWish] = useState(0);



    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);


    const handleReadBook = () => {

        saveBooksInfo(bookIdInt);
        const newRead = read + 1;
        setRead(newRead);
        // read < 1 ? toast.success('Book Added To Read List') : toast.error('Book already read');
    }

    const handleWishList = () => {

        const newWish = wish + 1;
        setWish(newWish);
        if (read < 1  && wish < 1) {
            // toast.success('Book Added To wish List');
            saveBooksInfoWish(bookIdInt);
        }
        else {
            toast.error('Book already Added')
        }

    }


    return (
        <div>
            <div className="hero mt-8">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={book.image} className="rounded-lg shadow-xl bg-base-300 h-[70vh] w-1/2" />
                    <div className="space-y-2 py-2">
                        <h1 className="text-3xl font-bold">{book.bookName}</h1>
                        <h3 className="text-xl font-semibold">By: {book.author}</h3>
                        <hr />
                        <h4 className="text-xl font-semibold ">{book.category}</h4>
                        <hr />
                        <p><span className="font-bold">Review: </span>{book.review}</p>
                        <div className="flex items-center justify-start  gap-5">
                            <p className="font-bold">Tags</p>
                            <p className="text-green-700 bg-green-50 font-semibold border 0 p-1 rounded-xl">#{book.tags[0]}</p>
                            <p className="text-green-700 bg-green-50 font-semibold border p-1 rounded-xl">#{book.tags[1]}</p>
                        </div>
                        <hr />
                        <p>Number of Pages:  <span className="font-semibold">{book.totalPages}</span></p>
                        <p>Publisher:  <span className="font-semibold">{book.publisher}</span></p>
                        <p>Year Of Publishing:  <span className="font-semibold">{book.yearOfPublishing}</span></p>
                        <p>Rating:  <span className="font-semibold">{book.rating}</span></p>

                        <div className="flex gap-4">
                            <button onClick={handleReadBook} className="btn text-black border border-black">Read</button>
                            <button onClick={handleWishList} className="btn bg-sky-500 text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;