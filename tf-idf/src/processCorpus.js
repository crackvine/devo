const { termFrequency, inverseDocumentFrequency } = require('./docStats');

module.exports = (corpus, terms) => {
  if (!terms.length) {
    console.info('NO SEARCH TERMS PROVIDED');
    return null;
  }

  if (corpus.length) {
    console.info(`Processing ${corpus.length} documents...`);
    // Flat array of document text content for processing
    const documentTexts = corpus.map((doc) => doc.text);

    // Calculate the idfs, which are unchanging for this set of terms and docs
    const termsIdf = terms.reduce((acc, term) => (
      { ...acc, [term]: inverseDocumentFrequency(term, documentTexts) }
    ), {});

    const results = corpus.map((doc) => {
      // Sum of tfIdf for this doc
      const sumTfIdf = terms.reduce((total, term) => {
        const tfIdfThisTerm = termFrequency(term, doc.text) * termsIdf[term];
        return total + tfIdfThisTerm;
      }, 0);
      return { name: doc.name, totalTfIdf: sumTfIdf };
    });

    return results;
  }
  console.info('0 DOCUMENTS IN CORPUS');
  return null;
};
