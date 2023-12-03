const { HardDeck, WeakDeck } = require('../../Deck/index.js');
const Stack = require('../../Stack/Stack.js');
const Bridge = require('../Bridge.js');

describe('Bridge 테스트', () => {
  it.each([
    {
      stacks: [
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
        ]),
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: WeakDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: HardDeck.of() },
        ]),
        Stack.of([
          { name: Bridge.LANE_NAMES.up, deck: HardDeck.of() },
          { name: Bridge.LANE_NAMES.down, deck: WeakDeck.of() },
        ]),
      ],
      throughLanes: [Bridge.LANE_NAMES.up, Bridge.LANE_NAMES.down, Bridge.LANE_NAMES.up],
      expected: {
        result: true,
        log: [
          ['O', ' '],
          [' ', 'O'],
          ['O', ' '],
        ],
      },
    },
    {
      stacks: [
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
      ],
      throughLanes: [Bridge.LANE_NAMES.down],
      expected: {
        result: false,
        log: [[' ', 'X']],
      },
    },
  ])(
    '`cross` 호출시 `index`의 `stack`의 입력받은 `lane`을 `through`한다.',
    ({ stacks, throughLanes, expected }) => {
      // given
      const bridge = Bridge.of(stacks);
      let result;

      // when
      throughLanes.forEach((lane) => {
        result = bridge.cross(lane);
      });

      // then
      expect(result).toEqual(expected);
    },
  );

  it.each([
    {
      stacks: [
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
      ],
      throughLanes: [Bridge.LANE_NAMES.up, Bridge.LANE_NAMES.up, Bridge.LANE_NAMES.up],
      expected: true,
    },
    {
      stacks: [
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
      ],
      throughLanes: [Bridge.LANE_NAMES.down],
      expected: false,
    },
  ])('`isCompleted` 호출시 완료 여부를 반환한다.', ({ stacks, throughLanes, expected }) => {
    // given
    const bridge = Bridge.of(stacks);

    // when
    throughLanes.forEach((lane) => {
      bridge.cross(lane);
    });
    const result = bridge.isCompleted();

    // then
    expect(result).toEqual(expected);
  });
});
