/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    // if arr[i] === 0, splice and insert another 0
    if(arr[i] === 0) {
      arr.splice(++i, 0, 0)
      arr.splice(arr.length - 1, 1)
      //arr.pop()
    }
  }
};