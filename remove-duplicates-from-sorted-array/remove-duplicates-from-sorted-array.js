/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums == null) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
            j++;
        } else {
            j++
        }
    }
    return i + 1;
};