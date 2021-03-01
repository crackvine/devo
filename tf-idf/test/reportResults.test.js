const reportResults = require('../src/reportResults');

const results1 = [
  { name: 'doc1.txt', totalTfIdf: 0.001 },
  { name: 'doc2.txt', totalTfIdf: 0.006 },
  { name: 'doc3.txt', totalTfIdf: 0.003 },
];

const results2 = [
  { name: 'doc1.txt', totalTfIdf: 0.001 },
  { name: 'doc2.txt', totalTfIdf: 0.006 },
  { name: 'doc3.txt', totalTfIdf: 0.003 },
  { name: 'doc4.txt', totalTfIdf: 0.002 },
  { name: 'doc5.txt', totalTfIdf: 0 },
  { name: 'doc6.txt', totalTfIdf: 0.1 },
  { name: 'doc7.txt', totalTfIdf: 0.0001 },
];

describe('reportResults tests', () => {
  test('should generate expected output for results1 and N=10', () => {
    console.info = jest.fn();
    reportResults(results1, 10);
    expect(console.info).toHaveBeenCalledWith('Top 10 results: ');
    expect(console.info).toHaveBeenCalledWith('doc2.txt -> 0.006');
    expect(console.info).toHaveBeenCalledWith('doc3.txt -> 0.003');
    expect(console.info).toHaveBeenCalledWith('doc1.txt -> 0.001');
    expect(console.info).toHaveBeenCalledWith('--------------------');
  });

  test('should generate expected output for results2 and N=3', () => {
    console.info = jest.fn();
    reportResults(results2, 3);
    expect(console.info).toHaveBeenCalledWith('Top 3 results: ');
    expect(console.info).toHaveBeenCalledWith('doc6.txt -> 0.1');
    expect(console.info).toHaveBeenCalledWith('doc2.txt -> 0.006');
    expect(console.info).toHaveBeenCalledWith('doc3.txt -> 0.003');
    expect(console.info).toHaveBeenCalledWith('--------------------');
  });
});
