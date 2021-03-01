require('dotenv').config();
const { setInterval } = require('timers');
const argv = require('minimist')(process.argv.slice(2));

const validateParams = require('./validateParams');
const readCorpus = require('./readCorpus');
const processCorpus = require('./processCorpus');
const reportResults = require('./reportResults');

// Command line arguments and defaults
const docPath = argv?.d ?? process.env.DEFAULT_DOCUMENTS_PATH;
const termsParam = argv?.t ?? '';
const terms = termsParam.split(' ').map((term) => term.trim()).filter((term) => term.length);
const scanPeriod = argv?.p ?? process.env.DEFAULT_SCAN_PERIOD;
const listItemsToShow = argv?.n ?? process.env.DEFAULT_LIST_LENGTH;

// Verify provided parameters
const errors = validateParams(docPath, terms, scanPeriod, listItemsToShow);
if (errors.length) {
  errors.map((error) => console.error(error));
  process.exit(0);
}

console.info(`
-----------------------------------------
Proceeding with the following parameters
-----------------------------------------
Corpus location: ${docPath}
Search terms: ${JSON.stringify(terms)}
Scan period: ${scanPeriod}s
Results to display: ${listItemsToShow}
-----------------------------------------
`);

// Loop process every scanPeriod seconds
setInterval(() => {
  const corpus = readCorpus(docPath);
  const results = processCorpus(corpus, terms);
  reportResults(results, listItemsToShow);
}, scanPeriod * 1000);
