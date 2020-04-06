import { TfIdf, PorterStemmer } from 'natural';
import track from './src/find/track';
// import play from './src/player/play';
// import pause from './src/player/pause';

const { attach, tokenizeAndStem } = PorterStemmer;

let lastMeasure = 0;
let importantWord = '';

process.argv.shift();
process.argv.shift();

const argument = process.argv.join(" ");
const tfidf = new TfIdf();
tfidf.addDocument(argument);

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

// album(importantWord);
track(importantWord);
// play();
// pause();
