import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfoWish } from "../../utility/localstorageWish";

const WishAllBooks = () => {
    const [readBook, setReadBook] = useState([]);

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
            setReadBook(booksStore)
            console.log(books, storedBooks, booksStore);
        }
    }, [books])
    return (
        <div>
            <h2>Wish i could fly: {readBook.length}</h2>
        </div>
    );
};

export default WishAllBooks;