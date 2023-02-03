// //brute force
// var diameterOfBinaryTree = function (root) {
//   let diameter = 0;
//   let treeHeight = function (node) {
//     if (!node) return 0;
//     let leftHeight = treeHeight(node.left);
//     let rightHeight = treeHeight(node.right);
//     return 1 + Math.max(leftHeight, rightHeight);
//   };

//   let getDiameter = function (root) {
//     if (!root) return 0;
//     let leftHeight = treeHeight(root.left);
//     let rightHeight = treeHeight(root.right);
//     diameter = Math.max(diameter, leftHeight + rightHeight);
//     getDiameter(root.left);
//     getDiameter(root.right);
//   };
//   getDiameter(root);
//   return diameter;
// };

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  let getDiameter = function (root) {
    if (!root) return 0;
    let leftHeight = getDiameter(root.left);
    let rightHeight = getDiameter(root.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  };
  getDiameter(root);
  return diameter;
};
