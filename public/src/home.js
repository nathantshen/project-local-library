//find count by return length
function getTotalBooksCount(books) {
  return books.length;
}


//find count by return length
function getTotalAccountsCount(accounts) {
   return accounts.length
}


function getBooksBorrowedCount(books) {
//variable that is all returned books (filter)
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
//return length of returend
  return borrowedList.length;
}


function getMostCommonGenres(books) {
//make var array
  const commonGenres = [];
//Loops through books and finds the matching genre
 for (let book of books) {
   const genre = commonGenres.find(
     (currentGenre) => currentGenre.name === book.genre
   ); 
 //if true this adds to the existing genre
   if (genre) {
     genre.count ++;
 //if false pushes new object to the empty array
   } else {
     commonGenres.push({ name: book.genre, count: 1});
   }
 }
// sorts and return the top five results (slice)
   let result = commonGenres.sort((countA, countB) => (
    countA.count < countB.count ? 1: -1)).slice(0, 5);
//return
  return result
}


//same as getMostCommonGenres but for book title
function getMostPopularBooks(books) {
  let popularBooks = [];
//loop through 'books'and perform required function using reduce 
  const borrows = books.reduce((accumulate, book) => {
//creat new objects with 'name' and 'count' keys
//push/add them onto 'popularBooks' array.
    popularBooks.push({ name: book.title, count: book.borrows.length });
  }, []);
//sort and slice top five 
    let result = popularBooks.sort((countA, countB) => (
    countA.count < countB.count ? 1: -1)).slice(0, 5);
//return 
  return result
}

//similar to getMostCommonGenres but for author name
function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
//loop through author
  for (let author of authors) {
//set a num variable
    let count = 0;
//loop through books 
    for (let book of books) {
// if author id = book authorId
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
//set new variable to combine first and last name
    const authorName = `${author.name.first} ${author.name.last}`;
//set object for each name and count pair
    const Object = { name: authorName, count: count };
//push/add to array
    popularAuthors.push(Object);
  }
//sort and slice top five 
  let result = popularAuthors.sort((countA, countB) => (
    countA.count < countB.count ? 1: -1)).slice(0, 5);
//return
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
