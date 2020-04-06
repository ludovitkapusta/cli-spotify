import { TfIdf, PorterStemmer, BayesClassifier } from 'natural';
import track from './src/find/track';
// import play from './src/player/play';
import pause from './src/player/pause';

const { attach, tokenizeAndStem } = PorterStemmer
const classifier = new BayesClassifier();

classifier.addDocument('play', 'play')
classifier.addDocument('plai', 'play')
// classifier.addDocument('play song', 'play')
classifier.addDocument('paus', 'pause')
classifier.addDocument('paus song', 'pause')

classifier.train();

let lastMeasure = 0;
let importantWord = '';

process.argv.shift();
process.argv.shift();
const argument = process.argv.join(" ");
const tfidf = new TfIdf();
tfidf.addDocument(argument);

const category = classifier.classify(argument);

attach();
const tokens = tokenizeAndStem(argument);
console.log(tokens);

tokens.forEach((token: string) => {

  tfidf.tfidfs(token, (i: number, measure: number) => {
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

console.log(category)

switch(category) {
  case 'play': {
    track(importantWord)
    break;
  }
  case 'pause': {
    pause()
    break;
  }
  default: break;
}

// album(importantWord);
// track(importantWord);
// play();
// pause();
