// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// var majorityElement = function (nums) {
//   const majorityLenth = nums.length / 2;
//   const elementCountContainer = {};
//   for (let i = 0; i < nums.length; i++) {
//     let singleNumber = nums[i];
//     if (!elementCountContainer.hasOwnProperty(singleNumber)) {
//       elementCountContainer[singleNumber] = 1;
//     } else {
//       elementCountContainer[singleNumber] =
//         elementCountContainer[singleNumber] + 1;
//     }
//   }
//   for (const [number, repeat] of Object.entries(elementCountContainer)) {
//     if (repeat > majorityLenth) return number;
//   }
// };
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

var majorityElement = function (nums) {
  const majorityLenth = nums.length / 2;
  const sortedElements = nums.sort();
  const elementCountContainer = {};
  let count = 1;
  let previous = sortedElements[0];
  for (let i = 1; i < sortedElements.length; i++) {
    if (previous === sortedElements[i]) {
      count++;
    } else {
      elementCountContainer[previous] = count;
      count = 1;
    }
    previous = sortedElements[i];
  }
  elementCountContainer[previous] = count;
  for (const [number, repeat] of Object.entries(elementCountContainer)) {
    if (repeat > majorityLenth) return number;
  }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
