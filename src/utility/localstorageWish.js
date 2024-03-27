import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getBooksInfoWish = () => {
    const storedBookInfo = localStorage.getItem('book-info-wish');
    if (storedBookInfo) {
        return JSON.parse(storedBookInfo)
    }
    return [];
}

const saveBooksInfoWish = id => {
    const storedBook = getBooksInfoWish();
    const exist = storedBook.find(bookid => bookid === id);
    if (!exist) {
        storedBook.push(id);
        localStorage.setItem('book-info-wish', JSON.stringify(storedBook));
        toast.success('Book Added To wish List');
    }
    else{
        toast.error('Book already Added');
    }
   
}



export { getBooksInfoWish, saveBooksInfoWish }