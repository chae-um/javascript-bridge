import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';

const MovingValidator = {
  check(moving) {
    if (moving.length !== 1) handleValidationError(ERROR_MESSAGE.length);
    if (moving !== 'U' && moving !== 'D') handleValidationError(ERROR_MESSAGE.moving);
  },
};

export default MovingValidator;
