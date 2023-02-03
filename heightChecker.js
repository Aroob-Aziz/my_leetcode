var heightChecker = function (heights) {
  let expected = [...heights];
  let count = 0;
  expected.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
