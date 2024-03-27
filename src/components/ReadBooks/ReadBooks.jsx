import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksInfo } from "../../utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getBooksInfo();
        if (books.length > 0) {
            const booksStore = [];
            for (const id of storedBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksStore.push(book);
                }
            }
            setReadBooks(booksStore)
        }
    }, [books])
    
    return (
        <div className="mt-12">
            <BarChart
            width={1000}
            height={400}
            data={readBooks}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {readBooks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
        </div>
    );
};



export default ReadBooks;