var finalValueAfterOperations = function (operations) {
  var finalValueAfterOperations = function (operations) {
    let final = 0;

    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "X++" || operations[i] === "++X") {
        final++;
      } else {
        final--;
      }
    }
    return final;
  };
};
