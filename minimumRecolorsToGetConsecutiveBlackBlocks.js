var minimumRecolors = function (blocks, k) {
  let minimumCount = Number.MAX_VALUE;
  let count = 0;
  let ws = 0;

  for (let we = 0; we < blocks.length; we++) {
    if (blocks[we] == "W") {
      count++;
    }
    if (we >= k) {
      if (blocks[ws] === "W") {
        count--;
      }
      ws++;
    }
    if (we - ws + 1 === k) minimumCount = Math.min(minimumCount, count);
  }

  return minimumCount;
};

// console.log(minimumRecolors("WBWBBBW", 2));

console.log(minimumRecolors("WBBWWBBWBW", 7));
// console.log(minimumRecolors("WBWBBBW", 2));
