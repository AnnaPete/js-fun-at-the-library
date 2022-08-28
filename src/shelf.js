function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book)
  }
}

function unshelfBook(title, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === title) {
        sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(fantasyShelf) {
  var titles = []
  for (var i = 0; i < fantasyShelf.length; i++) {
    titles.push(fantasyShelf[i].title)
  }
  return titles.join(", ")
}

function searchShelf(sciFiShelf, title) {
  var isOnShelf = false;
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (title === sciFiShelf[i].title) {
      isOnShelf = true
    }
  }
  return isOnShelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
