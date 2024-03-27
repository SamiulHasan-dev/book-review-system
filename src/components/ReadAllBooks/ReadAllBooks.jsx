import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfo } from "../../utility/localstorage";
import ReadAllBook from "../ReadAllBook/ReadAllBook";


const ReadAllBooks = () => {
     const [readBooks, setReadBooks] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getBooksInfo();
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
                readBooks.map(book => <ReadAllBook key={book.bookId} book={book}></ReadAllBook> )
            }
        </div>
    );
};

export default ReadAllBooks;