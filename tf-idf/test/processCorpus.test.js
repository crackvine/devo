const processCorpus = require('../src/processCorpus.js');

const sampleDocOne = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`;

const sampleDocTwo = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

LoremLorem ipsumipsum

`;

const sampleDocThree = `Conservative Grounds is a Florida coffee shop which opened in 2020 as a meeting spot for people on the political right.

The BBC's Anthony Zurcher spoke to its owner and patrons about why they felt they needed a "liberal-free zone".`;

const corpus = [
  {
    name: 'sampleDocOne',
    text: sampleDocOne,
  },
  {
    name: 'sampleDocTwo',
    text: sampleDocTwo,
  },
  {
    name: 'sampleDocThree',
    text: sampleDocThree,
  },
];

const termsOne = ['filler', 'text'];
const expectedResultTermsOne = [
  { name: 'sampleDocOne', totalTfIdf: ((1 / 128) * Math.log(3 / 2)) + ((3 / 128) * Math.log(3 / 3)) },
  { name: 'sampleDocTwo', totalTfIdf: ((0 / 46) * Math.log(3 / 2)) + ((1 / 46) * Math.log(3 / 3)) },
  { name: 'sampleDocThree', totalTfIdf: ((0 / 40) * Math.log(3 / 2)) + ((0 / 40) * Math.log(3 / 3)) },
];

const termsTwo = ['LoremLorem', 'ipsumipsum'];
const expectedResultTermsTwo = [
  { name: 'sampleDocOne', totalTfIdf: ((0 / 128) * Math.log(3 / 2)) + ((0 / 128) * Math.log(3 / 2)) },
  { name: 'sampleDocTwo', totalTfIdf: ((1 / 46) * Math.log(3 / 2)) + ((1 / 46) * Math.log(3 / 2)) },
  { name: 'sampleDocThree', totalTfIdf: ((0 / 40) * Math.log(3 / 2)) + ((0 / 40) * Math.log(3 / 2)) },
];

const termsThree = ['Florida', 'coffee'];
const expectedResultTermsThree = [
  { name: 'sampleDocOne', totalTfIdf: ((0 / 128) * Math.log(3 / 2)) + ((0 / 128) * Math.log(3 / 2)) },
  { name: 'sampleDocTwo', totalTfIdf: ((0 / 46) * Math.log(3 / 2)) + ((0 / 46) * Math.log(3 / 2)) },
  { name: 'sampleDocThree', totalTfIdf: ((1 / 40) * Math.log(3 / 2)) + ((1 / 40) * Math.log(3 / 2)) },
];

test('should calculate expected totalTfIdf for sample corpus and termsOne', () => {
  const results = processCorpus(corpus, termsOne);
  expect(results).toStrictEqual(expectedResultTermsOne);
});

test('should calculate expected totalTfIdf for sample corpus and termsTwo', () => {
  const results = processCorpus(corpus, termsTwo);
  expect(results).toStrictEqual(expectedResultTermsTwo);
});

test('should calculate expected totalTfIdf for sample corpus and termsThree', () => {
  const results = processCorpus(corpus, termsThree);
  expect(results).toStrictEqual(expectedResultTermsThree);
});
