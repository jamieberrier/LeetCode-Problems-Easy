/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   // define variables to track the maximum number of 1s and the current number of 1s
   let maxOnes = 0, currentOnes = 0
   // traverse array
   for (const i of nums) {
    // assign maxOnes the greatest value, either previous maxOnes or currentOnes + i
    maxOnes = Math.max(maxOnes, currentOnes += i)
    // if i is 0, reset current to 0
    if (i === 0) currentOnes = 0
   }
   
   return maxOnes
};