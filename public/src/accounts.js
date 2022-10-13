// using find() to see if account.id = the requested id
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

//sort() accounts by last name 
//make const for lastname of A and Lastname of B
//return if A < B ? -1 : 1
// use toLowerCase() 
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>{
    const A = accountA.name.last;
    const B = accountB.name.last;
    return A.toLowerCase() < B.toLowerCase() ? -1 : 1
  });
}

//set a variable object for account id (destructuring)
//set a variable value as total
//for loop through each book of the books
// set a variable object for each book
//for each variable object (borrowed book), check if its element's ID = account
// if so, add to total
//return total
function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  let total = 0;
  for (let book in books) {
    const {borrows} = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        total++;
      }
    });
  }
  return total
}

//set const accountId
//set variable for array
//use filter() to add certain elements to the array
//condition is if the book ID is in the account and has not been returned
function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let result = [];
//use filter() to add certain elements to the array
//condition is if the book ID is in the account and has not been returned
  result =  books.filter((book) =>
            book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned
            ));
//add the author object to each book
//callback function to find the correct author
            books.map((book) => {
              book["author"] = findAccountById(authors, book.authorId);
              return book;
            })
  return result
}

  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
