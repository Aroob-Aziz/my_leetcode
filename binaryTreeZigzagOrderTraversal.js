class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let size = queue.length;
    let levelNodes = [];
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (result.length % 2 === 0) {
        levelNodes.push(current.val);
      } else {
        levelNodes.unshift(current.val);
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    // if (result.length % 2 === 0) {
    //   result.push(levelNodes);
    // } else {
    //   result.push(levelNodes.reverse());
    // }
    result.push(levelNodes);
  }
  return result;
};

console.log(
  zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9, new TreeNode(1), new TreeNode(2)),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
