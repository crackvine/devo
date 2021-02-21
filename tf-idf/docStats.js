const termCount = (term, doc) => {
  // Assuming the case of the search term is not relevant
  const termRegex = new RegExp(`\\b${term}\\b`, 'gi');
  return doc.match(termRegex)?.length ?? 0;
};

const wordCount = (doc) => {
  // Assuming that all words are preceded with whitespace of some type
  const matches = doc.match(/[^\s]+/g);
  return matches?.length ?? 0;
};

const termFrequency = (term, doc) => (
  wordCount(doc) > 0 ? termCount(term, doc) / wordCount(doc) : 0
);

module.exports = { termCount, wordCount, termFrequency };
