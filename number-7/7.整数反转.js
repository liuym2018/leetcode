/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let newArr = x.toString().split('');
    let result = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        result.push(newArr[i]);
    }
    if (newArr[0] == '-') {
        result.unshift('-');
    }
    let newNum = parseInt(result.join(''));
    if (newNum < Math.pow(-2, 31) || newNum > Math.pow(2, 31) - 1) {
        return 0;
    }
    return newNum;

};
// @lc code=end

