// Takes in a string and returns the value of a word

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const getLetterValue = (letter) => ALPHABET.indexOf(letter) >= 0 ? ALPHABET.indexOf(letter) + 1 : 0;

export const getWordValue = (word) => {
    let lword = word.toLowerCase();
    return lword.split('').reduce((acc, currentValue , currentIndex) => {
        return acc + getLetterValue(lword[currentIndex]);
    }, 0)
}