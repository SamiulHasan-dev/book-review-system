
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
    }
   
}





export { saveBooksInfo, getBooksInfo }
