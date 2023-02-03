var merge = function (intervals) {
  let arr = intervals.sort((a, b) => a[0] - b[0]);
  let prev = arr[0];
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

console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ])
);
