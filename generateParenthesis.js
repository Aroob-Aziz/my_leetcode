// var generateParenthesis = function (n) {
//   return allPairs("(", 1, 0, [], n);
// };

// function allPairs(str, open, close, result, n) {
//   if (str.length === 2 * n) {
//     result.push(str);
//   }
//   if (open < n) allPairs(str + "(", open + 1, close, result, n);
//   if (close < open) allPairs(str + ")", open, close + 1, result, n);
//   return result;
// }
function generateParenthesis(n) {
  const combinations = [];
  generate("", 0, 0);
  return combinations;

  function generate(combination, open, closed) {
    if (closed === n) {
      combinations.push(combination);
      console.log(combinations);
    }
    if (open < n) generate(combination + "(", open + 1, closed);
    if (open > closed) generate(combination + ")", open, closed + 1);
  }
}
// console.log(allPairs("(", 1, 0, [], 3));
console.log(generateParenthesis(3));
