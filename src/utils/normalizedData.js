// Get Year
export const getYear = date => new Date(date.release_date).getFullYear();

// Normalize the data for Trendy Movies and Query Search

// export function normalizedData(results) {
//   return results.map(movie => {
//     const genres = createGenres(genresNames, movie.genre_ids);
//     let listOfGenres = genres[0];

//     if (listOfGenres.length > 3) {
//       listOfGenres.splice(2, 5, 'Other');
//     }

//     let objData = {
//       ...movie,
//       year: getYear(movie),
//       genres: listOfGenres,
//     };
//     return objData;
//   });
// }

// //create the Array/List of Genres (names)
// function createGenres(array, genresID) {
//   let arrayOfGenres = [];
//   return array.map(element => {
//     if (genresID.includes(element.id)) {
//       arrayOfGenres.push(element.name);
//     }
//     return arrayOfGenres;
//   });
// }
