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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    console.log('root: ', root);
    if (root == null) {
        return true;
    }
    
    return checkSubTree(root.left, root.right);
};

var checkSubTree = function(leftSub, rightSub) {
    if(leftSub == null && rightSub == null) {
       return true;
    }
    if (leftSub == null || rightSub == null) {
        return false;
    }
    
    return (leftSub.val == rightSub.val && checkSubTree(leftSub.left, rightSub.right) && checkSubTree(leftSub.right, rightSub.left));
};