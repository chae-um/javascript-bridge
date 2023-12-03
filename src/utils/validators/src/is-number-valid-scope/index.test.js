import isNumberValidScope from './index.js';

describe('isNumberValidScop', () => {
  test.each([2, 21])('유효한 숫자가 아니면 false를 리턴한다', (input) => {
    expect(isNumberValidScope(input)).toBe(false);
  });

  test.each([3, 14, 20])('유효한 숫자이면 true를 리턴한다.', (input) => {
    expect(isNumberValidScope(input)).toBe(true);
  });
});
