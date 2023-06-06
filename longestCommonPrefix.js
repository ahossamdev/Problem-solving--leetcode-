// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let longestPrefix = strs[0];                                              // o(1)
  for (let i = 1; i < strs.length; i++) {                                   // o(n) * o(m)
    while (strs[i].indexOf(longestPrefix) !== 0) {  
      //o(n) * o(n)
      longestPrefix = longestPrefix.substring(0, longestPrefix.length - 1); 
      if (longestPrefix === "") {
        return "";
      }
    }
  }
  return longestPrefix;
};
console.log(longestCommonPrefix(["avfrsac", "avsspaspdas", "avuuuuuuuuuuuu"]));
