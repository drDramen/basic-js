const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes: rT,
    separator: s,
    addition: addStr,
    additionRepeatTimes: aRt,
    additionSeparator: aS
  } = options;

  const repeat = (times = 1) => {
    return (data = '') => Array(times).fill(`${data}`);
  }

  const join = (separator) => {
    return (array = []) => array.join(separator);
  }

  const composition = (...args) => {
    return (string) => {
      return args.reduce((init, current) => current(init), string);
    }
  }

  const addStrComposition = composition(repeat(aRt), join(aS || '|'))(addStr);

  return composition(repeat(rT), join(s || '+'))(str + addStrComposition);
}

module.exports = {
  repeater
};
