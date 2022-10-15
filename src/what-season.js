const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // Проверка наличия входного аргумента
  if (typeof date === "undefined") {
    return 'Unable to determine the time of year!';
  }
  // Проверка значение входного аргумента
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  }
  // Решение
  const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"]
  return seasons[date.getMonth()]
}

module.exports = {
  getSeason
};
