var guessNumber = function (n) {
  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let x = guess(mid);
    if (x === -1) {
      high = mid - 1;
    } else if (x === 1) {
      low = mid + 1;
    } else if (x === 0) {
      return mid;
    }
  }
};
