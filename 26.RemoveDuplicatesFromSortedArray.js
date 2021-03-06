/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

Constraints:

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //   Runtime: 100 ms, faster than 55.54% of JavaScript online submissions for Remove Duplicates from Sorted Array.
  //    Memory Usage: 40.6 MB, less than 86.73% of JavaScript online submissions for Remove Duplicates from Sorted Array.
  if(nums.length === 0) return 0

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === nums[i+1]) nums.splice(i--, 1)
  }

  //   Runtime: 92 ms, faster than 81.55% of JavaScript online submissions for Remove Duplicates from Sorted Array.
  //   Memory Usage: 41.3 MB, less than 19.75% of JavaScript online submissions for Remove Duplicates from Sorted Array.

  // if(nums.length === 0) return 0
  // let i = 0
    
  //   nums.forEach(elem => {
  //       if (elem !== nums[i]) {
  //           nums[++i] = elem
  //       }
  //   })
    
  //   return i + 1
};