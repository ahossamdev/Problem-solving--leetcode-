// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
// const parantheses = {
//   "(": ")",
//   "[": "]",
//   "{": "}",
// };
// var isValid = function (s) {
//   const inputParantheses = s.split("");
//   if (inputParantheses.length % 2 !== 0) return false;
//   for (let i = 0; i < inputParantheses.length; i++) {
//     console.log(i);
//     let parenthesesOpen = inputParantheses[i];
//     let parenthesesClose = inputParantheses[i + 1];
//     if (parantheses[parenthesesOpen] !== parenthesesClose) return false;
//     else {
//       i++;
//     }
//   }
//   return true;
// };
// console.log(isValid("()[]"));
const closed = {
  "]": "[",
  ")": "(",
  "}": "{",
};

var isValid = function (s) {
  const parenthesesStack = []; // push and pop
  const inputParantheses = s.split("");

  // making check if the first element of array is not an open brachet , or number of parentheses is odd :-
  if (inputParantheses.length % 2 !== 0) return false;

  for (let i = 0; i < inputParantheses.length; i++) {
    let inputChar = inputParantheses[i];

    // if it's open brachet we will push it into stack if it's closed brachet we will check the previous element in the
    // stack if it's open brachet or not if it's pop the open brachet from stack if not return false
    if (inputChar === "(" || inputChar === "[" || inputChar === "{") {
      parenthesesStack.push(inputChar);
    } else if (
      closed[inputChar] === parenthesesStack[parenthesesStack.length - 1]
    ) {
      parenthesesStack.pop();
    } else {
      return false;
    }
  }
  return parenthesesStack.length === 0;
};
console.log(isValid("[[]]")); //[ "[","(",")","]" ]
