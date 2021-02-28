const {
  reverseString1,
  reverseString2,
  isPalindrome1,
  isPalindrome2,
} = require('./palindrome');

const testCases = [
  { original: 'Hello', reversed: 'olleH' },
  { original: 'abcdefghijklmnopqrstuvwxyz', reversed: 'zyxwvutsrqponmlkjihgfedcba' },
  { original: 'esta mañana he tomado 4 cafés', reversed: 'séfac 4 odamot eh anañam atse' },
  { original: '12121', reversed: '12121' },
  { original: 'Ññçv&$!k1¨Ç´{&$}[))(())]', reversed: ']))(())[}$&{´Ç¨1k!$&vçñÑ' },
  { original: '909/070/909', reversed: '909/070/909' },
  { original: 'xXytXx', reversed: 'xXtyXx' },
  { original: 'FggF', reversed: 'FggF' },
];

test('reverseString1 should give inverse of sample strings', () => {
  testCases.forEach((testCase) => {
    expect(reverseString1(testCase.original)).toEqual(testCase.reversed);
  });
});

test('reverseString2 should give inverse of sample strings', () => {
  testCases.forEach((testCase) => {
    expect(reverseString2(testCase.original)).toEqual(testCase.reversed);
  });
});

test('isPalindrome1 should correctly identify palindromes of sample set', () => {
  testCases.forEach((testCase) => {
    expect(isPalindrome1(testCase.original)).toBe(testCase.original === testCase.reversed);
  });
});

test('isPalindrome2 should correctly identify palindromes of sample set', () => {
  testCases.forEach((testCase) => {
    expect(isPalindrome2(testCase.original)).toBe(testCase.original === testCase.reversed);
  });
});
