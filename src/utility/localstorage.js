import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getBooksInfo = () => {
    const storedBookInfo = localStorage.getItem('book-info');
    if (storedBookInfo) {
        return JSON.parse(storedBookInfo);
    }
    return [];
}

const saveBooksInfo = id => {
    const storedBook = getBooksInfo();
    const exist = storedBook.find(bookid => bookid === id);
    if (!exist) {
        storedBook.push(id);
        localStorage.setItem('book-info', JSON.stringify(storedBook));
        toast.success('Book Added To Read List')
    }
    else{
        toast.error('Book already read')
    }
   
}


export { saveBooksInfo, getBooksInfo }