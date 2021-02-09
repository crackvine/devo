const reverseString1 = (input) => input.split('').reverse().join('');

const isPalindrome = (input) => input === reverseString1(input);

module.exports = { reverseString1, isPalindrome };
