const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {

  result = {}

  const addStats = (node) => node in result ? result[node] += 1 : result[node] = 1

  domains.forEach(domain => {
    let nodes = domain.split(".")
    let node = "." + nodes.pop()
    addStats(node)
    while (nodes.length) {
      node = node + "." + nodes.pop()
      addStats(node)
    } 
  })

  return result
}

module.exports = {
  getDNSStats
};
