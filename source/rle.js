'use strict';

/**
 * Run-length encoding string compression
 * @param {string} input - string to compress
 * @returns {string} - compressed string
 */

const rle = (input) => typeof input === 'string' && input.length ? 
    input.match(/(.)\1*/g).map(elem =>  elem.length === 1 ? elem[0] : elem[0] + elem.length).join('') : '';
