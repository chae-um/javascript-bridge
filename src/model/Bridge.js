import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';
import { handleValidationError } from '../utils/error/index.js';
import { isInteger, isNumber, isNumberValidScope } from '../utils/validators/index.js';

class Bridge {
  #bridgeSize;

  /**
   * @param {number} bridgeSize
   */
  constructor(bridgeSize) {
    this.#validate(bridgeSize);

    this.#bridgeSize = bridgeSize;
  }

  /**
   * @param {number} bridgeSize
   * @returns {Bridge}
   */
  static of(bridgeSize) {
    return new Bridge(bridgeSize);
  }

  /**
   * @param {number} bridgeSize
   */
  #validate(bridgeSize) {
    if (!isNumber(bridgeSize)) handleValidationError(ERROR_MESSAGE.number);
    if (!isInteger(bridgeSize)) handleValidationError(ERROR_MESSAGE.integer);
    if (!isNumberValidScope(bridgeSize)) handleValidationError(ERROR_MESSAGE.numberScope);
  }

  makeBridge(generator = BridgeRandomNumberGenerator.generate) {
    return BridgeMaker.makeBridge(this.#bridgeSize, generator);
  }
}

export default Bridge;
