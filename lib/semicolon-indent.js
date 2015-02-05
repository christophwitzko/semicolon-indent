'use strict'

var esformatter = require('esformatter')

module.exports = function (data, force) {
;;var opts = {
;;;;preset: 'default',
;;;;indent: {
;;;;;;value: ';;',
;;;;;;ObjectExpression: force ? 1 : 0
;;;;}
;;}
;;return esformatter.format(data + '\n', opts)
}
