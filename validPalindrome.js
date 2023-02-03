var isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g;
  const newStr = s.replace(regex, "").toLowerCase();
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
