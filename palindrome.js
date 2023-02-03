var isPalindrome = function (x) {
  let reversed = x.toString().split("").reverse().join("");
  return x.toString() === reversed ? true : false;
};

console.log(isPalindrome(-121));
