import { Permute } from '../../services';

test('It should return all permutes when an abc word is given', () => {
  const originalString = 'abc';

  const permutes = Permute(originalString);
  
  expect(permutes).toMatchObject(
    ["abc", "acb", "bac", "bca", "cab", "cba"]
  );
});

test('It should return empty array when an empty string is given', () => {
  const originalString = '';

  const permutes = Permute(originalString);
  
  expect(permutes).toHaveLength(0);
});

