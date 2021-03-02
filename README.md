# Coding Challenges

## 1. Palindrome

---

### Challenge

Write an efficient algorithm to check if a string is a palindrome. A string is a palindrome if the string matches the reverse of string. 

---

### Notes

O(n<sup></sup>)) time complexity since the array of characters is only traversed a single time (function isPalindrome2)

### Usage

cd into the ``palindrome`` folder

Setup and check: ``npm install && npm run test``

Launch: ``node index.js``

The prompt takes an input string and returns whether it is a palindrome

## 2. K-complimentary pairs

---
### Challenge 

Write an efficient algorithm to find K-complementary pairs in a given array of integers.
Given Array A, pair (i, j) is K- complementary if K = A[i] + A[j];

---

### Notes

In this implementation each pair on every occurance (for example, K=3 and [3,3,3] yields 3 pairs). 

O(n<sup>2</sup>) time complexity due to the nested loop
### Usage

cd into the ``k-pairs`` folder

Setup and check: ``npm install && npm run test``

The script takes an input space separated sequence of integers and a K and returns the number of K-complimentary pairs in the array.

Launch command with K as first argument and a space separated list of numbers as the second argument.

For example, to check for K = 10 and numbers [3,3,4,5,3,2]: ``node index.js 10 "3 3 4 5 3 2" ``

## 3. TF/IDF

---

### Challenge

Tf/idf (term frequency / inverse document frequency) is a statistic that reflects the importance of a term T in a document D (or the relevance of a document for a searched term) relative to a document set S.

See https://en.wikipedia.org/wiki/Tf%E2%80%93idf 

Tf/idf can be extended to a set of terms TT adding the tf/idf for each term. 

Assume that we have a directory D containing a document set S, with one file per document. Documents will be added to that directory by external agents,but they will never be removed or overwritten. We are given a set of terms TT, and asked to compute the tf/idf of TT for each document in D, and report the N top documents sorted by relevance. 

The program must run as a daemon/service that is watching for new documents, and dynamically updates the computed tf/idf for each document and the inferred ranking. 

The program will run with the parameters:
- The directory D where the documents will be written. 
- The terms TT to be analyzed. 
- The count N of top results to show. 
- The period P to report the top N. (i.e. results refreshed every P milliseconds (or seconds))

For example: ./tdIdf -d dir -n 5 -p 300 -t "password try again"

---

### Notes

In this implementation:

The term frequency TF is considered to be :

 ``number of times the word appears in the document / total number of words in the document``

The inverse document frequency IDF is considered to be (1 is added to the denominator to avoid divide by zero) :

`` ln (total number of documents / (1 + number of documents in which the term appears at least once))``

The implementation could be improved for example by only recalculating values if a new document is added, and including pre-processing of the document text content to remove elements directly adjacent to words such as bibliography references etc.

### Usage

cd into the ``tf-idf`` folder

Create a file named ``.env`` with the following content (I found having default values useful during development):

```
DEFAULT_DOCUMENTS_PATH='./documents'
DEFAULT_SCAN_PERIOD=5
DEFAULT_LIST_LENGTH=3
```
Setup and check: ``npm install && npm run test``

Launch with default values defined above and the set of terms "like my monkey":

``node ./src/app -t "like my monkey"``

Example launch command specifying all variables:

``node ./src/app -d './someOtherFolder' -t "like my monkey" -n 5 -p 30``

Command line parameters as follows: 

|param|description|
|---|---|
|d|path to folder containing documents|
|t|list of search terms, separated by spaces|
|n|number of highest rated docs to display (1 - 10)|
|p|period with which to scan the folder d (1 - 60 seconds)|
