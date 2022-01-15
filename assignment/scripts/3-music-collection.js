console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  const name = {};
  name.title = title,
  name.artist = artist,
  name.yearPublished = yearPublished,
  collection.push(name);
  return name
};
