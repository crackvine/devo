const { kPairs1 } = require('./kPairs');

const argv = process.argv.slice(2);
const K = +argv[0];
const arr = argv[1].split(' ').map((x) => +(x.trim()));

console.log(`k-complimentary pairs for K of ${K} and numbers ${JSON.stringify(arr)} --> ${kPairs1(arr, K)} pairs`);
