/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let firstTriangle, secondTriangle, thirdTriangle;
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    firstTriangle = preferences[i];

    secondTriangle = preferences[firstTriangle - 1];

    thirdTriangle = preferences[secondTriangle - 1];

    if (
      firstTriangle != secondTriangle &&
      i == thirdTriangle - 1
    ) {
      counter++;
    }
  }
  return counter / 3;
};
