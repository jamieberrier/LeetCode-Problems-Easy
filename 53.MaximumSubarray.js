// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  const n = nums.length
  // store the latest local_maximum 
  let localMax = 0
  // keep track of the maximum value of local_maximum, which in the end comes out to be the required output
  let globalMax = Number.NEGATIVE_INFINITY
  let i = 0
  // if array length is 1
  if(n === 1) {
    return nums[0]
  }
  
  while(i < n) {
    // Return the number with the highest value
    localMax = Math.max(nums[i], nums[i] + localMax)
    
    i++
    
    if (localMax > globalMax) {
      globalMax = localMax
    }
  }   

  return globalMax
};