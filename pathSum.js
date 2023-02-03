class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// var hasPathSum = function (root, targetSum) {
//   let dfs = function (node, currSum) {
//     if (!node) return false;
//     currSum += node.val;
//     if (!node.left && !node.right) return currSum === targetSum;
//     return dfs(node.left, currSum) || dfs(node.right, currSum);
//   };

//   return dfs(root, 0);
// };

// let dfs1 = function (root) {
//   // let diameter = 0;

//   let findDiameter = function (node) {
//     if (!node) return 0;
//     let leftHeight = findDiameter(node.left);
//     let rightHeight = findDiameter(node.right);
//     // diameter = Math.max(diameter, leftHeight + rightHeight);
//     // return 1 + Math.max(leftHeight, rightHeight);
//     return [leftHeight, rightHeight];
//   };
//   let result = findDiameter(root);
//   return result;
// };

let treeHeight = function (root) {
  if (!root) return 0;
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
};

let subtreeheight = function (root) {
  // let diameter = 0;
  if (!root.left && !root.right) return [];
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);
  diameter = Math.max(diameter, leftHeight + rightHeight + 1);
  return diameter - 1;
};

console.log(
  subtreeheight(
    new TreeNode(
      9,
      new TreeNode(
        9,
        new TreeNode(
          6,
          new TreeNode(0, null, new TreeNode(-1)),
          new TreeNode(6, new TreeNode(-1), new TreeNode(-4))
        ),
        null
      ),
      new TreeNode(
        -7,
        new TreeNode(-6, new TreeNode(5)),
        new TreeNode(-6, new TreeNode(9, null, new TreeNode(-2)))
      )
    )
  )
);
