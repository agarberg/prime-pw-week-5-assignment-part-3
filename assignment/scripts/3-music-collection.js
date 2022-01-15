console.log('***** Music Collection *****')

let collection = [];    //create empty array

function addToCollection(title, artist, yearPublished) {
  const name = {};
  name.title = title,
  name.artist = artist,
  name.yearPublished = yearPublished;
  collection.push(name);
  };

addToCollection('BootyShaker', 'SirBumpsAlot', 2026);
addToCollection('Shambles', 'Millers', 2901);
addToCollection('Party Pants', 'SirBumpsAlot', 2026 );
addToCollection('Your Name Here', 'Atmosphere', 2011 );
addToCollection('Satisfaction', 'Benny Benassi', 2005 );
addToCollection('Crazy', 'Millers', 2901 );
console.log(collection) // this console.log must be added to get any response?
