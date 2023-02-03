var distributeCandies = function (candyType) {
  let candySet = new Set(candyType);
  let half = candyType.length / 2;
  return Math.min(candySet.size, half);
};
