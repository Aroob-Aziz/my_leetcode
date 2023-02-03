// var uniqueMorseRepresentations = function (words) {
//   let morse = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//   };

//   let unique = new Set();
//   for (let i = 0; i < words.length; i++) {
//     let str = "";
//     let wordSplit = words[i];
//     for (let j = 0; j < wordSplit.length; j++) {
//       str += morse[wordSplit[j]];
//     }
//     unique.add(str);
//   }
//   return unique.size;
// };
/**
 * @param {string[]} words
 * @return {number}
 */

//Alternate Code
var uniqueMorseRepresentations = function (words) {
  let arr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let char = 97;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[String.fromCharCode(char)] = arr[i];
      char++;
    }
  }
  let uniqueSet = new Set();
  for (let i = 0; i < words.length; i++) {
    let wordStr = words[i];
    let str = "";
    for (let j = 0; j < wordStr.length; j++) {
      str += obj[wordStr[j]];
    }
    uniqueSet.add(str);
  }

  return uniqueSet.size;
};
console.log(uniqueMorseRepresentations(["gin", "zen"]));
