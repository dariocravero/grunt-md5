'use strict';

var fs = require('fs');
var grunt = require('grunt');

exports.md5 = {
  main: function(test) {
    test.expect(2);

    var filenameA = require('crypto').
      createHash('md5').
      update(fs.readFileSync('test/fixtures/js/test-a.js', 'utf8')).
      digest('hex') + '.js';
    var resultA = fs.existsSync('test/fixtures/output/'+filenameA);
    test.ok(resultA, 'should generate a md5 filename');

    var filenameB = require('crypto').
      createHash('md5').
      update(fs.readFileSync('test/fixtures/js/test-b.js', 'utf8')).
      digest('hex') + '.js';
    var resultB = fs.existsSync('test/fixtures/output/'+filenameB);
    test.ok(resultB, 'should generate a md5 filename');

    test.done();
  }
};
