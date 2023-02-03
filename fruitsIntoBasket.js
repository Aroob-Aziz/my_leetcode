var totalFruit = function (fruits) {
  let fruitObj = {};
  let windowStart = 0;
  let maximum = Number.NEGATIVE_INFINITY;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if (!fruitObj[fruits[windowEnd]]) {
      fruitObj[fruits[windowEnd]] = 1;
    } else {
      fruitObj[fruits[windowEnd]]++;
    }

    while (Object.keys(fruitObj).length > 2) {
      fruitObj[fruits[windowStart]] -= 1;
      if (fruitObj[fruits[windowStart]] === 0) {
        delete fruitObj[fruits[windowStart]];
      }

      windowStart++;
    }

    maximum = Math.max(maximum, windowEnd - windowStart + 1);
  }

  return maximum;
};

console.log(totalFruit([0, 1, 2, 2]));
