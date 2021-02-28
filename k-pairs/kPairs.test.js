const { kPairs1 } = require('./kPairs');

const testCases = [
  // { arr: [1, 2, 3], K: 10, numPairs: 0 },
  // { arr: [1, 2, 3], K: 5, numPairs: 1 },
  { arr: [3, 3, 3], K: 6, numPairs: 3 },
  // { arr: [3, 5, 5, 2, 1, 7, 8, 9, 4, 4, 3], K: 10, numPairs: 5 },
  // { arr: [3, 5, 5, 2, 1, 7, 8, 9, 4, 4, 3], K: 6, numPairs: 5 },
  // { arr: [3, 5, 5, 2, 1, 7, 8, 9, 4, 4, 3], K: 3, numPairs: 1 },
];

test('kpairs1 should give correct number of k-complementary pairs for sample sets', () => {
  testCases.forEach((testCase) => {
    expect(kPairs1(testCase.arr, testCase.K)).toEqual(testCase.numPairs);
  });
});
