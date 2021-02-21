const {
  termCount,
  wordCount,
  termFrequency,
  inverseDocumentFrequency,
} = require('./docStats.js');

const sampleDocOne = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`;

const sampleDocTwo = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

LoremLorem ipsumipsum

`;

describe('termCount tests', () => {
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

  test('should return the correct term count for "" within sample documents', () => {
    expect(termCount('', sampleDocOne)).toBe(0);
    expect(termCount('', sampleDocTwo)).toBe(0);
  });
});

describe('wordCount tests', () => {
  test('should return correct number of words for sample documents', () => {
    expect(wordCount(sampleDocOne)).toBe(128);
    expect(wordCount(sampleDocTwo)).toBe(46);
  });
});

describe('termFrequency tests', () => {
  test('should return expected term frequency for "ipsum" in sample docs', () => {
    expect(termFrequency('ipsum', sampleDocOne)).toBe(3 / 128);
    expect(termFrequency('ipsum', sampleDocTwo)).toBe(2 / 46);
  });

  test('should return expected term frequency for "unknown" in sample docs', () => {
    expect(termFrequency('unknown', sampleDocOne)).toBe(1 / 128);
    expect(termFrequency('unknown', sampleDocTwo)).toBe(0);
  });
});

describe('inverseDocumentFrequency tests', () => {
  test('should return expected inverse document frequency for "ipsum" in sample docs', () => {
    expect(inverseDocumentFrequency('ipsum', [sampleDocOne, sampleDocTwo])).toBe(Math.log(1));
  });
  test('should return expected inverse document frequency for "unknown" in sample docs', () => {
    expect(inverseDocumentFrequency('unknown', [sampleDocOne, sampleDocTwo])).toBe(Math.log(2));
  });
  test('should return expected inverse document frequency for "superman" in sample docs', () => {
    expect(inverseDocumentFrequency('superman', [sampleDocOne, sampleDocTwo])).toBe(Math.log(Infinity));
  });
  test('should return null inverse document frequency for "" in sample docs', () => {
    expect(inverseDocumentFrequency('', [sampleDocOne, sampleDocTwo])).toBe(null);
  });
  test('should return null inverse document frequency for "term" with no sample docs', () => {
    expect(inverseDocumentFrequency('term', [])).toBe(null);
  });
});
