import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfoWish } from "../../utility/localstorageWish";
import WishAllBook from "../WishAllBook/WishAllBook";

const WishAllBooks = () => {
    const [readBooks, setReadBooks] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getBooksInfoWish();
        if (books.length > 0) {
            const booksStore = [];
            for(const id of storedBooks){
                const book = books.find(book=> book.bookId === id);
                if(book){
                    booksStore.push(book);
                }
            }
            setReadBooks(booksStore)
            console.log(books, storedBooks, booksStore);
        }
    }, [books])
    return (
        <div>
            {
                readBooks.map(book => <WishAllBook key={book.bookId} book={book}></WishAllBook> )
            }
        </div>
    );
};

export default WishAllBooks;