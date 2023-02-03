var sumOfUnique = function (nums) {
  let obj = {};
  let sum = 0;
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      sum += Number(key);
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 2, 3]));
