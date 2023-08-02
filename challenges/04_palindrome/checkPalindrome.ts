export function checkPalindrome(word: string): boolean {

  const sanitizedWord = word.toLowerCase().replace(/[^a-z]/, '');

  for (let i = 0, j = sanitizedWord.length - 1; i <= j; i++, j--) {
    if (sanitizedWord.charAt(i) !== sanitizedWord.charAt(j)) return false;
  }
  
  return true;  
}
