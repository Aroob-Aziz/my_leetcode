// var merge = function (intervals) {
//   let arr = intervals.sort((a, b) => a[0] - b[0]);
//   let prev = arr[0];
//   let newArr = [prev];
//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i][0] <= prev[1]) {
//       prev[1] = Math.max(prev[1], intervals[i][1]);
//     } else {
//       newArr.push(intervals[i]);
//       prev = intervals[i];
//     }
//   }
//   return newArr;
// };

// var insert = function (intervals, newInterval) {
//   let newArr = [...intervals, newInterval];
//   return merge(newArr);
// };

// var insert = function (intervals, newInterval) {
//   let start = 0;

//   while (intervals[start][0] <= newInterval[0]) {
//     start++;
//   }
//   intervals.splice(start, 0, newInterval);

//   let prev = intervals[0];
//   let newArr = [prev];
//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i][0] <= prev[1]) {
//       prev[1] = Math.max(prev[1], intervals[i][1]);
//     } else {
//       newArr.push(intervals[i]);
//       prev = intervals[i];
//     }
//   }
//   return newArr;
// };

var insert = function (intervals, newInterval) {
  if (!intervals.length) return newInterval;
  let start = 0;

  while (intervals[start][0] <= newInterval[0]) {
    start++;
  }
  intervals.splice(start, 0, newInterval);

  let prev = intervals[0];
  let newArr = [prev];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= prev[1]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      newArr.push(intervals[i]);
      prev = intervals[i];
    }
  }
  return newArr;
};

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );

// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );

console.log(insert([], [4, 8]));
