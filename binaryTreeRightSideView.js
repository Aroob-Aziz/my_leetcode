class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// var rightSideView = function (root) {
//   if (!root) return [];
//   let queue = [root];
//   let result = [];

//   while (queue.length) {
//     let size = queue.length;
//     let levelNodes = [];
//     while (size > 0) {
//       let current = queue.shift();
//       levelNodes.push(current.val);
//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//       size--;
//     }
//     result.push(levelNodes[levelNodes.length - 1]);
//   }
//   return result;
// };

var rightSideView = function (root) {
  let levelNodes = [];
  let getLevelNodes = function (node, level) {
    if (!node) return [];
    if (levelNodes[level]) levelNodes[level].push(node.val);
    else {
      levelNodes[level] = [node.val];
    }

    getLevelNodes(node.left, level + 1);
    getLevelNodes(node.right, level + 1);
  };
  getLevelNodes(root, 0);
  return levelNodes.map((subarray) => subarray[subarray.length - 1]);
};

console.log(
  rightSideView(
    new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))
  )
);
