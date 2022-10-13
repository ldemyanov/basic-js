const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  const temp = {
    result: "",
    symbol: "",
    count: 0,
    updateResult() {
      if (temp.count > 1) {
        this.result += `${this.count}${this.symbol}`
      }
      if (temp.count == 1) {
        this.result += this.symbol
      }
    }
  }
 
  for (let i = 0; i < str.length; i++) {
    if (str[i] === temp.symbol) {
      temp.count += 1
    } else {
      temp.updateResult()
      temp.symbol = str[i]
      temp.count = 1
    }
    if (i === str.length-1) {
      temp.updateResult()
    }
  }
 
  return temp.result
 }

module.exports = {
  encodeLine
};
