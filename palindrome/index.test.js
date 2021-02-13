const { reverseString1, isPalindrome } = require('./index');

const testCases = [
  { original: 'Hello', reversed: 'olleH', isPalindrome: false },
  { original: 'abcdefghijklmnopqrstuvwxyz', reversed: 'zyxwvutsrqponmlkjihgfedcba', isPalindrome: false },
  { original: 'esta mañana he tomado 4 cafés', reversed: 'séfac 4 odamot eh anañam atse', isPalindrome: false },
  { original: '12121', reversed: '12121', isPalindrome: true },
  { original: 'Ññçv&$!k1¨Ç´{&$}[))(())]', reversed: ']))(())[}$&{´Ç¨1k!$&vçñÑ', isPalindrome: false },
  { original: '909/070/909', reversed: '909/070/909', isPalindrome: true },
];

test('should give inverse of sample strings', () => {
  testCases.forEach((testCase) => {
    expect(reverseString1(testCase.original)).toEqual(testCase.reversed);
  });
});

test('should correctly identify palindromes of sample set', () => {
  testCases.forEach((testCase) => {
    expect(isPalindrome(testCase.original)).toBe(testCase.isPalindrome);
  });
});
