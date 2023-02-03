var longestPalindrome = function (s) {
  let frequencyMap = {};
  let chCount = 0;
  let firstOdd = 0;
  for (let i of s) {
    if (!frequencyMap[i]) {
      frequencyMap[i] = 1;
    } else {
      frequencyMap[i]++;
    }
  }

  for (let i in frequencyMap) {
    if (frequencyMap[i] % 2) {
      if (!firstOdd) {
        chCount += frequencyMap[i];
        firstOdd = 1;
      } else {
        chCount += frequencyMap[i] - 1;
      }
    } else {
      chCount += frequencyMap[i];
    }
  }
  return chCount;
};

console.log(longestPalindrome("aabbcccddddd"));
