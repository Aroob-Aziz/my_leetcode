// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
  if (!numRows) return [];
  if (numRows === 1) return [[1]];
  let pascalsTri = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = pascalsTri[i - 1];
    let currRow = [];
    currRow[0] = 1;
    for (let j = 1; j < prevRow.length; j++) {
      currRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currRow.push(1);
    pascalsTri.push(currRow);
  }
  return pascalsTri;
};
