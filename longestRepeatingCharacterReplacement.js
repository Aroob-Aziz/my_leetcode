var characterReplacement = function (s, k) {
  let ws = 0;
  let highestFrequencyLetter = 0;
  let maximumLength = Number.NEGATIVE_INFINITY;
  let obj = {};
  for (let we = 0; we < s.length; we++) {
    if (!obj[s[we]]) {
      obj[s[we]] = 1;
    } else {
      obj[s[we]]++;
    }
    highestFrequencyLetter = Math.max(highestFrequencyLetter, obj[s[we]]);

    if (we - ws + 1 - highestFrequencyLetter > k) {
      obj[s[ws]] -= 1;
      ws++;
    }
    maximumLength = (maximumLength, we - ws + 1);
  }
  return maximumLength;
};
