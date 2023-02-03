// var sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }
//   nums.sort((a, b) => a - b);
//   return nums;
// };

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let arr = [];
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      arr.push(nums[left] * nums[left]);
      left++;
    } else {
      arr.push(nums[right] * nums[right]);
      right--;
    }
  }
  return arr.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
