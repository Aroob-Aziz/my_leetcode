var backspaceCompare = function (s, t) {
  let arrs = s.split("");
  let arrt = t.split("");
  let f, g;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && i > -1) {
      f = arrs.slice(0, i - 1) + arrs.slice(i + 1);
      console.log("f", f);
    }
  }
  console.log("arrs", arrs);
  console.log(f.replace(/,/g, ""));
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      // arrt.splice(i - 1, 2);
      g = arrt.slice(0, i - 1) + arrt.slice(i + 1, t.length - 1);
      console.log(g);
    }
  }
  //   console.log(arrt);
  console.log(g.replace(/,/g, ""));

  if (arrs.join("") === arrt.join("")) {
    return true;
  }
  return false;
};
console.log(backspaceCompare("ab##", "c#d#"));

// console.log(backspaceCompare("ab#c", "ad#c"));
