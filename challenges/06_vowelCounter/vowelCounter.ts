const vowels = ['a', 'e', 'i', 'o', 'u']

export function vowelCounter(sentence: string): string {
  const letters = sentence.split(''); 
  let vowelsCounted = 0;

  for (const letter of letters) {
    if (isVowel(letter)) {
      vowelsCounted += 1;
    } 
  }
  
  return `Your sentence have ${vowelsCounted} vowels!`;  
}

function isVowel(letter: string): boolean {
  return vowels.includes(letter.toLowerCase());
}
