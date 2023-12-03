/**
 *  값이 범위를 초과하였는지 판별합니다.
 * @param {number} value 체크할 값입니다.
 * @param {{ min: number, max: number}} range 유효 범위입니다.
 * @returns {boolean} 범위 초과 여부입니다.
 */
const isOutOfRange = (value, { min, max }) => value < min || value > max;

module.exports = {
  isOutOfRange,
};
