```js
function processInput(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

function backspaceCompare(s, t) {
  let s1 = processInput(s);
  let s2 = processInput(t);
  return s1 === s2;
}
```;

// console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
