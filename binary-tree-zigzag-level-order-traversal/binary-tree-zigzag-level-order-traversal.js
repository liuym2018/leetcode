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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
      const ans = []
      if (!root) {
        return ans
      }

      const q = [root]

      let step = 0
      while (q.length) {
        const max = q.length

        for (let i = 0; i < max; i++) {
          const item = q.pop()
          if (item) {
            ans[step] = ans[step] || []
            if (step % 2 === 0) {
              ans[step].push(item.val)
            } else {
              ans[step].unshift(item.val)
            }
            item.left && q.unshift(item.left)
            item.right && q.unshift(item.right)
          }
        }
        step++
      }

      return ans
};