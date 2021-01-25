// Given two strings s and t , write a function to determine if t is an anagram of s.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // check if string lengths are equal, return false if not
  if(s.length !== t.length) return false
  
  //  create object for each string
  let sCounter = {}
  let tCounter = {}
  
  // loop over 1st string and add to object
  for(let char of s) {
    sCounter[char] = ++sCounter[char] || 1
  }
  
  // loop over 2nd string and add to object
  for(let char of t) {
    tCounter[char] = ++tCounter[char] || 1
  }
  
  // loop over 2nd string's object and compare to 1st string's object
  for(let key in tCounter) {
    // check if key exists, return false if not
    if(!(key in sCounter)) return false
    // check if values match, return false if not
    if(tCounter[key] !== sCounter[key]) return false
  }
  // if make it thru loop, return true
  return true;
};

// Runtime: 92 ms, faster than 82.68% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 41.6 MB, less than 44.70% of JavaScript online submissions for Valid Anagram.