/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const reverseString1 = (str) => str.split('').reverse().join('');

const reverseString2 = (str) => [...str].reverse().join('');

const isPalindrome1 = (str) => str === reverseString1(str);

const isPalindrome2 = (str) => {
  const arr = [...str];
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - i]) return false;
  }
  return true;
};

module.exports = { reverseString1, reverseString2, isPalindrome1, isPalindrome2 };
