'use strict';

const rle = input => input.length ? input.match(/(.)\1*/g).map(elem =>  elem.length - 1 ? elem[0] + elem.length : elem[0]).join('') : '';