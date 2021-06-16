/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) {
       return nums.length
    }
    
    let i = 0
    let j = 0
    
    for(let k = 1; k < nums.length; k++) {
        
        // invalid - we already found 2 instances
        if(i !== j && nums[k] === nums[j]) {
           continue
        }
        
        
        // apply to i - first instance
        if(nums[i] !== nums[k]) {
            i = j+1
            nums[i] = nums[k]
            j = i
            
            continue
        }
        
        
        // apply to j - second instance
        if(nums[j] === nums[k]) {
            j = j+1
            nums[j] = nums[k]
        }
        
    }
    
    return j+1
};