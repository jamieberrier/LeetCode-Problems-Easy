// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let result = []
  
  A.forEach(i => {
      // if even, add to beginning
      // if odd, add to end
      !(i % 2) ? result.unshift(i) : result.push(i)
  })
  
  return result
};