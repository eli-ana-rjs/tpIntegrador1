const books = require('./db');

function getAll() {
    return books;
}

function getById(id) {

    let foundBook = null;


    books.forEach(book => {
        if (book.id === id) {
            foundBook = book;
        }
    })

    return foundBook;
}

function getByName(name) {
    let foundBook = null;

    books.forEach(book => {
        if (book.name.toLowerCase().includes(name.toLowerCase())) {
            foundBook = book;
        }
    })

    return foundBook;
}

function getByTag(tag) {

    const arrayBooksContainingTag = [];

    books.forEach(book => {

        book.tags.forEach(tagBook => {
            if (tagBook.toLowerCase() === tag.toLowerCase()) {
                arrayBooksContainingTag.push(book);
            }
        })

    });

    return arrayBooksContainingTag;
}

function getByAuthor(author) {

    let arrayBooksAuthor = [];

    arrayBooksAuthor = books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));

    return arrayBooksAuthor;
}

function getSoldByAuthor(author) {

    let numberOfBookSold = 0;

    books.forEach(book => {
        if (book.author.toLowerCase() === author.toLowerCase()) {
            numberOfBookSold += book.sold;
        }
    });

    return numberOfBookSold;
}

module.exports = {
    getAll: getAll,
    getById: getById,
    getByName: getByName,
    getByTag: getByTag,
    getByAuthor: getByAuthor,
    getSoldByAuthor: getSoldByAuthor
}