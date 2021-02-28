const fs = require('fs');

module.exports = (docPath, terms, scanPeriod, listItemsToShow) => {
  const errors = [];

  // Check file path is readable
  try {
    fs.accessSync(docPath, fs.constants.R_OK);
  } catch (error) {
    errors.push(`CORPUS PATH ${docPath} IS NOT READABLE : "${error}"`);
  }

  // Check scanPeriod is valid
  if (!Number.isInteger(+scanPeriod) || scanPeriod < 1 || scanPeriod > 60) {
    errors.push('PLEASE PROVIDE AN INTEGER BETWEEN 1 AND 60 (SECONDS) FOR SCAN PERIOD p');
  }

  // Check scanPeriod is valid
  if (!Number.isInteger(+listItemsToShow) || listItemsToShow < 1 || listItemsToShow > 10) {
    errors.push('PLEASE PROVIDE AN INTEGER BETWEEN 1 AND 10 FOR NUMBER OF ITEMS TO SHOW n');
  }

  // Terms parameter is a space separated list of words
  if (!terms.length) {
    errors.push('NO SEARCH ITEMS PROVIDED');
  }

  return errors;
};
