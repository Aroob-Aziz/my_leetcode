var findDuplicates = function (nums) {
  let duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      duplicate.push(Math.abs(nums[i]));
    }
    nums[index] = -nums[index];
  }

  return duplicate;
};
