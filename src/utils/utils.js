/**
* Check if the joke has been already marked
* @param {*} jokeToTest The joke to test
* @param {*} jokeArray The joke array where to find
* @returns {boolean} True if the jokes is already marked, false if not
*/
export const isJokeAlreadyMarked = (jokeToTest, jokeArray) => {
  const foundJoke = jokeArray.find((jokeObject) => jokeObject.joke === jokeToTest);
  if (foundJoke) return true;
  return false;
};
/**
 * Find the highest id and return it +1
 * @param {Array<Object>} collection array of objects with id key
 * @returns {number} new id
 */
export const getNewId = (collection) => {
  if (collection.length === 0) return 1;
  const idList = collection.map((item) => item.id);
  const maxId = Math.max(...idList);
  return maxId + 1;
};
