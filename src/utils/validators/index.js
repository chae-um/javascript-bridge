import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';

import isEmptyString from './src/is-empty-string/index.js';

export { default as isNumberValidScope } from './src/is-number-valid-scope/index.js';
export { default as isNumber } from './src/is-number/index.js';
export { default as isInteger } from './src/is-integer/index.js';

/**
 * @param {string} input
 */
export function validateEmptyString(input) {
  if (isEmptyString(input)) {
    handleValidationError(ERROR_MESSAGE.emptyString);
  }
}
