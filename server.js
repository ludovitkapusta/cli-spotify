#!/usr/bin/env node
var natural = require('natural');
const find = require('./api/Find');

let lastMeasure = 0;
let importantWord = '';

process.argv.shift();
process.argv.shift();

const argument = process.argv.join(" ");

TfIdf = natural.TfIdf,
tfidf = new TfIdf();

natural.PorterStemmer.attach();
tokens = argument.tokenizeAndStem();
console.log(tokens);

tfidf.addDocument(argument);

tokens.forEach(token => {
  tfidf.tfidfs(token, (i, measure) => {
    // console.log(i, measure);

    if(measure === lastMeasure){
      importantWord = `${importantWord} ${token}`;
    } else {
      if(measure > lastMeasure){
        importantWord = token;
      }
    }
    lastMeasure = measure;
    console.log(lastMeasure);
  });
});

find.album(importantWord);
// find.track(importantWord);