import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book=> book.bookId === bookIdInt);
    console.log(book)


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
                            <button className="btn text-black border border-black">Read</button>
                            <button className="btn bg-sky-500 text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;