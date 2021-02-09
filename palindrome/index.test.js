const { reverseString1, isPalindrome } = require('./index');

const sample1 = 'hello';
const reversed1 = 'olleh';

const sample2 = 'abcdefghijklmnopqrstuvwxyz';
const reversed2 = 'zyxwvutsrqponmlkjihgfedcba';

const sample3 = 'esta mañana he tomado 3 cafés';
const reversed3 = 'séfac 3 odamot eh anañam atse';

const sample4 = '12121';
const reversed4 = '12121';

const sample5 = 'Ññçv&$!k1¨Ç´{&$}[))(())]';
const reversed5 = ']))(())[}$&{´Ç¨1k!$&vçñÑ';

const sample6 = '909/070/909';
const reversed6 = '909/070/909';

test('should give inverse of sample strings', () => {
  expect(reverseString1(sample1)).toEqual(reversed1);
  expect(reverseString1(sample2)).toEqual(reversed2);
  expect(reverseString1(sample3)).toEqual(reversed3);
  expect(reverseString1(sample4)).toEqual(reversed4);
  expect(reverseString1(sample5)).toEqual(reversed5);
  expect(reverseString1(sample6)).toEqual(reversed6);
});

test('should correctly identify palindromes of sample set', () => {
  expect(isPalindrome(sample1)).toBe(false);
  expect(isPalindrome(sample2)).toBe(false);
  expect(isPalindrome(sample3)).toBe(false);
  expect(isPalindrome(sample4)).toBe(true);
  expect(isPalindrome(sample5)).toBe(false);
  expect(isPalindrome(sample6)).toBe(true);
});
