const Bridge = require('../../Bridge/Bridge.js');
const BridgeMaker = require('../BridgeMaker.js');

describe('BridgeMaker 테스트', () => {
  it.each([
    {
      size: 4,
      numbers: [1, 1, 1, 1],
      expected: [
        Bridge.LANE_NAMES.up,
        Bridge.LANE_NAMES.up,
        Bridge.LANE_NAMES.up,
        Bridge.LANE_NAMES.up,
      ],
    },
    {
      size: 3,
      numbers: [0, 1, 0],
      expected: [Bridge.LANE_NAMES.down, Bridge.LANE_NAMES.up, Bridge.LANE_NAMES.down],
    },
    {
      size: 2,
      numbers: [0, 0],
      expected: [Bridge.LANE_NAMES.down, Bridge.LANE_NAMES.down],
    },
  ])(
    '`makeBridge` 호출시 입력받은 `size`만큼 `generateRandomNumber`를 활용하여 `Bridge`의 조건을 생성한다.',
    ({ size, numbers, expected }) => {
      // given & when
      const mockGenerator = numbers.reduce(
        (acc, number) => acc.mockReturnValueOnce(number),
        jest.fn(),
      );
      const result = BridgeMaker.makeBridge(size, mockGenerator);

      // then
      expect(result).toEqual(expected);
    },
  );
});
