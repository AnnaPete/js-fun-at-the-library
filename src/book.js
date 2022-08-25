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

function calculatePageCount(title) {
  var bookTitle = createTitle("Dragon in the Summer") {
    if (bookTitle = )
  }
    return title.length *20
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
