/*
 * Small function to check if the class exists in element
 *
 * @param {String} el - Retrieve the element html
 * @param {String} c - The class to be checked
 * @example isClass('body', 'hello')
 * @return {boolean} false
 */

const isClass = (el, c) => !!$(el).hasClass(c)
