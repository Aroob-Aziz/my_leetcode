var isValid = function (s) {
  const parenthesis = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stk = [];
  for (const char of s) {
    if (parenthesis[char]) {
      stk.push(parenthesis[char]);
    } else if (stk.pop() !== char) {
      return false;
    }
  }
  return !stk.length;
};

console.log(isValid("({})"));
