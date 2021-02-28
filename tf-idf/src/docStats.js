// The number of times the term appears in a document
const termCount = (term, doc) => {
  if (term.length === 0) return 0;
  // Assuming the case of the search term is not relevant
  const termRegex = new RegExp(`\\b${term}\\b`, 'gi');
  return doc.match(termRegex)?.length ?? 0;
};

// The total number of words in a document
const wordCount = (doc) => {
  // Assuming that all words are preceded with whitespace of some type
  const matches = doc.match(/[^\s]+/g);
  return matches?.length ?? 0;
};

// TF: the number of times a word appears / total number of words
const termFrequency = (term, doc) => (
  wordCount(doc) > 0 ? termCount(term, doc) / wordCount(doc) : 0
);

// IDF: the log of (total number of documents / the number of documents containing the term plus 1)
const inverseDocumentFrequency = (term, docs) => {
  // Return null for non useful arguments
  if (term.length === 0 || !Array.isArray(docs) || docs.length === 0) return null;
  const docsContainingTerm = docs.filter((doc) => termCount(term, doc));
  // Infinity not useful as a result when 0 docs contain the term; add 1 to denominator
  return Math.log(docs.length / (1 + docsContainingTerm.length));
};

module.exports = {
  termCount,
  wordCount,
  termFrequency,
  inverseDocumentFrequency,
};
