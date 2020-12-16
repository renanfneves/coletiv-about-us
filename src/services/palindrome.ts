export default function Palindrome(originalString: string) {
  const simplesChars = /[\W_]/g;
  const inLowerCase = originalString.toLowerCase().replace(simplesChars, '');

  let reversedString = ''; 

  let index = inLowerCase.length -1;

  for (index; index >= 0; index--) {
    reversedString += inLowerCase[index];
    
  }

  return inLowerCase === reversedString;
}