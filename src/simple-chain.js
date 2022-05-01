const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value = ' ') {
    this.string.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (!Number.isInteger(position) || !this.string[position - 1]) {
        throw new Error('You can\'t remove incorrect link!');
      }

      this.string.splice(position - 1, 1);
      return this;
    } catch (e) {
      this.string.length = 0;
      throw e;
    }
  },
  reverseChain() {
    this.string.reverse();
    return this;
  },
  finishChain() {
    const output = this.string.join('~~');
    this.string.length = 0;
    return output;
  },
};

module.exports = {
  chainMaker
};
