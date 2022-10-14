const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    position--
    if (Number.isInteger(position) && position < this.chain.length && position > -1) {
      this.chain.splice(position, 1)
    } else {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    res =  this.chain.map((value) => `( ${value} )`).join('~~')
    this.chain = []
    return res
  }
};

module.exports = {
  chainMaker
};
