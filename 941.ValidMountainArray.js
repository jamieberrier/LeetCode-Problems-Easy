/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  // edge cases
  if(arr.length < 3) return false
  if(arr[0] > arr[1] || arr[arr.length - 1] > arr[arr.length - 2]) return false
  
  let valley
    // search
        // return true
    for(let i = 1; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]) {
            valley = i + 1
        } else {
            if(arr[valley] > arr[i]) return true
        }
    }
    
    return false
};