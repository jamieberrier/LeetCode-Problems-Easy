/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

Constraints:

0 <= n, m <= 200
1 <= n + m <= 200
nums1.length == m + n
nums2.length == n
-109 <= nums1[i], nums2[i] <= 109
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // index of nums1 last filled element
  let index1 = m - 1
  // index of nums2 last element
  let index2 = n - 1
  // index of nums1 last element/index for assignment/reassignment
  let newIndex = nums1.length - 1
  
  // while the index of nums2 is greater than or equal to 0
    // if the last of nums1 filled elements is greater than last element of nums2,
    // reassign element to end of nums1 and decrement
    // else assign nums 2 element to end of nums1 and decrement
    // decrement newIndex after assignment
  while(index2 >= 0) {
    nums1[newIndex--] = nums1[index1] > nums2[index2] 
      ? nums1[index1--] 
      : nums2[index2--]
  }
};