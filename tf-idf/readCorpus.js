const fs = require('fs');
const path = require('path');

module.exports = (docPath) => {
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
  return corpus;
};
