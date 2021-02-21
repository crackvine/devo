const { termCount, wordCount, termFrequency } = require('./docStats.js');

const sampleDocOne = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`;

const sampleDocTwo = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

LoremLorem ipsumipsum

`;

test('should return the correct term count for "unknown" within sample documents', () => {
  expect(termCount('unknown', sampleDocOne)).toBe(1);
  expect(termCount('unknown', sampleDocTwo)).toBe(0);
});

test('should return the correct term count for "ipsum" within sample documents', () => {
  expect(termCount('ipsum', sampleDocOne)).toBe(3);
  expect(termCount('ipsum', sampleDocTwo)).toBe(2);
});

test('should return the correct term count for "lorem" within sample documents', () => {
  expect(termCount('lorem', sampleDocOne)).toBe(3);
  expect(termCount('lorem', sampleDocTwo)).toBe(2);
});

test('should return the correct term count for "superman" within sample documents', () => {
  expect(termCount('superman', sampleDocOne)).toBe(0);
  expect(termCount('superman', sampleDocTwo)).toBe(0);
});

test('should return correct number of words for sample documents', () => {
  expect(wordCount(sampleDocOne)).toBe(128);
  expect(wordCount(sampleDocTwo)).toBe(46);
});

