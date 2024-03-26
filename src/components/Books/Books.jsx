import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('../booksData.json')
        .then(res=> res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-10 mt-14">Books</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    books.map(book=> <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;