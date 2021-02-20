const { reverseString1, isPalindrome } = require('./index');

const testCases = [
  { original: 'Hello', reversed: 'olleH' },
  { original: 'abcdefghijklmnopqrstuvwxyz', reversed: 'zyxwvutsrqponmlkjihgfedcba' },
  { original: 'esta mañana he tomado 4 cafés', reversed: 'séfac 4 odamot eh anañam atse' },
  { original: '12121', reversed: '12121' },
  { original: 'Ññçv&$!k1¨Ç´{&$}[))(())]', reversed: ']))(())[}$&{´Ç¨1k!$&vçñÑ' },
  { original: '909/070/909', reversed: '909/070/909' },
];

test('should give inverse of sample strings', () => {
  testCases.forEach((testCase) => {
    expect(reverseString1(testCase.original)).toEqual(testCase.reversed);
  });
});

test('should correctly identify palindromes of sample set', () => {
  testCases.forEach((testCase) => {
    expect(isPalindrome(testCase.original)).toBe(testCase.original === testCase.reversed);
  });
});
