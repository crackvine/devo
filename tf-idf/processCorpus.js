const fs = require('fs');
const path = require('path');

const { termFrequency, inverseDocumentFrequency } = require('./docStats');

module.exports = (docPath, terms) => {
  if (!terms.length) {
    console.info('NO SEARCH TERMS PROVIDED');
    return null;
  }

  // Recover the corpus as an array of document objects
  let corpus = [];
  try {
    corpus = fs.readdirSync(docPath, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((file) => ({
        name: file.name,
        text: fs.readFileSync(path.join(docPath, file.name), { encoding: 'utf8' }),
      }));
  } catch (error) {
    console.error(`EXCEPTION SCANNING DOCUMENTS UNDER ${docPath} : ${error}`);
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
