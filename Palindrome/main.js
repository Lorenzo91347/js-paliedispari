'use strict'


const line = prompt('Please enter a word: ');

const value = checkPalindrome(line);


function checkPalindrome(string) {

    const length = string.length;

    for (let i = 0; i < length / 2; i++) {

        if (string[i] !== string[length - 1 - i]) {
            return `${string} is not a palindrome`;
        }
    }
    return `${string} is a palindrome`;

};

console.log(value);