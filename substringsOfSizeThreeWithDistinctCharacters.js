// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

var countGoodSubstrings = function (s) {
  let obj = {};
  let k = 3;
  let count = 0;
  let ws = 0;
  for (let i = 0; i < s.length; i++) {
    while (obj[s[i]]) {
      delete obj[s[ws]];
      ws++;
    }

    obj[s[i]] = 1;
    console.log(obj);
    if (Object.keys(obj).length === 3) {
      count++;
      delete obj[s[ws]];
      ws++;
    }
  }

  return count;
};

// console.log(countGoodSubstrings("xyzzaz"));
// console.log(countGoodSubstrings("aababcabc"));
console.log(countGoodSubstrings("owuxoelszb"));
// let obj = { x: 1, y: 2, z: 1 };
// console.log(new Set(Object.values(obj)).size === 1);
