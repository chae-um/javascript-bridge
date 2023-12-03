/**
 * @param {number} input
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
export default function isNumberValidScope(input, start = 3, end = 20) {
  return input >= start && input <= end;
}
