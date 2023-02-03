//var levelOrder = function(root) {
// if (!root) return []
// let queue = [root]
// let finalResult = []

// function getLevelNodes (){
// let currSize = queue.length
// let result = []
// while (currSize > 0){
//     let current = queue.shift()
//     result.push(current.val)

//     if (current.left) queue.push(current.left)
//     if (current.right) queue.push(current.right)
//     currSize--
// }
// return result
// }

// while(queue.length){
// let levelNodes = getLevelNodes()
// finalResult.push()
// }
// return finalResult
//};//

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let levelNodes = [];
    let currSize = queue.length;

    while (currSize > 0) {
      let current = queue.shift();
      levelNodes.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      currSize--;
    }
    result.push(levelNodes);
  }
  return result;
};
