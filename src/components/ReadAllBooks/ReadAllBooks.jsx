import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfo } from "../../utility/localstorage";


const ReadAllBooks = () => {
     const [readBook, setReadBook] = useState([]);

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
            setReadBook(booksStore)
            console.log(books, storedBooks, booksStore);
        }
    }, [books])
    return (
        <div>
            <h2>Read korsi {readBook.length}</h2>
        </div>
    );
};

export default ReadAllBooks;