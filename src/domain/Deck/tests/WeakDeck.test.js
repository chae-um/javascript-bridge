const WeakDeck = require('../WeakDeck.js');

describe('WeakDeck 테스트', () => {
  let weakDeck;

  beforeEach(() => {
    weakDeck = WeakDeck.of();
  });

  it('`WeakDeck`은 `trampled` 호출 시 `state`가 `X`가 된다.', () => {
    // given & when
    const result = weakDeck.trampled();

    expect(result).toBe(WeakDeck.TRAMPLED_STATE);
  });
});
