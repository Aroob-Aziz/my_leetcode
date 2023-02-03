var minCostToMoveChips = function (position) {
  let even = 0;
  let odd = 0;
  for (let i of position) {
    if (i % 2) odd++;
    else even++;
  }
  return Math.min(even, odd);
};

console.log(minCostToMoveChips([1, 3, 3]));
console.log(1 % 2);

var distributeCandies = function (candyType) {
  let candySet = new Set(candyType);
};
