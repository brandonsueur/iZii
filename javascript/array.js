/*
 * Small function for combine multiple arrays into one array.
 *
 * @param {Array} ...arrays - Tables to be combined
 * @example combine(['gynidark'], ["brandon", "azerty"], ['gyni', 'dark']) 
 * @return {Array} ['gynidark', 'brandon', 'azerty', 'gyni', 'dark']
 */

const combine = (...arrays) => [].concat(...arrays);


/*
 * Small function for returns a copy of the array with all falsy values removed.
 *
 * @param {Array} arr - Array to be checked
 * @example compact([0, 18, 2, false, '', 'brandon'])
 * @return {Array} [18, 2, 'brandon']
 */

const compact = arr => arr.filter(Boolean);


/*
 * Small function for returns last value.
 *
 * @param {Array} arr - Array to be checked
 * @example last(["brandon", "sueur"])
 * @return {String} "sueur"
 */

const last = arr => arr.slice(-1)[0];
