//same as findAccountById but for author
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

//same as findAuthorById but for books
function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

//make two arrays using a helper function: non-returned and returned 
function partitionBooksByBorrowedStatus(books) {
//variables for status
  const returned = true;
  const borrowed = !returned;
//variables for each array (calls to helper functions)
  const nonreturnedBooks = returnStatusBook(books, borrowed);
  const returnedBooks = returnStatusBook(books, returned);
//retun a combined array with both using spread 
  return  [[...nonreturnedBooks],[...returnedBooks]];
}

//help function for partitionBooksByBorrowedStatus
function returnStatusBook(books, status){
//filter if status = returned boolean
  return books.filter(({borrows}) => status === borrows[0].returned)
}


function getBorrowersForBook(book, accounts) {
//var array
  const result = [];
//loop through account in accounts
  for (let account of accounts) {
//loop through borrows
    for (let i = 0; i < book.borrows.length; i++) {
//if account id = borrows id
      if(account.id === book.borrows[i].id) {
// new variable for all returned items
        const returned = book.borrows[i].returned
//psuh/add to result + ...account all other accounts
        result.push({returned,...account})
      }
    }
  }
//slice to 10 items
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
