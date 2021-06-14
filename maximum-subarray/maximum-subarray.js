/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
      var len = nums.length;
      var max = Number.MIN_SAFE_INTEGER;
      var before = 0;
      var now = 0;

      if (!len) return 0;

      for (var i = 0; i < len; i++) {
        now = Math.max(before + nums[i], nums[i]);
        max = Math.max(now, max);
        before = now;
      }

      return max;
};