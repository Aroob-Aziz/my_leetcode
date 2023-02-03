// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
  var shuffle = function (nums, n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(nums[i]);
      arr.push(nums[i + n]);
    }

    return arr;
  };
};
