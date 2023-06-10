// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//solution :-

var climbStairs = function (n) {
  // first step
  let prev1 = 1;
  // second step
  let prev2 = 1;
  let current;
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2; // step i'm standing right now
    prev1 = prev2; // updating prevprev step to prev step
    prev2 = current; // step i'm standing is current
  }
  return current;
};
console.log(climbStairs(7));

// var climbStairs = function (n) {
//     let prev1 = 1;
//     let prev2 = 2;
//     let current;
//     if(n ===2) return 2;
//     if(n ===1) return 1;
//     for (let i = 3; i <= n; i++) {
//         current = prev1 + prev2;
//         prev1 = prev2;
//         prev2 = current;
//     }
//     return current;
// };
