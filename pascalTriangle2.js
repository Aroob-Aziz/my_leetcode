var getRow = function (rowIndex) {
  // pascal's triangle using dynamic programming
  let prev = [];
  let curr = [];
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curr[j] = 1;
      } else {
        curr[j] = prev[j - 1] + prev[j];
      }
    }
    prev = [...curr];
    console.log("p", prev);
    console.log("c", curr);
  }
  return prev;
  //     if (!rowIndex) return [[1]]
  //     let result = []
  //     for (let row = 0; row <= rowIndex; row++){
  //         let subarr = []
  //         for (let col = 0; col<=row; col++){
  //             if (col == 0 || col == row){
  //                 subarr.push(1)
  //             }
  //             else{
  //                 subarr.push(result[row-1][col] + result[row-1][col-1])
  //             }
  //         }
  //         result.push(subarr)
  //     }

  //  return result[rowIndex]
};
