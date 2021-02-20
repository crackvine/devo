const termFrequency = (term, doc) => {
  // Assuming the case of the search term is not relevant
  const termRegex = new RegExp(`\\b${term}\\b`, 'gi');
  return doc.match(termRegex)?.length ?? 0;
};

module.exports = { termFrequency };
