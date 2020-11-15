// script.js
// You need to npm install an-array-of-english-words before wordList will become available to you. :)
const wordList = require('an-array-of-english-words');
const makeSense = ['I', 'Hate', 'Love', 'When', 'Let', 'Me', 'Eat', 'Together', 'Alone', 'Forever', 'With', 'Vacation', 'Jail', 'Go', 'With', 'Music', 'Cool', 'Hands', 'Feet', 'Smell'];

const getRandWords = () => {
    let words = [];

    for (let i=0;i<3;i++) {
        let numWordList = Math.floor(Math.random() * wordList.length);
        let numMakeSense = Math.floor(Math.random() * makeSense.length);
        words.push(makeSense[numMakeSense]);
        words.push(wordList[numWordList]);
    }

    return words;
};

words = getRandWords();
console.log(words.join(' '));