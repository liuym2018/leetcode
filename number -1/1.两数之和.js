/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let j = 0; j < nums.length; j++) {
        let remainNum = target - nums[j];
        if (map.has(remainNum) && map.get(remainNum) != j) {
            return [j, map.get(remainNum)];
        }
    }
    return;

};
// @lc code=end

