import BridgeRandomNumberGenerator from '../src/BridgeRandomNumberGenerator.js';
import { ERROR_MESSAGE } from '../src/constants/Messages.js';
import Bridge from '../src/model/Bridge.js';

jest.mock('../src/BridgeRandomNumberGenerator');

describe('Bridge Class', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('올바른 인스턴스를 생성한다.', () => {
    const bridge = new Bridge(5);
    expect(bridge).toBeInstanceOf(Bridge);
  });

  test('3~20사이의 숫자가 아니면 얘외를 발생시킨다.', () => {
    expect(() => new Bridge(0)).toThrow(ERROR_MESSAGE.numberScope);
  });

  test('소수를 입력하면 예외를 발생시킨다.', () => {
    expect(() => new Bridge(5.5)).toThrow(ERROR_MESSAGE.integer);
  });

  test('숫자가 아니면 예외를 발생시킨다.', () => {
    expect(() => new Bridge(Number('not a number'))).toThrow(ERROR_MESSAGE.number);
  });

  test('다리사이즈에 알맞는 다리를 만들어야 한다.', () => {
    const bridge = new Bridge(5);

    const generatedBridge = 0;
    BridgeRandomNumberGenerator.generate.mockReturnValue(generatedBridge);

    const expectedBridge = ['D', 'D', 'D', 'D', 'D'];

    const result = bridge.makeBridge(BridgeRandomNumberGenerator.generate);

    expect(result).toHaveLength(5);
    expect(result).toEqual(expectedBridge);
  });
});
