export function checkPalindrome(word: string): string {
  const sanitizedWord = word.toLowerCase().replace(/[^a-z]/, '');

  for (let i = 0, j = sanitizedWord.length - 1; i <= j; i++, j--) {
    if (sanitizedWord.charAt(i) !== sanitizedWord.charAt(j)) {
      return `The word ${word} is not a palindrome!`;
    }
  }
  
  return `The word ${word} is a palindrome!`;  
}
