// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Each element in the array appears twice except for one element which appears only once.

var singleNumber = function (nums) {
  // that container will contain the single unique number
  let uniqueContainer = {};

  for (let i = 0; nums.length > i; i++) {
    let number = nums[i];
    // checking if the selected number found previously inside container or not if found remove it if not add it with value : index(i)
    if (uniqueContainer[number] !== undefined) {
      delete uniqueContainer[number];
    } else {
      uniqueContainer[number] = i;
    }
  }

  // getting the first key inside the container
  let prop = Object.keys(uniqueContainer)[0];
  return prop;
};
console.log(singleNumber([1, 2, 3, 2, 1]));
