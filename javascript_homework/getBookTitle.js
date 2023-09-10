function getTheBookInfo(books) {
    // Using map method to create a new array that contains titles, authors and release year
    const titles = books.map(book => book.title);
    const authors = books.map(book => book.author);
    const years = books.map(book => book.year);
    
    return{
        titles: titles,
        author: authors,
        years: years
        };
    }

  // Test the function with your array of books
    const books = [
    {
        title: 'Her Soul To Take',
        author: 'Harley Laroux',
        year: 2021
    },
    {
        title: 'The Hitchhiker`s Guide to the Galaxy',
        author: 'Douglas Adams',
        year: 1979
    },
    {   title: "Alan Wake", 
        author: "Rick Burroughs",
        year: 2010
    }
    ];

// Loop through the books array and display title, author, and year for each book
books.forEach(book => {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
    console.log('---'); // Added the separator for readability
});

// Added map method for authors and release year just for my own curiosity :)

