const reverseString = function(str) {
    let letters = str.split('');
    let reversedLetters = letters.reverse();
    let reversedString = "";

    for (let i = 0; i < reversedLetters.length; i++) {
        reversedString += reversedLetters[i];
    }
    return reversedString;
};

// reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
