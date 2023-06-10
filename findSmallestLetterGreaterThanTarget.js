// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

//solution :-
// let alpabet = {
//   a: 0,
//   b: 1,
//   c: 2,
//   d: 3,
//   e: 4,
//   f: 5,
//   g: 6,
//   h: 7,
//   i: 8,
//   j: 9,
//   k: 10,
//   l: 11,
//   m: 12,
//   n: 13,
//   o: 14,
//   p: 15,
//   q: 16,
//   r: 17,
//   s: 18,
//   t: 19,
//   u: 20,
//   v: 21,
//   w: 22,
//   x: 23,
//   y: 24,
//   z: 25,
// };

// solution 1:-
// var nextGreatestLetter = function (letters, target) {
//   let sortedLetters = [...letters, target].sort();
//   const alphabets = new Set(sortedLetters);
//   let previous = "";
//   for (const char of alphabets) {
//     if (previous === target) return char;
//     previous = char;
//   }
//   return letters[0];
// };
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));

// solution 2:-
var nextGreatestLetter = function (letters, target) {
  let start = 0,
    end = letters.length - 1;
  if (target >= letters[letters.length - 1]) return letters[0];

  while (end >= start) {
    let middle = Math.floor((end + start) / 2);
    if (letters[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return letters[start];
};
nextGreatestLetter(["c", "f", "j"], "d");
