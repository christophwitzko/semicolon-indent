'use strict'

var fs = require('fs')
var semicolonIndent = require('../')

var help = function () {
  /*
  Usage:
    semicolon-indent <options> -- <file>

  Options:
    -f, --force    Indent everything with semicolons
    -v, --version  Output the current version
    -h, --help     Output this help info
  */
}.toString().split(/\n/).slice(2, -2).join('\n')

module.exports = function (argv) {
  process.stdin.setEncoding('utf8')
  if (argv.version || argv.v) return console.log(require('../package.json').version)
  if (argv.help || argv.h) return console.log(help)
  var fmode = argv.force || argv.f
  var inputFile = argv._.shift()
  if (fs.existsSync(inputFile) && fs.statSync(inputFile).isFile()) {
    var fileContent = fs.readFileSync(inputFile).toString()
    process.stdout.write(semicolonIndent(fileContent, fmode))
    return
  }

  var buffer = ''
  process.stdin.on('readable', function () {
    var chunk = process.stdin.read()
    if (chunk !== null) buffer += chunk
  })

  process.stdin.on('end', function () {
    process.stdout.write(semicolonIndent(buffer, fmode))
  })
}
