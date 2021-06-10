/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let newArr = x.toString().split('');
    // solution 1
    // let half = Math.floor(newArr.length / 2);
    // let left = '';
    // let right = '';
    // if (newArr.length == 1) {
    //     return true;
    // }
    // for (let i = 0; i < half; i++) {
    //     left += newArr[i];
    // }

    // for (let j = newArr.length - 1; j > half; j--) {
    //     right += newArr[j];
    // }

    // if (left == right) {
    //     return true;
    // } else {
    //     return false;
    // }

    // solution 2
    let newInt = '';
    for (let i = newArr.length - 1; i >= 0; i--) {
        newInt += newArr[i];
    }
    if (x == parseInt(newInt)) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

