var minOperations = function (nums, x) {
  let ws = 0;
  let sum = nums.reduce((a, b) => a + b);
  console.log(sum);
  let goal = sum - x;
  let max = 0;
  let currSum = 0;
  if (goal === 0) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    console.log("sum", currSum);
    while (currSum > goal) {
      currSum -= nums[ws];
      ws++;
    }
    if (currSum === goal) {
      max = Math.max(max, i - ws + 1);
      console.log("max", max);
    }
  }
  //   console.log(max);
  return max === 0 ? -1 : nums.length - max;
};

// [1,1,4,2,3]
// console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(
  minOperations(
    [
      8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993,
      9904, 8819, 1231, 6309,
    ],
    134365
  )
);
