import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfo } from "../../utility/localstorage";
import ReadAllBook from "../ReadAllBook/ReadAllBook";
import { RiArrowDropDownLine } from "react-icons/ri";

const ReadAllBooks = () => {
    
    const [displayBook, setDisplayBook] = useState([]);

    const handleBookFilter = (filter) => {
        let sortedBooks = [...displayBook];

        if (filter === "Rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (filter === "Number of pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === "Publisher year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayBook(sortedBooks); 
    };

    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getBooksInfo();
        if (books.length > 0) {
            const booksStore = [];
            for (const id of storedBooks) {
                const book = books.find((book) => book.bookId === id);
                if (book) {
                    booksStore.push(book);
                }
            }
           
            setDisplayBook(booksStore);
        }
    }, [books]);

    return (
        <div>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white">
                        Sort By <RiArrowDropDownLine className="text-2xl" />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <a onClick={() => handleBookFilter("Rating")}>Rating</a>
                        </li>
                        <li>
                            <a onClick={() => handleBookFilter("Number of pages")}>Number of pages</a>
                        </li>
                        <li>
                            <a onClick={() => handleBookFilter("Publisher year")}>Publisher year</a>
                        </li>
                    </ul>
                </details>
            </div>

            <div>
            {
                displayBook.map(book=> <ReadAllBook key={book.bookId} book={book}></ReadAllBook>)
            }
            </div>

        </div>
    );
};

export default ReadAllBooks;
