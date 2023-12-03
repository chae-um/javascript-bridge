const HardDeck = require('../../Deck/HardDeck.js');
const Stack = require('../../Stack/Stack.js');
const WeakDeck = require('../../Deck/WeakDeck.js');
const Bridge = require('../Bridge.js');

describe('Bridge 예외 테스트', () => {
  it.each([{ size: 3 }, { size: 10 }, { size: 20 }])(
    '`stacks`에 `length`가 3~20인 값이 들어올 시 에러가 발생하지 않는다.',
    ({ size }) => {
      // given & when
      const result = () => Bridge.of(Array.from({ length: size }));

      expect(result).not.toThrow();
    },
  );

  it.each([{ size: 0 }, { size: 1 }, { size: 2 }, { size: 21 }, { size: 30 }])(
    '`stacks`에 `length`가 3~20이 아닌 값이 들어올 시 에러가 발생한다.',
    ({ size }) => {
      // given & when
      const result = () => Bridge.of(Array.from({ length: size }));

      // then
      expect(result).toThrow(Bridge.ERROR.invalidSize);
    },
  );

  it.each([{ lane: 'Q' }, { lane: 'V' }, { lane: 'X' }])(
    '`cross` 호출시 입력받은 `lane`이 스택에 없으면 에러가 발생한다.',
    ({ lane }) => {
      // given
      const stacks = [
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
        ]),
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
        ]),
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
        ]),
      ];
      const bridge = Bridge.of(stacks);

      // when
      const result = () => bridge.cross(lane);

      // then
      expect(result).toThrow(Bridge.ERROR.invalidLane);
    },
  );
});
