const { RETRY_COMMAND } = require('./system.js');

const ERRORS = Object.freeze({
  invalidRetryCommand: `${Object.values(RETRY_COMMAND).join(', ')} 중에서 입력해주세요!`,
});

module.exports = ERRORS;
