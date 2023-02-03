var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let left = -1;
  let right = -1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else if (target === nums[mid]) {
      left = mid;
      high = mid - 1;
    }
  }
  low = 0;
  high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else if (target === nums[mid]) {
      right = mid;
      low = mid + 1;
    }
  }

  return [left, right];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));

//recursiveSolution

// var searchRange = function (nums, target) {
//   let binarySearchLeft = function (nums, key, low, high, left) {
//     if (high < low) return left;
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === key)
//       return binarySearchLeft(nums, key, low, mid - 1, mid);
//     if (key > nums[mid])
//       return binarySearchLeft(nums, key, mid + 1, high, left);
//     else return binarySearchLeft(nums, key, low, mid - 1, left);
//   };

//   let binarySearchRight = function (nums, key, low, high, right) {
//     if (high < low) return right;
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === key)
//       return binarySearchRight(nums, key, mid + 1, high, mid);
//     if (key > nums[mid])
//       return binarySearchRight(nums, key, mid + 1, high, right);
//     else return binarySearchRight(nums, key, low, mid - 1, right);
//   };

//   return [
//     binarySearchLeft(nums, target, 0, nums.length - 1, -1),
//     binarySearchRight(nums, target, 0, nums.length - 1, -1),
//   ];
// };
