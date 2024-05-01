function checkVowel(str, vowels) {
    let presentVowels = vowels.filter(vowel => str.toLowerCase().includes(vowel));
    if (presentVowels.length > 0) {
        return `Vowels ${presentVowels.map(v => v.toUpperCase()).join(', ')} are present in the string.`;
    } else {
        return `None of the specified vowels are present in the string.`;
    }
}

let input = "red and white";
let vowelToCheck = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];

let result = checkVowel(input, vowelToCheck);
console.log(result);
