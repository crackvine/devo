/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const kPairs1 = (arr, K) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const val1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const val2 = arr[j];
      if (val1 + val2 === K) count += 1;
    }
  }

  return count;
};

module.exports = { kPairs1 };
