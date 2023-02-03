// iterative method
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

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;
  // let index = Number.MAX_VALUE

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else if (target === nums[mid]) {
      index = mid;
      break;
    }
  }
  // return index === Number.MAX_VALUE ? -1 : index
  return index;
};

// recursive method
var search = function (nums, target) {
  // recursive method
  let binarySearch = function (nums, key, low, high) {
    let mid = Math.floor((low + high) / 2);
    if (high < low) return -1;
    if (nums[mid] === key) return mid;
    if (key > nums[mid]) return binarySearch(nums, key, mid + 1, high);
    else return binarySearch(nums, key, low, mid - 1);
  };

  return binarySearch(nums, target, 0, nums.length - 1);
};
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7, 0, 6));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
