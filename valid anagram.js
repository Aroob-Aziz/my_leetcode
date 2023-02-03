var isAnagram = function (s, t) {
  let sObj = {};
  let tObj = {};

  for (let i of s) {
    if (!sObj[i]) {
      sObj[i] = 1;
    } else {
      sObj[i]++;
    }
  }
  for (let i of t) {
    if (!tObj[i]) {
      tObj[i] = 1;
    } else {
      tObj[i]++;
    }
  }

  let max = Object.keys(sObj).length > Object.keys(tObj).length ? sObj : tObj;

  for (let i in max) {
    if (sObj[i] !== tObj[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("dormitory", "dirty room"));
