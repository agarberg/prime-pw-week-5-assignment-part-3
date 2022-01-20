console.log('***** Music Collection *****')

let collection = [];    //create empty array

function addToCollection(title, artist, yearPublished) { //function to create
  const song = {};                                        //name object
  song.title = title,
  song.artist = artist,
  song.yearPublished = yearPublished;
  collection.push(song);
  return song;
};
// call function and add each song
console.log(addToCollection('Booty Shaker', 'SirBumpsAlot', 2026));
console.log(addToCollection('Shambles', 'Millers', 2901));
console.log(addToCollection('Party Pants', 'SirBumpsAlot', 2026 ));
console.log(addToCollection('Your Name Here', 'Atmosphere', 2011 ));
console.log(addToCollection('Satisfaction', 'Benny Benassi', 2005 ));
console.log(addToCollection('Crazy', 'Millers', 2901 ));
console.log(collection)

//////function using for loop
function showCollection(array){
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
  }
}
showCollection(collection)
//end for loop function

/////function using for OF loop
function showCollection(array){
  console.log(array.length);
  for ( let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
  }
}
showCollection(collection)
//end for OF loop function

function findByArtist(certainArtist){
//create empty array
  let artists = [];
  //for of loop through collection
  for (let i = 0; i<collection.length; i++) {
    //look for specified artist
    if (collection[i].artist === certainArtist) {
      //push to new array
      artists.push(collection[i].artist);
}
}
console.log(artists);
}
findByArtist('SirBumpsAlot');            //    call function
