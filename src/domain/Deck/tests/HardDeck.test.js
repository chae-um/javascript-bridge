const HardDeck = require('../HardDeck.js');

describe('HardDeck 테스트', () => {
  let hardDeck;

  beforeEach(() => {
    hardDeck = HardDeck.of();
  });

  it('`HardDeck`은 `trampled` 호출 시 `state`가 `O`가 된다.', () => {
    // given & when
    const result = hardDeck.trampled();

    expect(result).toBe(HardDeck.TRAMPLED_STATE);
  });
});
