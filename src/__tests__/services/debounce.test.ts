import { Debounce } from '../../services';

test('It should call callback function just one time', () => {
  let callbackFunction = jest.fn();

  const debounced = Debounce(callbackFunction, 100);

  const callOne = debounced();
  expect(callOne).toBeFalsy();

  const callTwo = debounced();
  expect(callTwo).toBeFalsy();

  const callThree = debounced();
  expect(callThree).toBeTruthy();
});



