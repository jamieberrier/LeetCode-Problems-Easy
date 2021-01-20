/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  /*
    Runtime: 80 ms, faster than 76.42% of JavaScript submissions
    Memory Usage: 38.9 MB, less than 67.91% of JavaScript submissions
  */

  // edge cases
  if(arr.length == 0) return false
  
  let elements = []
  
  // search
      // if found, return true
  for(let i = 0; i < arr.length; i++) {
      if(elements.includes(2 * arr[i])) return true
      
      if(arr[i] % 2 === 0) {
          if(elements.includes(arr[i] / 2)) return true
      }
      elements[i] = arr[i]
  }
  
  // not found, return false
  return false
};