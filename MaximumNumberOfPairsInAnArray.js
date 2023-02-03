var numberOfPairs = function (nums) {
  let counter1 = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1);
        nums.splice(j - 1, 1);
        i = 0;
        j = 0;
        counter1++;
      }
    }
  }
  arr.push(counter1);
  arr.push(nums.length);
  return arr;
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
