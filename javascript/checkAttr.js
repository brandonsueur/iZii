/*
 * Small function for check attr booleen.
 *
 * @param {String} el - Retrieve the element html
 * @param {String} attr - Attribute in the html element
 * @example checkAttr('body', 'style')
 * @return {bool} false
 */

const checkAttr = (el, attr) => !!$(el).attr(attr)
