// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
  let currentRunningSum = 0;
  let minimumWindowSize = Number.MAX_VALUE;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentRunningSum += nums[windowEnd];
    while (currentRunningSum >= target) {
      minimumWindowSize = Math.min(
        minimumWindowSize,
        windowEnd - windowStart + 1
      );
      currentRunningSum -= nums[windowStart];
      windowStart++;
    }
  }
  return minimumWindowSize === Number.MAX_VALUE ? 0 : minimumWindowSize;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
