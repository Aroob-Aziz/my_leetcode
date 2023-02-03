var findAnagrams = function (s, p) {
  let sArray = new Array(26).fill(0);
  let pArray = new Array(26).fill(0);
  let startIndex = [];
  for (let i = 0; i < p.length; i++) {
    pArray[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    console.log("p", pArray);
  }
  for (let i = 0; i < s.length; i++) {
    sArray[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    console.log("s", sArray);

    if (i > p.length - 1) {
      let windowStart = s.charCodeAt(i - p.length) - "a".charCodeAt(0);
      sArray[windowStart]--;
    }

    let isAnagram = true;
    for (let i = 0; i < 26; i++) {
      if (sArray[i] !== pArray[i]) {
        isAnagram = false;
        break;
      }
    }
    if (isAnagram) {
      startIndex.push(i - p.length + 1);
    }
  }
  return startIndex;
};

// console.log(findAnagrams("aa", "bb"));
console.log(findAnagrams("cbaebabacd", "abc"));
