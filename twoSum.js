// // first solutions :-
var twoSum = function (nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];
    if (nums.indexOf(number) !== -1 && nums.indexOf(number) !== i)
      return [i, nums.indexOf(number)];
  }
};
console.log(twoSum([3, 2, 4], 6));

// another soul:-
var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  let temp = {};

  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];
    if (temp[number] !== undefined) return [temp[number], i];
    temp[nums[i]] = i;
  }
  return temp;
};
console.log(twoSum([3, 2, 4], 6));
