const palindromes = function (text) {
    const alphanumerical = "1234567890qwertyuiopasdfghjklzxcvbnm";
    const cleanedText = text
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;

};

console.log(palindromes("racecars"));

// Do not edit below this line
module.exports = palindromes;
