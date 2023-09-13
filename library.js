// initially declared book object
let desiLibrary = [
    {
        id: 1,
        name: "Kabuliwala",
        author: "Rabindranath Tagore",
        price: 899,
        rating: 9
    },

    {

        id: 2,
        name: "Nondito Noroke",
        author: "Humayun Ahmed",
        price: 200,
        rating: 8
    },
    {
        id: 3,
        name: "Feluda Somogro",
        author: "Satyajit Ray",
        price: 350,
        rating: 9
    },
    {
        id: 4,
        name: "Megher Pore Rod",
        author: "Humayun Ahmed",
        price: 180,
        rating: 6
    },
    {
        id: 5,
        name: "Chader Pahar",
        author: "Bibhutibhushan Bandopadhyay",
        price: 240,
        rating: 8
    },
    {
        id: 6,
        name: "Jol Jochona",
        author: "Humayun Ahmed",
        price: 190,
        rating: 7
    },


    {
        id: 7,
        name: "Amar Bondhu Rashed",
        author: "Muhammad Zafar Iqbal",
        price: 250,
        rating: 9
    },

    {
        id: 8,
        name: "Bidrohi",
        author: "Kazi Nazrul Islam",
        price: 250,
        rating: 9
    },

];

// create new object for separate object bases on author

const filterBooksByAuthor = [
    {
        id: 1,
        writer: 'Rabindranath Tagore'
    },
    {
        id: 2,
        writer: 'Kazi Nazrul Islam'
    },
    {
        id: 3,
        writer: 'Humayun Ahmed'
    }
]
let selectedAuthor = {};
const getBooks = () => desiLibrary


// create a copy object from the original items object
const myCart = [...desiLibrary]

// for store books
let newBooksCollection = []

// using 'Find' for find out selected item
const handleFilteredBooks = (id) => {
    const selectedNewAuthor = filterBooksByAuthor.find(bookAuthor => bookAuthor.id === id)
    selectedAuthor = selectedNewAuthor

}
handleFilteredBooks(10)
console.log('find', getBooks())

// using 'filter' for separate book by author
const handleSelectedAuthorApply = (filterBook) => {
    if (selectedAuthor) {
        const filterSelectedBook = desiLibrary.filter(library => library.author === filterBook.writer)
        desiLibrary = filterSelectedBook
    }
    else {
        console.log('This Book has no existence in this library')
    }

}
handleSelectedAuthorApply(selectedAuthor)
console.log('Author', getBooks())

// using 'filter' for separate book by rating
const handleFilteredBooksByRating = (filterRating) => {
    const filterSelectedBook = desiLibrary.filter(library => library.rating >= filterRating.low && library.rating <= filterRating.high)
    desiLibrary = filterSelectedBook
}
handleFilteredBooksByRating({
    low: 5,
    high: 8
})
console.log('Rating', getBooks())


// create user

let users = [];

const getId = () => {
    const randomValue = Math.random() * 10000;
    const randomId = Math.round(randomValue);
    return randomId;
}

const addUser = (name, email, password) => {
    const createUser = {
        id: getId(),
        name,
        email,
        password,
    }

    const findUser = users.find(user => user.email === email);

    if (password.length < 6) {
        console.log('Invalid');
    } else if (findUser && findUser.id) {
        console.log('This user is already exist');
    } else {
        users.push(createUser);
    }
}

addUser('Narandra Modi', 'narandry@gmail.com', '000');
addUser('Roy', 'roy@gmail.com', '202003312');

console.log('Create User', users);


// account accountAuthentication
let myAccount = {};

const accountAuthentication = (email, password) => {
    const user = users.find(person => person.email === email && person.password === password);

    if (user) {
        console.log('Login Successfully!!');
        myAccount = {
            id: user.id,
            email: user.email,
            password: user.password
        }
    } else {
        console.log('Failed Authentication!!');
    }
}

accountAuthentication('SakibKhan@gmail.com', '8989');
accountAuthentication('roy@gmail.com', '202003312');

console.log('after authentication', users);


// buy books

const buyBooks = (id) => {
    const givenBookPrice = 500;
    if (myAccount.id) {
        const selectedBook = desiLibrary.find(book => book.id === id)
        if (selectedBook) {
            if (givenBookPrice >= myAccount.price) {
                givenBookPrice = givenBookPrice - myAccount.price
                console('You are able to buy this book')
                return givenBookPrice
            }
            else {
                console.log('You do not have enough money')
                return 0
            }
        }
        else {
            console.log('Book not found')
            return 0
        }

    }
    else {
        console.log('Account not found')
        return 0
    }

}

buyBooks(1)

console.log('Buy Books', getBooks());

// clear cart and get back to the new 
const clearBooksCart = () => {
     desiLibrary = myCart;
}


clearBooksCart();
console.log('After clearing cart', getBooks());