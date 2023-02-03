var threeSum = function (nums) {
  let result = [];
  let goal = 0;
  let sum;
  //   let sett = new Set();
  if (!nums.length || nums.length < 3) return result;

  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (nums[i] > goal) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];

      if (sum === goal) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < goal) {
        j++;
      } else if (sum > goal) {
        k--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
// console.log(threeSum([]));
