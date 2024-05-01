function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const Str = "red and white";

const vowelCount = countVowels(Str);

console.log("The number of vowels in '" + Str + "' is:", vowelCount);
