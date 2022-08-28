function createTitle(partialTitle) {
  return "The " + partialTitle;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
}

function saveReview(statement, listOfReviews) {
  if(listOfReviews.includes(statement) === false) {
    listOfReviews.push(statement)
  };
  console.log("Array of listOfReviews with methods", listOfReviews);
};

function calculatePageCount(title) {
  return title.length * 20
}



function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}


function editBook(book) {
  book.pageCount = book.pageCount * 3 / 4
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
