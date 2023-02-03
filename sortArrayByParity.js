var sortArrayByParity = function (nums) {
  let arr = [];
  let oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      oddArr.push(nums[i]);
    } else {
      arr.push(nums[i]);
    }
  }

  return [...arr, ...oddArr];
};

var sortArrayByParity2 = function (nums) {
  return [
    ...nums.filter((a) => a % 2 === 0),
    ...nums.filter((a) => a % 2 === 1),
  ];
};

var sortArrayByParity = function (nums) {
  return nums.sort((a, b) => {
    return a % 2 == 0 ? -1 : 1;
  });
};

console.log(sortArrayByParity2([2, 3, 4, 4]));
console.log(sortArrayByParity2([1, 3, 5, 4]));
