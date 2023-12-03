const { HardDeck, WeakDeck } = require('../../Deck/index.js');
const Stack = require('../Stack.js');
const Bridge = require('../../Bridge/Bridge.js');

describe('Stack 테스트', () => {
  it.each([
    {
      decks: [
        { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
        { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
      ],
      throughLane: Bridge.LANE_NAMES.up,
      expected: {
        result: true,
        stacks: ['O', ' '],
      },
    },
    {
      decks: [
        { name: Bridge.LANE_NAMES.up, deck: WeakDeck.of() },
        { name: Bridge.LANE_NAMES.down, deck: HardDeck.of() },
      ],
      throughLane: Bridge.LANE_NAMES.up,
      expected: {
        result: false,
        stacks: ['X', ' '],
      },
    },
    {
      decks: [
        { name: Bridge.LANE_NAMES.up, deck: WeakDeck.of() },
        { name: Bridge.LANE_NAMES.down, deck: HardDeck.of() },
      ],
      throughLane: Bridge.LANE_NAMES.down,
      expected: {
        result: true,
        stacks: [' ', 'O'],
      },
    },
    {
      decks: [
        { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
        { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
      ],
      throughLane: Bridge.LANE_NAMES.down,
      expected: {
        result: false,
        stacks: [' ', 'X'],
      },
    },
  ])(
    '`through`는 입력받은 `lane`의 `stack`을 `trampled`한다.',
    ({ decks, throughLane, expected }) => {
      // given
      const stack = Stack.of(decks);

      // when
      const result = stack.through(throughLane);

      expect(result).toEqual(expected);
    },
  );
});
