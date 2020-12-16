export default function Permute(originalString?: string) {
  const recursiveFindPermutes = (str?: string): string[] => {
    if (!str) return [];
    if (str.length < 2) return [str];
    if (str.length === 2 ) return [str, str.split('').reverse().join('')];
  
    let permutations = [];
    let strLength = str.length;
     
    for (let index = 0; index < strLength; index++){
      const char = str[index];
  
      if (str.indexOf(char) !== index) {
        continue;
      }
  
      const remainingChars = str.slice(0, index) + str.slice(index + 1, str.length);
  
      for (let permutation of recursiveFindPermutes(remainingChars)) {
        permutations.push(char + permutation) 
      }
    }

    return permutations;
  }

  return recursiveFindPermutes(originalString);
}