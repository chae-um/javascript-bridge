import isNumber from './index.js';

describe('isNumber', () => {
  test.each([{ input: 'hi' }, { input: '12#fed' }])(
    '숫자가 아닐 때 false를 리턴해야한다.',
    ({ input }) => {
      expect(isNumber(Number(input))).toBe(false);
    },
  );

  test.each([{ input: '23' }, { input: 33 }])(`숫자일 때 true를 리턴해야 합니다.`, ({ input }) => {
    expect(isNumber(Number(input))).toBe(true);
  });
});
