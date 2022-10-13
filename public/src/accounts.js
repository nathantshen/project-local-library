// using find() to see if account.id = the requested id
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
//sort() accounts by last name 
  return accounts.sort((accountA, accountB) =>{
//make const for lastname of A and Lastname of B
    const A = accountA.name.last;
    const B = accountB.name.last;
//return if A < B ? -1 : 1
// use toLowerCase() 
    return A.toLowerCase() < B.toLowerCase() ? -1 : 1
  });
}


function getTotalNumberOfBorrows(account, books) {
//set a variable object for account id (destructuring)
  const {id} = account;
//set a variable value as total
  let total = 0;
//for loop through each book of the books
  for (let book in books) {
// set a variable object for each book
    const {borrows} = books[book];
//for each variable object (borrowed book), check if its element's ID = account
    borrows.forEach((element) => {
      if (element.id === id) {
//if so, add to total
        total++;
      }
    });
  }
//return total
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
//set const accountId
  const accountId = account.id;
//set variable for array
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
