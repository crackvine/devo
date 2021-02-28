const readline = require('readline');
const { isPalindrome2 } = require('./palindrome');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PALINDROME> ',
});

rl.prompt();

rl.on('line', (line) => {
  const result = isPalindrome2(line);
  console.log(`${line} ${result ? 'IS' : 'IS NOT'} a palindrome`);
  rl.prompt();
});
