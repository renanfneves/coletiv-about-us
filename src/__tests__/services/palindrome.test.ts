import { Palindrome } from '../../services';

test('It should return true when a palindrome phrase is given', () => {
  const originalString = 'A man, a plan, a canal. Panama';

  const isPalindrome = Palindrome(originalString);

  expect(isPalindrome).toBeTruthy();
});

test('It should return false when a not palindrome phrase is given', () => {
  const originalString = 'not a palindrome';

  const isPalindrome = Palindrome(originalString);

  expect(isPalindrome).toBeFalsy();
});