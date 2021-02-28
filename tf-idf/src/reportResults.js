module.exports = (results, itemsToShow) => {
  if (results && results.length) {
    results.sort((a, b) => b.totalTfIdf - a.totalTfIdf);
    console.info(`Top ${itemsToShow} results: `);
    results.slice(0, itemsToShow).map((doc) => console.info(`${doc.name} -> ${doc.totalTfIdf}`));
    console.info('--------------------');
  }
};
