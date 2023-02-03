var uncommonFromSentences = function (s1, s2) {
  let newStr = s1.split(" ").concat(s2.split(" "));
  let mapSTr = {};
  let arr = [];
  for (let i of newStr) {
    if (!mapSTr[i]) {
      mapSTr[i] = 1;
    } else {
      mapSTr[i]++;
    }
  }
  for (let i in mapSTr) {
    if (mapSTr[i] === 1) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
