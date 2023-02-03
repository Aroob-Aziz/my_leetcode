var findUnsortedSubarray = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  while (start <= end) {
    if (nums[start] <= nums[start + 1]) {
      start++;
      //   console.log(start);
    } else {
      break;
    }
  }
  while (end >= 0) {
    if (nums[end] >= nums[end - 1]) {
      end--;
      console.log(end);
    } else {
      break;
    }
  }
  if (start === nums.length - 1) return 0;
  for (let i = start; i <= end; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  console.log("min", min, max);
  console.log("start before", start);
  console.log("end before", end);
  while (start - 1 >= 0) {
    if (nums[start - 1] > min) {
      start--;
      console.log(start);
    } else {
      break;
    }
  }
  while (end + 1 <= nums.length - 1) {
    if (nums[end + 1] < max) {
      end++;
      console.log(end);
    } else {
      break;
    }
  }
  console.log("start before", start);
  console.log("end before", end);

  return end - start + 1;
};
// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 3, 2, 4, 5]));
// console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));
