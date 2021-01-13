// Given an array nums of integers, return how many of them contain an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
  let evenCount = 0
  
  for(const i of nums) {
    if(i.toString().length % 2 === 0) {
      evenCount++
    }
  }
  
  return evenCount
};