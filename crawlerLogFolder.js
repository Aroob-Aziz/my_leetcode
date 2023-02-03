var minOperations = function (logs) {
  let directory = [];
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      directory.pop();
    } else if (logs[i] === "./") {
      continue;
    } else {
      directory.push([logs[i]]);
    }
  }
  return directory.length;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
