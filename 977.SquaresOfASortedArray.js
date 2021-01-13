// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
  let result = []
  let head = 0
  let tail = nums.length - 1
  
  for(const i of nums) {
    if(nums[head]**2 > nums[tail]**2) {
      // increase head after push
      result.push(nums[head++]**2)
    } else {
      // decrease tail after push
      result.push(nums[tail--]**2)
    }
  }
  /*
  for(const i of nums) {
    if(nums[head]**2 > nums[tail]**2) {
      // increase head after push
      result.push(nums[head++]**2)
    } else {
      // decrease tail after push
      result.push(nums[tail--]**2)
    }
  }
  */
  
  return result.reverse()
};