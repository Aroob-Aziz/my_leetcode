// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function (s, indices) {
  let str = [];
  for (let i = 0; i < indices.length; i++) {
    str[indices[i]] = s.charAt(i);
  }
  return str.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 1, 2, 3]));
