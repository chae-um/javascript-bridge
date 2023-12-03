import { BRIDGE_ERROR_MESSAGE } from '../constant/BridgeGameMessage.js';
import { BRIDGE_LENGTH } from '../constant/BridgeGameOption.js';
import ValidationError from '../error/ValidationError.js';

const BridgeSizeValidator = Object.freeze({
  checkNumber(size) {
    if (Number.isNaN(size)) {
      throw new ValidationError(BRIDGE_ERROR_MESSAGE.notANumber);
    }
  },

  validSizeRange(size) {
    if (size < BRIDGE_LENGTH.min || size > BRIDGE_LENGTH.max) {
      throw new ValidationError(BRIDGE_ERROR_MESSAGE.notAValidRange);
    }
  },

  validateBridgeSize(size) {
    const switchedBridgeSize = Number(size);

    this.checkNumber(switchedBridgeSize);
  },
});

export default BridgeSizeValidator;
