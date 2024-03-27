

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
    }
}



export { getBooksInfoWish, saveBooksInfoWish }