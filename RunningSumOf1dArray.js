// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function (nums) {
  let sum = 0;
  let arr = [];
  arr.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    sum = arr[i - 1] + nums[i];
    arr.push(sum);
  }
  return arr;
};

// Another Solution
var runningSum = function (nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    arr.push(nums[i] + arr[i - 1]);
  }
  return arr;
};
console.log(runningSum([1, 2, 3, 4]));
