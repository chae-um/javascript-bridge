import { ERROR_MESSAGE } from '../../constants/Messages.js';
import SYSTEM from '../../constants/System.js';
import { handleValidationError } from '../error/index.js';

const MovingValidator = {
  check(moving) {
    if (moving.length !== 1) handleValidationError(ERROR_MESSAGE.length);
    if (moving !== SYSTEM.up && moving !== SYSTEM.down) handleValidationError(ERROR_MESSAGE.moving);
  },
};

export default MovingValidator;
