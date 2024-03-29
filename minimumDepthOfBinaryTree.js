/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0 
    if (!root.left && !root.right) return 1 
     minLeftDepth = Number.MAX_VALUE
     minRightDepth = Number.MAX_VALUE
    if (root.left) minLeftDepth = minDepth(root.left)
    if (root.right) minRightDepth = minDepth(root.right)
    return 1 + Math.min(minLeftDepth, minRightDepth)
 };