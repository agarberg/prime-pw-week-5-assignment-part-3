console.log('***** Music Collection *****')

let collection = [];    //create empty array

function addToCollection(title, artist, yearPublished) {
  const name = {};
  name.title = title,
  name.artist = artist,
  name.yearPublished = yearPublished;
  collection.push(name);
  return name;
  };

console.log(addToCollection('BootyShaker', 'SirBumpsAlot', 2026));
console.log(addToCollection('Shambles', 'Millers', 2901));
console.log(addToCollection('Party Pants', 'SirBumpsAlot', 2026 ));
console.log(addToCollection('Your Name Here', 'Atmosphere', 2011 ));
console.log(addToCollection('Satisfaction', 'Benny Benassi', 2005 ));
console.log(addToCollection('Crazy', 'Millers', 2901 ));
console.log(collection)
