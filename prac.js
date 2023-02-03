// let arr1 = [1, 4, 13].toString();
// let str = "hb7c3zs1gde6";
// let newarr = [];
// let maxLength = Math.max(arr1.length, str.length);
// for (let i = 0; i < maxLength; i++) {
//   newarr.push(arr1[i]);
//   newarr.push(str[i]);
// }
// console.log(newarr.join(""));

function isWaveArray(arr, n) {
  let result = true;

  /* Check the wave form
   * If arr[1] is greater than left and right
   * Same pattern will be followed by whole
   * elements, else reverse pattern
   * will be followed by array elements
   */
  if (arr[1] > arr[0] && arr[1] > arr[2]) {
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }

    // Check for last element
    if (result == true && n % 2 == 0) {
      if (arr[n - 1] <= arr[n - 2]) {
        result = false;
      }
    }
  } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }

    // Check for last element
    if (result == true && n % 2 == 0) {
      if (arr[n - 1] >= arr[n - 2]) {
        result = false;
      }
    }
  }

  return result;
}

console.log(isWaveArray([0, 1, 2, 4, 1, 1, 1], 7));
