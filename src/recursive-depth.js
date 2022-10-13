const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {

  calculateDepth(arr, temp = 0) {
    temp++
    let result = temp

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let c = this.calculateDepth(arr[i], temp)
        result = Math.max(result, c)
      }
    }

    return result
  }
}

module.exports = {
  DepthCalculator
};
