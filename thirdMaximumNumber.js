// var thirdMax = function (nums) {
//   let sortedNums = new Set(nums.sort((a, b) => b - a));
//   let unique = [...sortedNums];
//   let maximum =
//     unique.length >= 3
//       ? unique[2]
//       : unique.reduce((a, b) => {
//           return Math.max(a, b);
//         });
//   return maximum;
// };

var thirdMax = function (nums) {
  let uniqueNums = new Set(nums);
  let uniqueNums1 = new Set(nums);
  console.log(uniqueNums);
  let maximum1 = Math.max(...uniqueNums);
  uniqueNums.delete(maximum1);
  console.log(maximum1);
  let maximum2 = Math.max(...uniqueNums);
  uniqueNums.delete(maximum2);
  console.log(maximum2);
  let maximum3 = Math.max(...uniqueNums);
  uniqueNums.delete(maximum3);
  console.log(maximum3);
  console.log(uniqueNums.size);
  let maximum = uniqueNums1.size >= 3 ? maximum3 : maximum1;

  return maximum;
};
console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([1, 1, 2]));
