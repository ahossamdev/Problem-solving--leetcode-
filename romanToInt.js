// var romanToInt = function (s) {
//   let romanWords = s.split("");
//   let temp = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let special = {
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   let sumCount = 0;
//   let subCount = 0;
//   let i = 0;
//   for (i; i < romanWords.length; i++) {
//     let specialChar = romanWords[i] + romanWords[i + 1];
//     if (special[specialChar] != undefined) {
//       subCount += temp[romanWords[i]];
//       i++;
//     }
//     sumCount += temp[romanWords[i]];
//   }
//   return sumCount - subCount;
// };

const values = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

// second solut :-
var romanToInt = function (s) {
  let current = 0;
  let previous = 0;
  let result = 0;
  for (const char of s.split("").reverse()) {
    current = values.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));
