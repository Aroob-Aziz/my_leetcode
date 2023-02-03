var maxSubArray = function (nums) {
  let currentRunningSum = 0;
  let maximumSum = Number.NEGATIVE_INFINITY;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentRunningSum += nums[windowEnd];
    if (currentRunningSum >= maximumSum) {
      maximumSum = currentRunningSum;
      console.log(maximumSum);
    }
    while (currentRunningSum < 0) {
      currentRunningSum -= nums[windowStart];
      windowStart++;
    }
  }
  return maximumSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));
// console.log(maxSubArray([-1]));
