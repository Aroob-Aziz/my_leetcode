var numOfSubarrays = function (arr, k, threshold) {
  let windowStart = 0;
  let total = 0;
  let avg = 0;
  let count = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    total += arr[windowEnd];

    if (windowEnd >= k) {
      total -= arr[windowStart];
      windowStart++;
    }

    if (windowEnd - windowStart + 1 === k) {
      avg = total / k;
      if (avg >= threshold) count++;
    }
  }
  return count;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
