const ApplicationError = require('../../exceptions/ApplicationError.js');
const { isOutOfRange } = require('../../utils/validator.js');
const Stack = require('../Stack/Stack.js');

/**
 * @typedef BridgeResult
 * @property {boolean} result
 * @property {string[]} log
 */

class Bridge {
  /**
   * @readonly
   */
  static LANE_NAMES = {
    up: 'U',
    down: 'D',
  };

  /**
   * @readonly
   */
  static MIN_SIZE = 3;

  /**
   * @readonly
   */
  static MAX_SIZE = 20;

  /**
   * @readonly
   */
  static ERROR = {
    invalidSize: `다리 길이는 ${Bridge.MIN_SIZE}부터 ${Bridge.MAX_SIZE} 사이의 숫자여야 합니다.`,
    invalidLane: `${Object.values(Bridge.LANE_NAMES).join(', ')} 중 하나를 입력해주세요!`,
  };

  /**
   * @type {Stack[]}
   */
  #stacks;

  #index = 0;

  /**
   * @type {string[]}
   */
  #log = [];

  constructor(stacks) {
    this.#validate(stacks);
    this.#stacks = stacks;
  }

  static of(stacks) {
    return new Bridge(stacks);
  }

  #validate(stacks) {
    if (isOutOfRange(stacks.length, { min: Bridge.MIN_SIZE, max: Bridge.MAX_SIZE })) {
      throw new ApplicationError(Bridge.ERROR.invalidSize);
    }
  }

  /**
   * @param {string} lane
   * @returns {BridgeResult}
   */
  cross(lane) {
    this.#validateCross(lane);
    const { result, stacks } = this.#stacks[this.#index].through(lane);
    this.#log.push(stacks);
    this.#index += 1;
    return {
      result,
      log: this.#log,
    };
  }

  #validateCross(lane) {
    if (!Object.values(Bridge.LANE_NAMES).includes(lane)) {
      throw new ApplicationError(Bridge.ERROR.invalidLane);
    }
  }

  isCompleted() {
    return this.#stacks.length === this.#index;
  }

  init() {
    this.#stacks.forEach((stack) => stack.init());
    this.#index = 0;
    this.#log = [];
  }
}

module.exports = Bridge;
