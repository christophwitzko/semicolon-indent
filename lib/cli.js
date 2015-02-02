'use strict'

var fs = require('fs')
var semicolonIndent = require('../')
var pkg = require('../package.json')

module.exports = function (argv) {
  process.stdin.setEncoding('utf8')
  if (argv.version || argv.v) return console.log(pkg.version)
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
