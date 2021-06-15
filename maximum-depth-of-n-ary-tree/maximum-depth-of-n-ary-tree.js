/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    //if root is undefined, depth is 0
    if(!root) return 0
    // variable to store the maximum levels
    let max = 0
    //helper function to traverse the tree
    //recursively increment the levels by one
    const dfs = (node, levels) => {
       //compare levels and max to pass the maximum levels
        if(levels > max) max = levels
       //traverse all children of the current node
        for(let child of node.children){
           //increment the levels by one
            dfs(child, levels + 1);
        }
    }
    //when root is not null, the tree has at least one level,
    //so we pass down 1
    dfs(root, 1)
  
   //return the maximum levels
    return max
};